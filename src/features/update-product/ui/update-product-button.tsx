'use client';

import { cache } from '@/entities/products/lib/react-query/cache';
import { usePutProduct } from '@/entities/products/model/hooks';
import { ProductEditor } from '@/features/product-editor';
import { ProductFieldValues } from '@/features/product-editor/types';
import { Product } from '@/shared/api';
import { EditIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useSnackbar } from 'notistack';

type Props = { product: Product };

export function UpdateProductButton({
  product: { id, ...restProduct },
}: Props) {
  const { mutate, isLoading } = usePutProduct(id);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { enqueueSnackbar } = useSnackbar();

  const sendFormData = (data: ProductFieldValues) => {
    mutate(
      { id, ...data },
      {
        onSuccess: (product) => {
          cache.updateInCache(id, product);
          enqueueSnackbar({
            message: 'Товар изменен успешно',
            variant: 'success',
          });
          onClose();
        },
      },
    );
  };

  return (
    <>
      <IconButton
        size="sm"
        colorScheme="gray"
        aria-label="Удалить продукт"
        icon={<EditIcon />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Изменить данные товара</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProductEditor
              defaultValues={restProduct}
              isLoading={isLoading}
              sendFormData={sendFormData}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
