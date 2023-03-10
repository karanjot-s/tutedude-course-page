import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const studentName = "ProfileName";
  const links = [
    { text: "Assesments", link: "#" },
    { text: "video", link: "#" },
    { text: "Chat with Mentor", link: "#chatraChatExpanded" },
  ];
  const [active, setActive] = useState(1);

  return (
    <div className={styles.container}>
      <img src="/assets/logo.png" alt="TuteDude" />

      <div className={styles.nav}>
        <div className={styles.links}>
          {links.map((link, ind) => (
            <span key={ind} className={active === ind ? styles.active : ""}>
              <a
                href={link.link}
                onClick={() => {
                  setActive(ind);
                }}
              >
                {link.text}
              </a>
            </span>
          ))}
        </div>
        <div className={styles.profile}>
          <img
            className={styles.profile_icon}
            src={`/assets/icons/profile.svg`}
            alt=""
          />
          <span>{studentName}</span>
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0959 0.589996L6.50586 5.17L1.91586 0.589996L0.505859 2L6.50586 8L12.5059 2L11.0959 0.589996Z"
              fill="#666666"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
