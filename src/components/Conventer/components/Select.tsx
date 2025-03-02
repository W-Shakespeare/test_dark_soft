import React, { useState, useRef, useEffect } from "react";
import Tabs from "./Tabs";
import styles from "./Select.module.scss";
import { useClickOutside } from "../../hooks/useClickOutside";

import { TokenIcon } from "@web3icons/react";
import classNames from "classnames";
import { supportedCryptos } from "../../constant";
import { CryptoSymbol } from "../../models";

interface Option {
  label: CryptoSymbol;
  name: string;
  type: string;
}

interface SelectWithSearchProps {
  options: Option[];
  placeholder: string;
  tabs: string[];
  onChange: (value: CryptoSymbol) => void;

  value: CryptoSymbol;
}

const SelectWithSearch: React.FC<SelectWithSearchProps> = ({
  options,
  placeholder,
  tabs,
  onChange,
  value,
}) => {
  // const [selectedValue, setSelectedValue] = useState<CryptoSymbol>(value);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0); // Состояние для активной вкладки

  const selectHeader = useRef<HTMLDivElement | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const closeSelect = () => setIsOpen(false);
  useClickOutside(selectRef, selectHeader, closeSelect);

  // Фильтрация опций по поисковому запросу и активной вкладке
  const filteredOptions = options
    .filter(
      (option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase()) && // Поиск по label
        option.type === tabs[activeTab].toLowerCase() // Фильтрация по типу, соответствующему активной вкладке
    )
    .sort((a, b) => a.label.localeCompare(b.label)); // Сортировка по label

  const handleSelect = (value: CryptoSymbol) => {
    // setSelectedValue(value);
    closeSelect();
    onChange(value);
  };

  const handleTabChange = (index: number) => setActiveTab(index);

  // useEffect(() => {
  //   setSelectedValue(value);
  // }, [value]);

  return (
    <>
      <div
        ref={selectHeader}
        className={styles.selectHeader}
        onClick={() => setIsOpen((pre) => !pre)} // Переключение открытого состояния
      >
        <div className={styles.wrapperSymbol}>
          <TokenIcon symbol={value} variant="branded" size="32" />
        </div>

        <span className={styles.cryptoName}>{supportedCryptos[value]}</span>

        <div className={styles.selectedSymvol}>
          <span className={styles.cryptoSymbol}>{value || placeholder}</span>
          <img
            src="https://bitberry.cash/assets/design1/img/arrow.svg?v=1.23343234asd"
            alt="arrow"
            className={classNames(styles.selectArrow, {
              [styles.rotated]: isOpen,
            })}
          />
        </div>
      </div>

      <div
        ref={selectRef}
        className={classNames(styles.selectDropdown, {
          [styles.active]: isOpen,
        })}
      >
        {/* Вкладки */}
        <Tabs tabs={tabs} onTabChange={handleTabChange} />

        {/* Поиск */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Обновление поискового запроса
          placeholder="Поиск..."
          className={styles.searchInput}
        />

        {/* Список опций */}
        <ul className={styles.optionList}>
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option.label)}
              className={styles.optionItem}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SelectWithSearch;
