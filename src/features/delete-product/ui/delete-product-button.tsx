'use client';

import { cache } from '@/entities/products/lib/react-query/cache';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';

type Props = { id: number };

export function DeleteProductButton({ id }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    onClose();
    cache.deleteFromCache(id);
    router.push('/');
    enqueueSnackbar({ message: 'Товар успешно удален', variant: 'success' });
  };

  return (
    <>
      <IconButton
        size="sm"
        colorScheme="red"
        aria-label="Удалить продукт"
        icon={<DeleteIcon />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Подтвердите действие</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Вы действительно хотите удалить этот товар из каталога?
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Отменить
            </Button>
            <Button colorScheme="red" onClick={handleDelete}>
              Подтвердить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
