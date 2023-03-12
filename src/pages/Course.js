import React, { useState } from "react";
import Content from "../components/Content";
import VideoCont from "../components/VideoCont";
import styles from "../styles/Course.module.css";

const Course = () => {
  const data = [
    {
      title: "Introduction to Android Studio",
      time: "52 min",
      lectures: [
        {
          title: "Welcome to Android Platform",
          time: "2 min",
          completed: true,
          vidSrc: "videos/temp1.mp4",
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp2.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp3.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp4.mp4",
        },
      ],
    },
    {
      title: "Some two liner heading topics and their subtopics",
      time: "52 min",
      lectures: [
        {
          title: "Welcome to Android Platform",
          time: "2 min",
          completed: false,
          vidSrc: "videos/temp1.mp4",
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp2.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp3.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp4.mp4",
        },
      ],
    },
    {
      title: "Single line topic",
      time: "52 min",
      lectures: [
        {
          title: "Welcome to Android Platform",
          time: "2 min",
          completed: false,
          vidSrc: "videos/temp1.mp4",
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp2.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp3.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp4.mp4",
        },
      ],
    },
    {
      title: "Single line topic",
      time: "52 min",
      lectures: [
        {
          title: "Welcome to Android Platform",
          time: "2 min",
          completed: false,
          vidSrc: "videos/temp1.mp4",
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp2.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp3.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp4.mp4",
        },
      ],
    },
    {
      title: "Single line topic",
      time: "52 min",
      lectures: [
        {
          title: "Welcome to Android Platform",
          time: "2 min",
          completed: false,
          vidSrc: "videos/temp1.mp4",
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp2.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp3.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp4.mp4",
        },
      ],
    },
    {
      title: "Some two liner heading topics and their subtopics",
      time: "52 min",
      lectures: [
        {
          title: "Welcome to Android Platform",
          time: "2 min",
          completed: false,
          vidSrc: "videos/temp1.mp4",
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp2.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp3.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp4.mp4",
        },
      ],
    },
    {
      title: "Single line topic",
      time: "52 min",
      lectures: [
        {
          title: "Welcome to Android Platform",
          time: "2 min",
          completed: false,
          vidSrc: "videos/temp1.mp4",
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp2.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp3.mp4",
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
          vidSrc: "videos/temp4.mp4",
        },
      ],
    },
  ];
  const [playing, setPlaying] = useState();
  return (
    <div className={styles.cont}>
      <VideoCont
        src={playing ? data[playing[0]].lectures[playing[1]].vidSrc : ".mp4"}
        main={
          playing ? { title: data[playing[0]].title, no: playing[0] + 1 } : null
        }
        sub={
          playing
            ? {
                title: data[playing[0]].lectures[playing[1]].title,
                no: playing[1] + 1,
              }
            : null
        }
      />
      <Content data={data} playing={playing} setPlaying={setPlaying} />
    </div>
  );
};

export default Course;
