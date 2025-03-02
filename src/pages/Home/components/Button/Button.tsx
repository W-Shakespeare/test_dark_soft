import React, { forwardRef } from "react";
import styles from "./Button.module.scss";

interface IProps {
  onClick: () => void;
}

export const Button = forwardRef<HTMLButtonElement, IProps>(
  ({ onClick }, ref) => {
    return (
      <button ref={ref} onClick={onClick} className={styles.btn}>
        <span className="flex items-center justify-center gap-x-8">
          <span className="truncate">Join for free</span>
        </span>
      </button>
    );
  }
);
