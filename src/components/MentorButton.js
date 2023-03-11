import React from "react";
import styles from "../styles/MentorButton.module.css";

const MentorButton = () => {
  return (
    <button className={styles.btn}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM4 7H16V9H4V7ZM12 12H4V10H12V12ZM16 6H4V4H16V6Z"
          fill="white"
        />
      </svg>
      <span>Chat with mentor</span>
    </button>
  );
};

export default MentorButton;