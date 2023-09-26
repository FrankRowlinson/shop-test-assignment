import { Category } from '@/shared/api';
import * as yup from 'yup';

export const schema = yup
  .object({
    title: yup
      .string()
      .required('Укажите название товара')
      .min(5, 'Название должно содержать не менее 5 символов')
      .max(70, 'Название должно содержать не более 70 символов'),
    price: yup
      .string()
      .required('Укажите цену')
      .max(5, 'Цена не должна превышать 99999'),
    description: yup
      .string()
      .required('Описание товара обязательно')
      .min(10, 'Описание должно содержать не менее 10 символов')
      .max(300, 'Описание должно содержать не более 300 символов'),
    image: yup
      .string()
      .required('Укажите ссылку на изображение')
      .url('Ссылка должна быть валидным URL'),
    category: yup.string<Category>().required('Выберите категорию товара'),
  })
  .required();
