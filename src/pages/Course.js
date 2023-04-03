import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import VideoCont from "../components/VideoCont";
import styles from "../styles/Course.module.css";
import axios from "axios";

const Course = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const url = "https://api.tutedude.com/lms/api/course/mern";
    axios.get(url).then((res) => {
      setData(res.data.data);
    });
  }, []);

  const [playing, setPlaying] = useState();

  if (!data) return <>Loading...</>;

  const link = playing
    ? data.sections[playing[0]].section_lectures[playing[1]].lecture_cloud_link
    : {};
  return (
    <div className={styles.cont}>
      <VideoCont
        src={
          playing
            ? `${link.domain_url}${link.bucket}/${link.folder_name}/${link.file_name}.mp4`
            : ".mp4"
        }
        main={
          playing
            ? {
                title: data.sections[playing[0]].section_name,
                no: data.sections[playing[0]].section_no,
              }
            : null
        }
        course={data.course_name}
        sub={
          playing
            ? {
                title:
                  data.sections[playing[0]].section_lectures[playing[1]]
                    .lecture_name,
                no: data.sections[playing[0]].section_lectures[playing[1]]
                  .lecture_no,
              }
            : null
        }
      />
      <Content data={data.sections} playing={playing} setPlaying={setPlaying} />
    </div>
  );
};

export default Course;
