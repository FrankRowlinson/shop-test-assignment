import { Category } from '@/shared/api';
import * as yup from 'yup';

export const schema = yup
  .object({
    title: yup
      .string()
      .required('Укажите название товара')
      .max(70, 'Название должно содержать не более 70 символов'),
    price: yup
      .string()
      .required('Укажите цену')
      .max(6, 'Цена не должна превышать 999999'),
    description: yup
      .string()
      .required('Описание товара обязательно')
      .max(1000, 'Описание должно содержать не более 1000 символов'),
    image: yup
      .string()
      .required('Укажите ссылку на изображение')
      .url('Ссылка должна быть валидным URL'),
    category: yup.string<Category>().required('Выберите категорию товара'),
  })
  .required();
