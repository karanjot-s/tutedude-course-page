import React from "react";
import styles from "../styles/Progress.module.css";

const Progress = ({ min, max, curr }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.text}>
        <span>{curr}</span> days left
      </div>
      <div className={styles.progCont}>
        <div
          className={styles.prog}
          style={{ width: `${(curr / (max - min)) * 100}%` }}
        >
          <svg
            className={styles.pointer}
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.21651 5.625C4.12028 5.79167 3.87972 5.79167 3.78349 5.625L0.752404 0.375C0.656179 0.208333 0.776461 0 0.968911 0L7.03109 0C7.22354 0 7.34382 0.208333 7.2476 0.375L4.21651 5.625Z"
              fill="#431943"
            />
          </svg>
        </div>
        <div className={styles.numbers}>
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
