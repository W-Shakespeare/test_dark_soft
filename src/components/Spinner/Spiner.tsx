import styles from "./Spinner.module.scss";
const Spinner = () => (
  <div className={styles.wrapperLoader}>
    <div className={styles.loader}></div>
  </div>
);
export default Spinner;
