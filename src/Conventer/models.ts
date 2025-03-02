import { UseFormReturn } from "react-hook-form";
import { CourseType } from ".";

export interface IPropsConventer {
  methods: UseFormReturn<
    {
      amount: string;
      convertedAmount: string;
      fromCrypto: string;
      toCrypto: string;
      email: string;
      walletAddress: string;
    },
    any,
    undefined
  >;
  isLoading: boolean;
  onSubmit: (data: any) => void;
  onToggle: () => void;
  fromCrypto: string;
  ratesToCrypto: number | null | undefined;
  toCrypto: string;
  timeLeft: number;
  setSelectedCourse: React.Dispatch<CourseType>;
  selectedCourse: CourseType;
}
