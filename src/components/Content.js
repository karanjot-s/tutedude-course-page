import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "../styles/Content.module.css";
import ContentList from "./ContentList";
import Progress from "./Progress";

const Content = () => {
  const percentage = 66;
  const days = {
    min: 0,
    max: 90,
    curr: 12,
  };
  return (
    <div className={styles.cont}>
      <header>
        <h5>Course Content</h5>
        <div className={styles.progress}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor: "#431943de",
              textColor: "black",
              textSize: "20px",
            })}
          />
          <span>Course Progress</span>
        </div>
        <div className={styles.days}>
          <Progress min={days.min} max={days.max} curr={days.max - days.curr} />
          <span>Course Progress</span>
        </div>
      </header>
      <ContentList />
    </div>
  );
};

export default Content;
