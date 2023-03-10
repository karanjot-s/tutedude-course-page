import React, { useState } from "react";
import styles from "../styles/ContentList.module.css";
import ContentListItem from "./ContentListItem";

const ContentList = () => {
  const data = [
    {
      title: "Introduction to Android Studio",
      time: "52 min",
      lectures: [
        {
          title: "Welcome to Android Platform",
          time: "2 min",
          completed: true,
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
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
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
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
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
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
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
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
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
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
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
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
        },
        {
          title: "Some two liner heading topics and their subtopics",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
        },
        {
          title: "Single line topic",
          time: "4 min",
          completed: false,
        },
      ],
    },
  ];

  return (
    <div className={styles.cont}>
      {data.map((topic, ind) => (
        <ContentListItem topic={topic} ind={ind} key={ind} />
      ))}
    </div>
  );
};

export default ContentList;
