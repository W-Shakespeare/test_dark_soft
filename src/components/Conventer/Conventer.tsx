import React from "react";
import styles from "./Conventer.module.scss";
import CryptoConverter from "./components/FormConventer";
import { FormProvider } from "react-hook-form";
import CourseTypeSwitcher from "./components/CourseTypeSwitcher";
import { IPropsConventer } from "./models";

const Conventer: React.FC<IPropsConventer> = (p) => {
  return (
    <section className={styles.wrapperConverter}>
      <div className={styles.converter}>
        <div className={styles.wrapperCourseTypeAndPrice}>
          <div className={styles.wrapperCourseType}>
            <div className={styles.courseTypeInfo}>
              <span>Выберите тип курса </span>
              <img
                src="https://bitberry.cash/assets/design1/img/info.svg?v=1.23343234asd"
                alt="info"
              />
            </div>

            <CourseTypeSwitcher
              selectedCourse={p.selectedCourse}
              onChange={(course) => p.setSelectedCourse(course)}
            />
          </div>

          <div className={styles.price}>
            <div>
              <span>
                1 {p.fromCrypto} = {p.ratesToCrypto} {p.toCrypto}
              </span>
            </div>
            <div className={styles.priceText}>
              До обновления курса:
              <span className={styles.timer}>00:{p.timeLeft} </span>{" "}
            </div>
          </div>
        </div>
        <FormProvider {...p.methods}>
          <CryptoConverter
            isLoading={p.isLoading}
            onSubmit={p.onSubmit}
            onToggle={p.onToggle}
          />
        </FormProvider>
      </div>
    </section>
  );
};

export default Conventer;
