import React, { useState } from "react";
import styles from "./Tabs.module.scss"; // Импортируем стили из CSS модуля

interface TabProps {
  tabs: string[];
  onTabChange: (index: number) => void;
}

const Tabs: React.FC<TabProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onTabChange(index); // Передаем индекс выбранной вкладки в родительский компонент
  };

  return (
    <div className={styles.wrapperTabs}>
      <div className={styles.tabsHeader}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${
              activeTab === index ? styles.active : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
