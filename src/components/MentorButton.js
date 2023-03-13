import React, { useEffect, useState } from "react";
import styles from "../styles/MentorButton.module.css";

const MentorButton = () => {
  const [chakraInit, setChakraInit] = useState(false);

  useEffect(() => {
    initChakra();
    // eslint-disable-next-line
  }, []);

  function initChakra(name, email) {
    if (chakraInit) return;
    (function (d, w, c) {
      w.ChatraID = process.env.REACT_APP_CHAKRA_ID;
      var s = d.createElement("script");
      w[c] =
        w[c] ||
        function () {
          (w[c].q = w[c].q || []).push(arguments);
        };
      s.async = true;
      s.src = "https://call.chatra.io/chatra.js";
      if (d.head) d.head.appendChild(s);
    })(document, window, "Chatra");
    window.ChatraIntegration = {
      /* main properties */
      name: name,
      email: email,
    };
    setChakraInit(true);
  }

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
