import styles from "./Button.module.scss";

interface IProps {
  onClick: () => void;
}

export const Button: React.FC<IProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      <span className="flex items-center justify-center gap-x-8">
        <span className="truncate">Join for free</span>
      </span>
    </button>
  );
};
