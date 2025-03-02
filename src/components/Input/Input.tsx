import { FC } from "react";
import { useController } from "react-hook-form";
import { InputProps } from "../../models";
import styles from "./Input.module.scss";

const Input: FC<InputProps> = ({
  name,
  control,
  label,
  type = "text",
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <>
      <input {...field} {...rest} type={type} />
      {error && (
        <div className={styles.error}>
          <img
            src="https://bitberry.cash/assets/design1/img/fg-error.svg?v=1.23343234asd"
            alt="error"
          />
          <span className={styles.errorText}>{error.message}</span>
        </div>
      )}
    </>
  );
};

export default Input;
