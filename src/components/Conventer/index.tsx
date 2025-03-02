import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import Conventer from "./Conventer";
import { validationSchema } from "./validationSchema";
import { fetchRates } from "../../api/home";

interface Rates {
  [key: string]: {
    [key: string]: number;
  };
}

export type CourseType = "Лутчий курс" | "Фиксированный курс";

const ContainerConventer = () => {
  const [selectedCourse, setSelectedCourse] =
    useState<CourseType>("Лутчий курс");

  const [rates, setRates] = useState<Rates | null>(null);
  const [ratesToCrypto, setRatesToCrypto] = useState<number | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState(30);

  const methods = useForm({
    defaultValues: {
      amount: "1",
      convertedAmount: "1",
      fromCrypto: "ARB",
      toCrypto: "ARB",
      email: "",
      walletAddress: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const { setValue, watch } = methods;

  const fromCrypto = watch("fromCrypto");
  const toCrypto = watch("toCrypto");
  const amount = watch("amount");

  const onToggle = () => {
    setValue("fromCrypto", toCrypto);
    setValue("toCrypto", fromCrypto);
  };

  const isEmpty = (obj: object) => Object.keys(obj).length === 0;

  const getRates = () => {
    setIsLoading(true);
    fetchRates({ fromCrypto, toCrypto }).then((rates) => {
      setIsLoading(false);

      if (!rates || isEmpty(rates)) return;

      const toCryptoVal = Number(rates[fromCrypto][toCrypto]);
      const convertedAmount = Number(amount) * toCryptoVal;
      setRates(rates);
      setRatesToCrypto(toCryptoVal);
      setValue("convertedAmount", String(convertedAmount));
    });
  };

  const convertCourse = () => {
    if (!rates || isEmpty(rates)) return;

    const toCryptoVal = Number(rates[fromCrypto][toCrypto]);
    const newConvertedAmount = Number(amount) * toCryptoVal;
    setValue("convertedAmount", String(newConvertedAmount || ""));
  };

  useEffect(getRates, [fromCrypto, toCrypto]);
  useEffect(convertCourse, [amount]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const propsConventer = {
    methods,
    isLoading,
    onSubmit,
    onToggle,
    fromCrypto,
    ratesToCrypto,
    toCrypto,
    timeLeft,
    setSelectedCourse,
    selectedCourse,
  };

  return <Conventer {...propsConventer} />;
};

export default ContainerConventer;
