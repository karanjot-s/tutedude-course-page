import React, { useState } from "react";
import styles from "../styles/ContentList.module.css";
import ContentListItem from "./ContentListItem";

const ContentList = ({ data, playing, setPlaying }) => {
  return (
    <div className={styles.cont}>
      {data.map((topic, ind) => (
        <ContentListItem
          topic={topic}
          ind={ind}
          key={ind}
          playing={playing}
          setPlaying={setPlaying}
        />
      ))}
    </div>
  );
};

export default ContentList;
