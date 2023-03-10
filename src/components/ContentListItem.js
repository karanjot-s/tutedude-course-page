import React, { useState } from "react";
import styles from "../styles/ContentList.module.css";

const ContentListItem = ({ topic, ind }) => {
  const completed = topic.lectures.filter((l) => l.completed);
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.topic}>
      <div
        className={styles.topic_head}
        onClick={() => {
          setOpen((old) => !old);
        }}
      >
        <h2>
          Module {ind + 1} : {topic.title}
        </h2>
        <div className={styles.topic_info}>
          <span>{topic.time}</span>
          <span>
            {completed.length} / {topic.lectures.length} lectures
          </span>
        </div>
        <svg
          className={`${styles.arrow} ${open ? styles.rotate : ""}`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.59 0.59L6 5.17L1.41 0.59L0 2L6 8L12 2L10.59 0.59Z"
            fill="#800080"
          />
        </svg>
      </div>
      <div hidden={!open}>
        {topic.lectures.map((lecture, i) => (
          <LectureItem key={i} lecture={lecture} i={i} />
        ))}
      </div>
    </div>
  );
};

const LectureItem = ({ lecture, i }) => {
  const [watched, setWatched] = useState(lecture.completed);
  return (
    <div className={styles.lecture}>
      <input
        type="checkbox"
        checked={watched}
        onChange={(e) => {
          setWatched(e.target.checked);
        }}
      />
      <div>
        <h3>
          {i + 1}. {lecture.title}
        </h3>
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M7.33317 12.75L12.3332 9.00002L7.33317 5.25002V12.75ZM8.99984 0.666687C4.39984 0.666687 0.666504 4.40002 0.666504 9.00002C0.666504 13.6 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6 17.3332 9.00002C17.3332 4.40002 13.5998 0.666687 8.99984 0.666687ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.675 2.33317 9.00002C2.33317 5.32502 5.32484 2.33335 8.99984 2.33335C12.6748 2.33335 15.6665 5.32502 15.6665 9.00002C15.6665 12.675 12.6748 15.6667 8.99984 15.6667Z"
              fill="black"
            />
          </svg>
          <span>{lecture.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentListItem;
