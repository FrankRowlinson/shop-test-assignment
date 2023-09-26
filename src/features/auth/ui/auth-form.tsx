'use client';

import { useAuthenticate } from '@/entities/user/model/hooks';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  chakra,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { AuthFieldValues } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../schema';

export function AuthForm() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const { mutate, isLoading } = useAuthenticate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFieldValues>({ resolver: yupResolver(schema) });

  const onSubmit = (formData: AuthFieldValues) => {
    mutate(formData, {
      onSuccess: () => {
        enqueueSnackbar({ variant: 'success', message: 'Вы успешно вошли!' });
        router.push('/');
      },
      onError: () => {
        enqueueSnackbar({
          variant: 'error',
          message: 'Неверно введен логин или пароль',
        });
      },
    });
    reset({ password: '' });
  };

  return (
    <Stack gap={4}>
      <Heading>Вход</Heading>
      <chakra.form
        onSubmit={handleSubmit(onSubmit)}
        px={[8, 16]}
        py="8"
        w={['100vw', '450px']}
        borderRadius={16}
        shadow="xl"
      >
        <Stack gap={2}>
          <FormControl isRequired isInvalid={!!errors.username}>
            <FormLabel>Логин</FormLabel>
            <Input {...register('username')} placeholder="Введите логин..." />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel>Пароль</FormLabel>
            <Input
              {...register('password')}
              placeholder="********"
              type="password"
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            isLoading={isLoading}
            colorScheme="facebook"
            mt={4}
          >
            Войти
          </Button>
        </Stack>
      </chakra.form>
    </Stack>
  );
}
