import * as yup from "yup";

export const validationSchema = yup.object({
  amount: yup.string().required("Поле отдаёте является обязательным."),
  convertedAmount: yup
    .string()
    .required("Поле получаете является обязательным."),
  fromCrypto: yup.string().required("Выберите криптовалюту для обмена"),
  toCrypto: yup.string().required("Выберите криптовалюту для получения"),
  email: yup
    .string()
    .email("Некорректный формат email.")
    .required("Поле email является обязательным."),
  walletAddress: yup.string().required("Поле адрес является обязательным."),
});
