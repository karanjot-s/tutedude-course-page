import React from "react";
import Content from "../components/Content";
import VideoCont from "../components/VideoCont";

const Course = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flex: 1,
      }}
    >
      <VideoCont />
      <Content />
    </div>
  );
};

export default Course;
