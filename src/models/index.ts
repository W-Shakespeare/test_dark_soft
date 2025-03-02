import { Control } from "react-hook-form";
import { supportedCryptos } from "../constant";

export type CryptoSymbol = keyof typeof supportedCryptos;

export interface Rates {
  [key: string]: number;
}

export interface InputProps {
  name: string; // Имя поля, которое будет использоваться в useForm
  control: Control<any>; // Контроллер для управления состоянием поля с помощью React Hook Form
  label: string; // Лейбл для поля
  type?: string; // Тип поля (например, "text", "number", "email" и т. д.)
  placeholder?: string; // Плейсхолдер
}
