import React, { useState } from "react";
import styles from "../styles/VideoCont.module.css";

const VideoCont = () => {
  const [noVid, setNoVid] = useState(false);
  const [vidSrc, setVidSrc] = useState("temp.mp4");
  return (
    <div className={styles.cont}>
      <div className={styles.crumbs}>
        Android Development &gt; Module 1 : Introduction to Android Studio &gt;
        1. Welcome to Android
      </div>
      <div className={styles.video}>
        <video
          style={{ display: noVid ? "none" : "block" }}
          controls
          preload="metadata"
          onError={() => {
            setNoVid(true);
          }}
          onCanPlay={() => {
            setNoVid(false);
            console.log("hllos");
          }}
        >
          <source src={vidSrc} type="video/mp4"></source>
        </video>
        {noVid ? (
          <div className={styles.videoAlt}>
            <svg
              width="88"
              height="72"
              viewBox="0 0 88 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80 0H8C3.6 0 0 3.6 0 8V64C0 68.4 3.6 72 8 72H80C84.4 72 88 68.4 88 64V8C88 3.6 84.4 0 80 0ZM80 52H8V8H80V52Z"
                fill="#666666"
              />
            </svg>
            <span>video lecture will be played here</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default VideoCont;
