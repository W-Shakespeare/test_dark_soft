import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./FormConventer.module.scss";
import SelectWithSearch from "./Select";
import { supportedCryptos } from "../../constant";
import { CryptoSymbol } from "../../models";
import Input from "../../components/Input/Input";
import { createPortal } from "react-dom";
import Spinner from "../../components/Spinner/Spiner";
import classNames from "classnames";

const options = Object.entries(supportedCryptos).map(([symbol, name]) => ({
  label: symbol as CryptoSymbol,
  name: name,
  type: "crypto",
}));

interface IProps {
  isLoading: boolean;
  onSubmit: (data: any) => void;
  onToggle: () => void;
}

export const CryptoConverter: React.FC<IProps> = ({
  isLoading,
  onSubmit,
  onToggle,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext();

  const tabs = ["crypto", "fruit"];

  return (
    <>
      {isLoading && createPortal(<Spinner />, document.body)}

      <form className={styles.wrapperForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.group1}>
          <div className={styles.wrapper}>
            <span className={styles.inpLabel}>Отдаю</span>
            <div className={styles.inputAndSelect}>
              <div
                className={classNames(styles.wrapperIput, {
                  [styles.error]: errors["amount"],
                })}
              >
                <Input
                  name="amount"
                  control={control}
                  label="Сумма"
                  type="number"
                />
              </div>

              <Controller
                control={control}
                name="fromCrypto"
                render={({ field }) => (
                  <SelectWithSearch
                    options={options}
                    placeholder="Выберите криптовалюту"
                    tabs={tabs}
                    onChange={(value) => setValue("fromCrypto", value)}
                    value={field.value as CryptoSymbol}
                  />
                )}
              />
            </div>
          </div>

          <div className={styles.wrapperToggle} onClick={onToggle}>
            <img
              className={styles.toggle}
              src="https://bitberry.cash/assets/design1/img/arrows.svg?v=1.23343234asd"
              alt="toggle"
            />
          </div>

          <div className={styles.wrapper}>
            <span className={styles.inpLabel}>Получаю</span>
            <div className={styles.inputAndSelect}>
              <div
                className={classNames(styles.wrapperIput, {
                  [styles.error]: errors["convertedAmount"],
                })}
              >
                <Input
                  name="convertedAmount"
                  control={control}
                  label="Сумма"
                  type="number"
                />
              </div>

              <Controller
                control={control}
                name="toCrypto"
                render={({ field }) => (
                  <SelectWithSearch
                    options={options}
                    placeholder="Выберите криптовалюту"
                    tabs={tabs}
                    onChange={(value) => setValue("toCrypto", value)}
                    value={field.value as CryptoSymbol}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className={styles.group2}>
          <div className={styles.wrapper}>
            <span className={styles.inpLabel}>Email</span>
            <div className={styles.inputAndSelect}>
              <div
                className={classNames(styles.wrapperIput, {
                  [styles.error]: errors["email"],
                })}
              >
                <Input
                  name="email"
                  control={control}
                  label="Email"
                  type="email"
                />
              </div>
            </div>
          </div>

          <div className={styles.wrapper}>
            <span className={styles.inpLabel}>
              Адрес кошелька в сети {getValues("toCrypto")}
            </span>
            <div className={styles.inputAndSelect}>
              <div
                className={classNames(styles.wrapperIput, {
                  [styles.error]: errors["walletAddress"],
                })}
              >
                <Input
                  name="walletAddress"
                  control={control}
                  label="Адрес кошелька"
                />
              </div>
            </div>
          </div>
        </div>

        <button className={styles.btnConnectWallet} type="submit">
          Отправить
        </button>
      </form>
    </>
  );
};

export default CryptoConverter;
