import * as yup from "yup";

export const schema = yup
  .object({
    username: yup
      .string()
      .required()
      .matches(
        /^\w+$/,
        "Имя пользователя может содержать только цифры, латиницу и _"
      )
      .min(4, "Имя пользователя не может быть короче 4 символов"),
    password: yup
      .string()
      .required()
      .min(4, "Пароль не может быть короче 4 символов"),
  })
  .required();
