'use client';

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { ProductFieldValues } from '../types';
import { chakra } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../schema';

type Props = {
  sendFormData: (formData: ProductFieldValues) => void;
  isLoading: boolean;
  defaultValues?: ProductFieldValues;
};

export function ProductEditor({
  defaultValues,
  sendFormData,
  isLoading,
}: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductFieldValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: ProductFieldValues) => {
    sendFormData(formData);
  };

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <FormControl isInvalid={!!errors.title} isRequired>
          <FormLabel>Название товара</FormLabel>
          <Input
            {...register('title')}
            placeholder="Введите название"
            autoComplete="off"
          />
          {errors.title && (
            <FormErrorMessage>{errors.title.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.price} isRequired>
          <FormLabel>Цена</FormLabel>
          <Input
            type="number"
            {...register('price')}
            placeholder="Введите цену, $"
            autoComplete="off"
          />
          {errors.price && (
            <FormErrorMessage>{errors.price.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.description} isRequired>
          <FormLabel>Описание товара</FormLabel>
          <Textarea
            {...register('description')}
            placeholder="Опишите товар"
            autoComplete="off"
          />
          {errors.description && (
            <FormErrorMessage>{errors.description.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.image} isRequired>
          <FormLabel>Изображение</FormLabel>
          <Input
            {...register('image')}
            placeholder="Вставьте ссылку на изображение"
            autoComplete="off"
          />
          {errors.image && (
            <FormErrorMessage>{errors.image.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.category} isRequired>
          <FormLabel>Категория</FormLabel>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <Stack spacing={2}>
                  <Radio value="electronics">Электроника</Radio>
                  <Radio value="jewelery">Бижутерия</Radio>
                  <Radio value="men's clothing">Мужская одежда</Radio>
                  <Radio value="women's clothing">Женская одежда</Radio>
                </Stack>
              </RadioGroup>
            )}
          />
          {errors.category && (
            <FormErrorMessage>{errors.category.message}</FormErrorMessage>
          )}
        </FormControl>
        <Button mt={4} type="submit" colorScheme="blue" isLoading={isLoading}>
          {defaultValues ? 'Сохранить изменения' : 'Создать'}
        </Button>
      </Stack>
    </chakra.form>
  );
}
