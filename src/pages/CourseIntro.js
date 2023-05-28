import React, { useRef, useState } from "react";
import styles from "../styles/CourseIntro.module.css";
import Reviews from "../components/courseintro/Reviews";

const CourseIntro = () => {
  const [spotlightLeft, setSpotlightLeft] = useState(0);
  const spotlightRef = useRef();
  // console.log(spotlightLeft);

  const topics = [
    "Introduction",
    "Basic Python concepts",
    "Control Structures in Python",
    "Functions & Modules in Python",
    "Exception Handling & File Handling in Python",
    "Some more types in Python",
    "Functional Programming in Python",
    "Object Oriented Programming",
    "Regular Expressions",
    "Create GUI apps Using Tkinter",
    "Building Calculator app using Tkinter",
    "Building Database apps with PostgreSQL & Python",
    "Data Analysis using Python",
    "Make web applications in Python using Django",
    "Make web applications using Django - part 2",
    "Make web applications in Python using Flask",
    "Building REST APIs with Python & Django",
    "Crawl websites using Python : Web Crawling",
    "Automation with Selenium Web Driver & Python",
    "Building a Facebook Auto Poster",
    "Python best practices : writing clean & efficient Python code",
    "Network programming in Python using Sockets  : Building a Chat Application",
    "Image Processing with OpenCV & Python",
    "Miscellaneous Content",
    "Regular Expressions Revisited",
    "Conclusion",
  ];

  const benifits1 = [
    "Complete Understanding of Python from Scratch",
    "Python for Data Science and Machine Learning",
    "Functions and Lambdas Expressions",
    "Graphical User Interface (GUI) in Python",
    "Data Analysis with Pandas",
    "NumPy Array, NumPy Operations",
    "Write your own Decorators and higher order functions",
    "Build Games with Python",
  ];

  const benifits2 = [
    "Write your own Custom Modules",
    "Create your own Programs and Applications",
    "Matplotlib for Data Visualization",
    "DataFrames, Pandas Series, Pandas Matrix",
    "If-else,for loop and while loop",
    "Master Object-Oreinted Programming(OOPs) in Python 3",
    "Create your own Generators and other Iterators",
    "Error and Exceptions Handling",
  ];

  return (
    <div>
      <div className={`${styles.hero} ${styles.container}`}>
        <div className={styles.leftHero}>
          <div className={styles.headTag}>An IIT Delhi Alumni Innitiative</div>
          <h1>
            Learn <strong>Python,</strong> <br /> effectively for{" "}
            <strong>FREE</strong>
          </h1>
          <h3>By getting 100% of your fees back on course completion</h3>
          <div className={styles.price}>
            <h2>&#x20B9;400</h2>
            <span>Pay now & get it back on course completion</span>
          </div>
          <button className={styles.btn}>Enroll Now</button>
        </div>
        <div className={styles.rightHero}>
          <span>Enroll</span>
          <svg
            width="15"
            height="32"
            viewBox="0 0 15 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.79289 30.7238C7.18342 31.1143 7.81658 31.1143 8.20711 30.7238L14.5711 24.3598C14.9616 23.9693 14.9616 23.3361 14.5711 22.9456C14.1805 22.5551 13.5474 22.5551 13.1569 22.9456L7.5 28.6025L1.84315 22.9456C1.45262 22.5551 0.819457 22.5551 0.428932 22.9456C0.0384078 23.3361 0.0384078 23.9693 0.428932 24.3598L6.79289 30.7238ZM6.5 0L6.5 30.0167H8.5L8.5 0L6.5 0Z"
              fill="url(#paint0_linear_2_929)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_929"
                x1="7.57573"
                y1="21.9122"
                x2="6.03386"
                y2="21.9156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#800080" />
                <stop offset="0.206321" stop-color="#7E267E" />
              </linearGradient>
            </defs>
          </svg>
          <span>UpSkill</span>
          <svg
            width="15"
            height="32"
            viewBox="0 0 15 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.79289 30.7238C7.18342 31.1143 7.81658 31.1143 8.20711 30.7238L14.5711 24.3598C14.9616 23.9693 14.9616 23.3361 14.5711 22.9456C14.1805 22.5551 13.5474 22.5551 13.1569 22.9456L7.5 28.6025L1.84315 22.9456C1.45262 22.5551 0.819457 22.5551 0.428932 22.9456C0.0384078 23.3361 0.0384078 23.9693 0.428932 24.3598L6.79289 30.7238ZM6.5 0L6.5 30.0167H8.5L8.5 0L6.5 0Z"
              fill="url(#paint0_linear_2_929)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_929"
                x1="7.57573"
                y1="21.9122"
                x2="6.03386"
                y2="21.9156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#800080" />
                <stop offset="0.206321" stop-color="#7E267E" />
              </linearGradient>
            </defs>
          </svg>
          <span>100% FeesBack</span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={`${styles.stats}`}>
          <div className={styles.stat}>
            <div className={styles.img}>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.947 8.17901C19.8842 7.99388 19.7685 7.83121 19.6142 7.71107C19.46 7.59094 19.2739 7.51861 19.079 7.50301L13.378 7.05001L10.911 1.58901C10.8325 1.41313 10.7047 1.26374 10.5431 1.15887C10.3815 1.05401 10.193 0.998153 10.0004 0.998047C9.80771 0.997941 9.61916 1.05359 9.45745 1.15828C9.29574 1.26296 9.16779 1.41221 9.08903 1.58801L6.62203 7.05001L0.921026 7.50301C0.729482 7.51819 0.546364 7.58822 0.393581 7.70475C0.240798 7.82127 0.124819 7.97934 0.0595194 8.16004C-0.00578038 8.34075 -0.0176359 8.53645 0.0253712 8.72372C0.0683784 8.91099 0.164427 9.0819 0.302026 9.21601L4.51503 13.323L3.02503 19.775C2.97978 19.9703 2.99428 20.1747 3.06665 20.3617C3.13901 20.5486 3.26589 20.7095 3.43083 20.8235C3.59577 20.9374 3.79115 20.9991 3.99161 21.0007C4.19208 21.0022 4.38837 20.9434 4.55503 20.832L10 17.202L15.445 20.832C15.6154 20.9451 15.8162 21.0033 16.0207 20.9988C16.2251 20.9944 16.4232 20.9274 16.5884 20.8069C16.7536 20.6865 16.878 20.5183 16.9448 20.3251C17.0116 20.1318 17.0176 19.9228 16.962 19.726L15.133 13.326L19.669 9.24401C19.966 8.97601 20.075 8.55801 19.947 8.17901Z"
                  fill="url(#paint0_linear_2_2014)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2014"
                    x1="19.9999"
                    y1="10.9994"
                    x2="1.06701e-07"
                    y2="10.9994"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.text}>
              <span>4.9</span>
              <span>rating</span>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.img}>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.947 8.17901C19.8842 7.99388 19.7685 7.83121 19.6142 7.71107C19.46 7.59094 19.2739 7.51861 19.079 7.50301L13.378 7.05001L10.911 1.58901C10.8325 1.41313 10.7047 1.26374 10.5431 1.15887C10.3815 1.05401 10.193 0.998153 10.0004 0.998047C9.80771 0.997941 9.61916 1.05359 9.45745 1.15828C9.29574 1.26296 9.16779 1.41221 9.08903 1.58801L6.62203 7.05001L0.921026 7.50301C0.729482 7.51819 0.546364 7.58822 0.393581 7.70475C0.240798 7.82127 0.124819 7.97934 0.0595194 8.16004C-0.00578038 8.34075 -0.0176359 8.53645 0.0253712 8.72372C0.0683784 8.91099 0.164427 9.0819 0.302026 9.21601L4.51503 13.323L3.02503 19.775C2.97978 19.9703 2.99428 20.1747 3.06665 20.3617C3.13901 20.5486 3.26589 20.7095 3.43083 20.8235C3.59577 20.9374 3.79115 20.9991 3.99161 21.0007C4.19208 21.0022 4.38837 20.9434 4.55503 20.832L10 17.202L15.445 20.832C15.6154 20.9451 15.8162 21.0033 16.0207 20.9988C16.2251 20.9944 16.4232 20.9274 16.5884 20.8069C16.7536 20.6865 16.878 20.5183 16.9448 20.3251C17.0116 20.1318 17.0176 19.9228 16.962 19.726L15.133 13.326L19.669 9.24401C19.966 8.97601 20.075 8.55801 19.947 8.17901Z"
                  fill="url(#paint0_linear_2_2014)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2014"
                    x1="19.9999"
                    y1="10.9994"
                    x2="1.06701e-07"
                    y2="10.9994"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.text}>
              <span>4000+</span>
              <span>learners</span>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.img}>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.947 8.17901C19.8842 7.99388 19.7685 7.83121 19.6142 7.71107C19.46 7.59094 19.2739 7.51861 19.079 7.50301L13.378 7.05001L10.911 1.58901C10.8325 1.41313 10.7047 1.26374 10.5431 1.15887C10.3815 1.05401 10.193 0.998153 10.0004 0.998047C9.80771 0.997941 9.61916 1.05359 9.45745 1.15828C9.29574 1.26296 9.16779 1.41221 9.08903 1.58801L6.62203 7.05001L0.921026 7.50301C0.729482 7.51819 0.546364 7.58822 0.393581 7.70475C0.240798 7.82127 0.124819 7.97934 0.0595194 8.16004C-0.00578038 8.34075 -0.0176359 8.53645 0.0253712 8.72372C0.0683784 8.91099 0.164427 9.0819 0.302026 9.21601L4.51503 13.323L3.02503 19.775C2.97978 19.9703 2.99428 20.1747 3.06665 20.3617C3.13901 20.5486 3.26589 20.7095 3.43083 20.8235C3.59577 20.9374 3.79115 20.9991 3.99161 21.0007C4.19208 21.0022 4.38837 20.9434 4.55503 20.832L10 17.202L15.445 20.832C15.6154 20.9451 15.8162 21.0033 16.0207 20.9988C16.2251 20.9944 16.4232 20.9274 16.5884 20.8069C16.7536 20.6865 16.878 20.5183 16.9448 20.3251C17.0116 20.1318 17.0176 19.9228 16.962 19.726L15.133 13.326L19.669 9.24401C19.966 8.97601 20.075 8.55801 19.947 8.17901Z"
                  fill="url(#paint0_linear_2_2014)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2014"
                    x1="19.9999"
                    y1="10.9994"
                    x2="1.06701e-07"
                    y2="10.9994"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.text}>
              <span>English</span>
              <span>language</span>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.img}>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.947 8.17901C19.8842 7.99388 19.7685 7.83121 19.6142 7.71107C19.46 7.59094 19.2739 7.51861 19.079 7.50301L13.378 7.05001L10.911 1.58901C10.8325 1.41313 10.7047 1.26374 10.5431 1.15887C10.3815 1.05401 10.193 0.998153 10.0004 0.998047C9.80771 0.997941 9.61916 1.05359 9.45745 1.15828C9.29574 1.26296 9.16779 1.41221 9.08903 1.58801L6.62203 7.05001L0.921026 7.50301C0.729482 7.51819 0.546364 7.58822 0.393581 7.70475C0.240798 7.82127 0.124819 7.97934 0.0595194 8.16004C-0.00578038 8.34075 -0.0176359 8.53645 0.0253712 8.72372C0.0683784 8.91099 0.164427 9.0819 0.302026 9.21601L4.51503 13.323L3.02503 19.775C2.97978 19.9703 2.99428 20.1747 3.06665 20.3617C3.13901 20.5486 3.26589 20.7095 3.43083 20.8235C3.59577 20.9374 3.79115 20.9991 3.99161 21.0007C4.19208 21.0022 4.38837 20.9434 4.55503 20.832L10 17.202L15.445 20.832C15.6154 20.9451 15.8162 21.0033 16.0207 20.9988C16.2251 20.9944 16.4232 20.9274 16.5884 20.8069C16.7536 20.6865 16.878 20.5183 16.9448 20.3251C17.0116 20.1318 17.0176 19.9228 16.962 19.726L15.133 13.326L19.669 9.24401C19.966 8.97601 20.075 8.55801 19.947 8.17901Z"
                  fill="url(#paint0_linear_2_2014)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2014"
                    x1="19.9999"
                    y1="10.9994"
                    x2="1.06701e-07"
                    y2="10.9994"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.text}>
              <span>39 hrs</span>
              <span>duration</span>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.img}>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.947 8.17901C19.8842 7.99388 19.7685 7.83121 19.6142 7.71107C19.46 7.59094 19.2739 7.51861 19.079 7.50301L13.378 7.05001L10.911 1.58901C10.8325 1.41313 10.7047 1.26374 10.5431 1.15887C10.3815 1.05401 10.193 0.998153 10.0004 0.998047C9.80771 0.997941 9.61916 1.05359 9.45745 1.15828C9.29574 1.26296 9.16779 1.41221 9.08903 1.58801L6.62203 7.05001L0.921026 7.50301C0.729482 7.51819 0.546364 7.58822 0.393581 7.70475C0.240798 7.82127 0.124819 7.97934 0.0595194 8.16004C-0.00578038 8.34075 -0.0176359 8.53645 0.0253712 8.72372C0.0683784 8.91099 0.164427 9.0819 0.302026 9.21601L4.51503 13.323L3.02503 19.775C2.97978 19.9703 2.99428 20.1747 3.06665 20.3617C3.13901 20.5486 3.26589 20.7095 3.43083 20.8235C3.59577 20.9374 3.79115 20.9991 3.99161 21.0007C4.19208 21.0022 4.38837 20.9434 4.55503 20.832L10 17.202L15.445 20.832C15.6154 20.9451 15.8162 21.0033 16.0207 20.9988C16.2251 20.9944 16.4232 20.9274 16.5884 20.8069C16.7536 20.6865 16.878 20.5183 16.9448 20.3251C17.0116 20.1318 17.0176 19.9228 16.962 19.726L15.133 13.326L19.669 9.24401C19.966 8.97601 20.075 8.55801 19.947 8.17901Z"
                  fill="url(#paint0_linear_2_2014)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2014"
                    x1="19.9999"
                    y1="10.9994"
                    x2="1.06701e-07"
                    y2="10.9994"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.text}>
              <span>1 time </span>
              <span>payment</span>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.img}>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.947 8.17901C19.8842 7.99388 19.7685 7.83121 19.6142 7.71107C19.46 7.59094 19.2739 7.51861 19.079 7.50301L13.378 7.05001L10.911 1.58901C10.8325 1.41313 10.7047 1.26374 10.5431 1.15887C10.3815 1.05401 10.193 0.998153 10.0004 0.998047C9.80771 0.997941 9.61916 1.05359 9.45745 1.15828C9.29574 1.26296 9.16779 1.41221 9.08903 1.58801L6.62203 7.05001L0.921026 7.50301C0.729482 7.51819 0.546364 7.58822 0.393581 7.70475C0.240798 7.82127 0.124819 7.97934 0.0595194 8.16004C-0.00578038 8.34075 -0.0176359 8.53645 0.0253712 8.72372C0.0683784 8.91099 0.164427 9.0819 0.302026 9.21601L4.51503 13.323L3.02503 19.775C2.97978 19.9703 2.99428 20.1747 3.06665 20.3617C3.13901 20.5486 3.26589 20.7095 3.43083 20.8235C3.59577 20.9374 3.79115 20.9991 3.99161 21.0007C4.19208 21.0022 4.38837 20.9434 4.55503 20.832L10 17.202L15.445 20.832C15.6154 20.9451 15.8162 21.0033 16.0207 20.9988C16.2251 20.9944 16.4232 20.9274 16.5884 20.8069C16.7536 20.6865 16.878 20.5183 16.9448 20.3251C17.0116 20.1318 17.0176 19.9228 16.962 19.726L15.133 13.326L19.669 9.24401C19.966 8.97601 20.075 8.55801 19.947 8.17901Z"
                  fill="url(#paint0_linear_2_2014)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2014"
                    x1="19.9999"
                    y1="10.9994"
                    x2="1.06701e-07"
                    y2="10.9994"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.text}>
              <span>anyone</span>
              <span>can do</span>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.img}>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.947 8.17901C19.8842 7.99388 19.7685 7.83121 19.6142 7.71107C19.46 7.59094 19.2739 7.51861 19.079 7.50301L13.378 7.05001L10.911 1.58901C10.8325 1.41313 10.7047 1.26374 10.5431 1.15887C10.3815 1.05401 10.193 0.998153 10.0004 0.998047C9.80771 0.997941 9.61916 1.05359 9.45745 1.15828C9.29574 1.26296 9.16779 1.41221 9.08903 1.58801L6.62203 7.05001L0.921026 7.50301C0.729482 7.51819 0.546364 7.58822 0.393581 7.70475C0.240798 7.82127 0.124819 7.97934 0.0595194 8.16004C-0.00578038 8.34075 -0.0176359 8.53645 0.0253712 8.72372C0.0683784 8.91099 0.164427 9.0819 0.302026 9.21601L4.51503 13.323L3.02503 19.775C2.97978 19.9703 2.99428 20.1747 3.06665 20.3617C3.13901 20.5486 3.26589 20.7095 3.43083 20.8235C3.59577 20.9374 3.79115 20.9991 3.99161 21.0007C4.19208 21.0022 4.38837 20.9434 4.55503 20.832L10 17.202L15.445 20.832C15.6154 20.9451 15.8162 21.0033 16.0207 20.9988C16.2251 20.9944 16.4232 20.9274 16.5884 20.8069C16.7536 20.6865 16.878 20.5183 16.9448 20.3251C17.0116 20.1318 17.0176 19.9228 16.962 19.726L15.133 13.326L19.669 9.24401C19.966 8.97601 20.075 8.55801 19.947 8.17901Z"
                  fill="url(#paint0_linear_2_2014)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_2014"
                    x1="19.9999"
                    y1="10.9994"
                    x2="1.06701e-07"
                    y2="10.9994"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles.text}>
              <span>self-paced</span>
              <span>recorded lectures</span>
            </div>
          </div>
        </div>
      </div>
      <section className={`${styles.refundInfo} ${styles.container}`}>
        <div>
          <h2>
            A limited seats opportunity
            <br />
            <strong>Refund Offer</strong>
          </h2>
          <h3>Refund Spotlight</h3>
          <div className={styles.lights}>
            <svg
              width="392"
              height="279"
              viewBox="0 0 392 279"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="196" cy="2" rx="196" ry="2" fill="#FAECF2" />
              <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27 31.5659L43.2267 274.574C43.4099 277.317 46.241 279.062 48.7734 277.993L230.094 201.455C232.627 200.386 233.351 197.14 231.514 195.096L69.6378 15L27 31.5659Z"
                fill="url(#paint0_linear_2_10)"
              />
              <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M367.564 28.4752L351.312 271.862C351.129 274.605 348.298 276.35 345.766 275.281L164.445 198.743C161.912 197.674 161.188 194.428 163.025 192.384L325.16 12L367.564 28.4752Z"
                fill="url(#paint1_linear_2_10)"
              />
              <rect
                x="37"
                y="2.76199"
                width="2"
                height="22"
                rx="1"
                transform="rotate(-22.3954 37 2.76199)"
                fill="#D9D9D9"
              />
              <ellipse
                cx="48.0938"
                cy="23.1269"
                rx="27.5"
                ry="2.5"
                transform="rotate(-20.073 48.0938 23.1269)"
                fill="#800080"
              />
              <rect
                width="2"
                height="22"
                rx="1"
                transform="matrix(-0.924576 -0.380997 -0.380997 0.924576 357.693 0.761963)"
                fill="#D9D9D9"
              />
              <ellipse
                cx="27.5"
                cy="2.5"
                rx="27.5"
                ry="2.5"
                transform="matrix(-0.933037 -0.359779 -0.359779 0.933037 374.115 27.6882)"
                fill="#800080"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_10"
                  x1="46.0078"
                  y1="31.4536"
                  x2="103.508"
                  y2="181.454"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EEDCEE" />
                  <stop offset="1" stop-color="#CCCCCC" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2_10"
                  x1="349.531"
                  y1="28.7416"
                  x2="298.531"
                  y2="163.742"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EEDCEE" />
                  <stop offset="1" stop-color="#CCCCCC" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className={styles.stepsContainer}>
            <div
              className={styles.leftArrow}
              onClick={() => {
                spotlightRef.current.scrollLeft -= 300;
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                  fill="#800080"
                />
              </svg>
            </div>
            <div
              className={`${styles.dummySteps} ${
                spotlightLeft !== 0 ? styles.leftShadow : ""
              } ${spotlightLeft !== 1 ? styles.rightShadow : ""}`}
            >
              <div
                className={`${styles.steps} `}
                onScroll={(event) => {
                  setSpotlightLeft(
                    event.target.scrollLeft / event.target.scrollLeftMax
                  );
                }}
                ref={spotlightRef}
              >
                <div className={styles.step}>
                  <span className={styles.number}>1</span>
                  <div>
                    <h5>What is FeesBack ?</h5>
                    <p>
                      A limited time opportunity for rewarding our learners to{" "}
                      <strong>upskill for free</strong>.
                    </p>
                  </div>
                  <div className={styles.price}>
                    <span>Rs</span>
                    <span>0</span>
                    <span>Effective Fee</span>
                  </div>
                  <div className={styles.tags}>
                    <span>1 : 1 Mentorship</span>
                    <span>Certification</span>
                  </div>
                </div>
                <div className={styles.step}>
                  <span className={styles.number}>2</span>
                  <div>
                    <h5>How it works ?</h5>
                    <h4>Step 1 : Enroll</h4>
                    <p>into your favourite courses</p>
                  </div>
                  <img src="/assets/signup.png" alt="" />
                  <div className={styles.tags}>
                    <span>Get Lifetime Course Access</span>
                  </div>
                </div>
                <div className={styles.step}>
                  <span className={styles.number}>3</span>
                  <div>
                    <h5>How it works ?</h5>
                    <h4>Step 2 : Complete Course</h4>
                    <p>with shared curated assignments in</p>
                  </div>
                  <div className={styles.price}>
                    <span></span>
                    <span>3</span>
                    <span>months time from the date of enrollment</span>
                  </div>
                  <div className={styles.tags}>
                    <span>Free Unlimited Doubt Solving</span>
                  </div>
                </div>
                <div className={styles.step}>
                  <span className={styles.number}>4</span>
                  <div>
                    <h5>How it works ?</h5>
                    <h4>Step 3 : Refund Awarded</h4>
                    <p>when you fulfil the previous criteria</p>
                  </div>
                  <div className={styles.price}>
                    <span></span>
                    <span>100%</span>
                    <span>Enrollment Fee is refunded</span>
                  </div>
                  <div className={styles.tags}>
                    <span>Assured Certification on Course Completion </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.rightArrow}
              onClick={() => {
                spotlightRef.current.scrollLeft += 300;
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                  fill="#800080"
                />
              </svg>
            </div>
          </div>
          <button className={styles.enrollBtn}>Enroll Now</button>
        </div>
      </section>

      <section className={styles.doubt}>
        <div className={styles.container}>
          <h3>Instant Doubt Solving</h3>
          <div className={styles.doubtDiv}>
            <div>
              <img src="/assets/doubtimg1.svg" alt="" />
              <h4>Doubts Solved in 5-10 min</h4>
              <p>
                Ask your doubts when you want, and get it solved within 5-10
                minutes
              </p>
            </div>
            <div>
              <img src="/assets/doubtimg2.svg" alt="" />
              <h4>Experience 1 to 1 learning</h4>
              <p>
                With robust Mentor Support, experience seamless learning with
                personal mentorship
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.whyus} ${styles.container}`}>
        <h3>Why choose us?</h3>
        <div className={styles.whyusDiv}>
          <div>
            <span className={styles.number}>1</span>
            <h4>100% Free Learning</h4>
            <p>
              On the courses enrolled within the 100% FeesBack offer through
              which you earn your enrollment fee back as reward
            </p>
          </div>
          <div>
            <span className={styles.number}>2</span>
            <h4>Structured Course</h4>
            <p>
              Learn from our structured pre recorded courses made by experts to
              meet industry needs
            </p>
          </div>
          <div>
            <span className={styles.number}>3</span>
            <h4>Instant Mentor Support</h4>
            <p>
              Personal mentors to guide and help you throughout your journey as
              a friend through chat, calls & screen sharing
            </p>
          </div>
          <div>
            <span className={styles.number}>4</span>
            <h4>Projects & Certifications</h4>
            <p>
              Build major projects which makes your resume stand apart alongwith
              course completion certifications
            </p>
          </div>
          <div>
            <span className={styles.number}>5</span>
            <h4>Internship Opportunities</h4>
            <p>
              Get remote internship opportunities after the completion of the
              course along with dedicated assignments
            </p>
          </div>
          <div>
            <span className={styles.number}>6</span>
            <h4>Lifetime Course Access</h4>
            <p>
              Get liftetime course access on each course that you enroll, and
              enjoy the benefit of mentoring wheneve you want
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.curriculum} ${styles.container}`}>
        <h3>Curriculum</h3>
        <div className={styles.overview}>
          <div className={styles.overviewDiv}>
            <div>
              <svg
                width="26"
                height="22"
                viewBox="0 0 26 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.8064 1.90957C13.4292 1.22696 11.8747 0.842773 10.2295 0.842773C4.5799 0.842773 0 5.37298 0 10.9613C0 16.5496 4.5799 21.0798 10.2295 21.0798C15.8791 21.0798 20.459 16.5496 20.459 10.9613C20.459 10.0761 20.6749 10.8958 20.459 10.0775H11.6092L14.8064 1.90957Z"
                  fill="url(#paint0_linear_2_1136)"
                />
                <path
                  d="M17.8623 0.000610022C19.3777 0.809897 20.662 1.98452 21.5962 3.41559C22.5303 4.84665 23.0841 6.48785 23.2062 8.18703L13.0024 8.9043L17.8623 0.000610022Z"
                  fill="url(#paint1_linear_2_1136)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_1136"
                    x1="20.5549"
                    y1="10.9613"
                    x2="1.09663e-07"
                    y2="10.9613"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_1136"
                    x1="21.6611"
                    y1="2.02934"
                    x2="16.8828"
                    y2="10.9766"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p>
              <strong>31</strong>sections
            </p>
          </div>
          <div className={styles.overviewDiv}>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_1146)">
                  <path
                    d="M12 13.5752C12.9946 13.5752 13.9484 13.1801 14.6517 12.4768C15.3549 11.7736 15.75 10.8198 15.75 9.8252C15.75 8.83063 15.3549 7.87681 14.6517 7.17354C13.9484 6.47028 12.9946 6.0752 12 6.0752C11.0054 6.0752 10.0516 6.47028 9.34835 7.17354C8.64509 7.87681 8.25 8.83063 8.25 9.8252C8.25 10.8198 8.64509 11.7736 9.34835 12.4768C10.0516 13.1801 11.0054 13.5752 12 13.5752Z"
                    fill="url(#paint0_linear_2_1146)"
                  />
                  <path
                    d="M3 3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.316071 4.44129 0 5.20435 0 6L0 18C0 18.7956 0.316071 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H21C21.7956 21 22.5587 20.6839 23.1213 20.1213C23.6839 19.5587 24 18.7956 24 18V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3H3ZM19.197 19.5C18.5175 17.595 16.557 15 12 15C7.4445 15 5.4825 17.595 4.803 19.5H3C2.60218 19.5 2.22064 19.342 1.93934 19.0607C1.65804 18.7794 1.5 18.3978 1.5 18V6C1.5 5.60218 1.65804 5.22064 1.93934 4.93934C2.22064 4.65804 2.60218 4.5 3 4.5H21C21.3978 4.5 21.7794 4.65804 22.0607 4.93934C22.342 5.22064 22.5 5.60218 22.5 6V18C22.5 18.3978 22.342 18.7794 22.0607 19.0607C21.7794 19.342 21.3978 19.5 21 19.5H19.197Z"
                    fill="url(#paint1_linear_2_1146)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2_1146"
                    x1="15.75"
                    y1="9.82519"
                    x2="8.25"
                    y2="9.82519"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_1146"
                    x1="24"
                    y1="12"
                    x2="1.28042e-07"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                  <clipPath id="clip0_2_1146">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>
              <strong>254</strong>lectures
            </p>
          </div>
          <div className={styles.overviewDiv}>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM15.293 16.707L11 12.414V6H13V11.586L16.707 15.293L15.293 16.707Z"
                  fill="url(#paint0_linear_2_1155)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_1155"
                    x1="22"
                    y1="12"
                    x2="2"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p>
              <strong>38h 51m</strong>total duration
            </p>
          </div>
          <div className={styles.overviewDiv}>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.636 16C2.91 16 2 14 2 12C2 10 2.91 8 5.636 8C9.273 8 14.727 16 18.364 16C21.09 16 22 14 22 12C22 10 21.09 8 18.364 8C14.727 8 9.273 16 5.636 16V16Z"
                  stroke="url(#paint0_linear_2_1162)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_1162"
                    x1="22"
                    y1="12"
                    x2="2"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#800080" />
                    <stop offset="1" stop-color="#FF864C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p>
              <strong>Lifetime</strong>course access
            </p>
          </div>
        </div>
        <div
          className={styles.topics}
          // style={{
          //   gridTemplateRows: `repeat(${Math.ceil(topics.length / 2)}, auto)`,
          // }}
        >
          {topics.map((topic, i) => (
            <div className={styles.topic} key={i}>
              <p>{topic}</p>
              <svg
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.585 0.748047L11 9.14471L19.415 0.748047L22 3.33305L11 14.333L0 3.33305L2.585 0.748047Z"
                  fill="#800080"
                />
              </svg>
            </div>
          ))}
        </div>
      </section>
      <section className={`${styles.packs} ${styles.container}`}>
        <h3>Interested in our other courses too ?</h3>
        <div className={styles.packsDiv}>
          <div className={styles.pack}>
            <p className={styles.label}>Customized Pack</p>
            <div className={styles.details}>
              <p>4</p>
              <span>courses @ ₹ 1,499/-</span>
            </div>
            <p className={styles.validity}>FEESBACK OFFER valid for 1 year </p>
            <p className={styles.discount}>save ₹ 1,287/-</p>
            <button>know more</button>
          </div>
          <div className={styles.pack}>
            <p className={styles.label}>Customized Pack</p>
            <div className={styles.details}>
              <p>4</p>
              <span>courses @ ₹ 1,499/-</span>
            </div>
            <p className={styles.validity}>FEESBACK OFFER valid for 1 year </p>
            <p className={styles.discount}>save ₹ 1,287/-</p>
            <button>know more</button>
          </div>
        </div>
      </section>

      <section className={`${styles.benifits} ${styles.container}`}>
        <h3>Course Benefits</h3>
        <div className={styles.benifitsDiv}>
          <div>
            {benifits1.map((b, i) => (
              <p key={i}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8V19.529C2 19.529 6.621 19.357 12 22C17.379 19.357 22 19.529 22 19.529V8C22 8 16.546 8 12 10.471C7.454 8 2 8 2 8Z"
                    fill="url(#paint0_linear_2_1190)"
                    fill-opacity="0.75"
                  />
                  <path
                    d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
                    fill="url(#paint1_linear_2_1190)"
                    fill-opacity="0.75"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_1190"
                      x1="22"
                      y1="15"
                      x2="2"
                      y2="15"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#800080" />
                      <stop offset="1" stop-color="#FF864C" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2_1190"
                      x1="15"
                      y1="5"
                      x2="9"
                      y2="5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#800080" />
                      <stop offset="1" stop-color="#FF864C" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>{b}</span>
              </p>
            ))}
          </div>
          <div>
            {benifits1.map((b, i) => (
              <p key={i}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8V19.529C2 19.529 6.621 19.357 12 22C17.379 19.357 22 19.529 22 19.529V8C22 8 16.546 8 12 10.471C7.454 8 2 8 2 8Z"
                    fill="url(#paint0_linear_2_1190)"
                    fill-opacity="0.75"
                  />
                  <path
                    d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
                    fill="url(#paint1_linear_2_1190)"
                    fill-opacity="0.75"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_1190"
                      x1="22"
                      y1="15"
                      x2="2"
                      y2="15"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#800080" />
                      <stop offset="1" stop-color="#FF864C" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2_1190"
                      x1="15"
                      y1="5"
                      x2="9"
                      y2="5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#800080" />
                      <stop offset="1" stop-color="#FF864C" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>{b}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      <section className={`${styles.about} ${styles.container}`}>
        <h3>About this course</h3>
        <div className={styles.aboutDiv}>
          <p className={styles.intro}>
            In this hands-on course, you will learn Python right starting from
            scratch to the level where you can build almost anything with it, be
            it a fully functional database oriented web application or an
            automation tool. This course will teach you Python right from
            scratch from a very basic level and will gradually move you towards
            more advanced topics. We not just cover all the Python basics but
            also the most popular Python libraries such as Django, Flask,
            Tkinter & Selenium.
          </p>
          <p className={styles.details}>
            <strong>
              The Complete Course is divided into 11 Major sections.
            </strong>
            Here is a brief description of what you will learn in each section.
            <strong>Section 1: Python</strong>
            This section covers all the basics of Python, starting right from
            installing the required tools to covering topics like mathematical
            operators, strings, accepting user input, string operations,
            variables, conditionals like if, elif, control structures such as
            while & for loop, functions, modules & packages, lists, file
            handling, OOP in Python, regular expressions. Almost every basic
            Python concept is covered in this section.
            <strong>Section 2: Make GUI In Python Using Tkinter</strong>
            Once done with the basics, we know learn the Tkinter library which
            allows us to create desktop based applications with Python. We learn
            how to create GUI apps using Tkinter & Python and also build a fully
            functional Desktop app i.e a calculator.
            <strong>
              Section 3: Making Database Oriented Desktop Apps With PostgreSQL
            </strong>
            Making a simple desktop app alone isn't sufficient, it needs a
            backend database to store some data. To do the same we learn how to
            connect our desktop apps to the backend. In this section we build a
            student management system software using Python, Tkinter to design
            the GUI & PostgreSQL database to store the data for our application
            in the backend.
            <strong>Section 4: Data Analysis</strong>
            Python is being widely used in the data science domain and hence it
            is important to learn how to use Python to analyse data. Hence in
            this section we learn how to use the tools and techniques used to
            perform data analysis. We start off by learning the Pandas library
            which is used to perform data analysis and all the basic concepts
            like DataFrames, Reindexing, Indexing, Broadcasting and also learn
            how to perform data plotting and visualisation with the Matplotlib
            library.
            <strong>Section 5: Python Web Framework Django</strong>
            This section will teach you how to build full-stack web applications
            with Python & Django. Django is one of the most popular web
            frameworks for Python and is used to program the back-end side of
            out web app. In this section we will learn Django right from basics
            and will build a simple book store web application. We will learn
            how to create models, how to route URL requests, how to create
            different views for our web app, how to integrate HTML templates and
            a lot more.
            <strong>Section 6: Python Web Framework Flask</strong>
            Flask is a micro web framework for Python used to build simpler web
            apps. If you want to develop some simple and small websites, you can
            do so using Flask. In this section we cover flask basics suck as
            Routing, Dynamic URLs, Templates, passing data to the server & site
            cookies.
            <strong>Section 7: REST APIs Using Django Rest Framework</strong>
            In this section we learn how to build our own REST APIs using the
            Django Rest Framework. If you already have a Django web app built,
            you can create API endpoints for it using the Django Rest Framework.
            In this section we will build a fully functional REST API with
            features such as search, filtering & authentication.
            <strong>Section 8: Web Scraping in Python</strong>
            Python can also be used to crawl websites and gather data from it.
            In this section we learn the same, we build a web crawler which
            crawls up any website of our choice and gathers links from it. Web
            crawlers are used by many search engines to rank websites and in
            this section we learn how to build a smaller version of it using
            Python.
            <strong>Section 9: Automation with Python & Selenium</strong>
            Python is widely used for automation as well, especially for
            testing. Selenium web driver is one such tool which has been built
            for automating tests but the same can be used for automating other
            browser based tasks as well. In this section we learn how to
            automate tasks using Selenium and will also build a Facebook Bot
            that automatically posts status for us.
            <strong>
              Section 10: Best Practices: Writing Clean & Efficient Python Code
            </strong>
            To be a good Python engineer/ developer you need to know how to
            write clean, concise and efficient Python code. In this section we
            learn some of the best practice that you must follow while writing
            Python code so.
            <strong>Section 11: Image Processing With Python & OpenCV</strong>
            Python can also be used to process and manipulate images and videos.
            In this section we learn how to use OpenCV library with Python to
            manipulate images. We learn some interesting things like capturing
            webcam video, tracking images from a live video, different image
            thresholding techniques, image blurring, averaging and Gaussain
            filtering.
            <br />
            <br />
            So let's begin the journey of becoming an expert in Python. Make
            sure to enrol in the course before the price changes. Take yourself
            one step closer towards becoming a professional Python developer by
            clicking the "take this course button" now!
            <br />
            Join the journey.
            <br />
            Sincerely, <br />
            Krishanth M
          </p>
        </div>
      </section>

      <section className={`${styles.query} ${styles.container}`}>
        <h3>Have Any Query?</h3>
        <div className={styles.quesDiv}>
          <p>
            <span className={styles.ques}>Already asked query</span>
            <span className={styles.plus}>+</span>
          </p>
        </div>
        <div className={styles.quesDiv}>
          <p>
            <span className={styles.ques}>Already asked query</span>
            <span className={styles.plus}>+</span>
          </p>
        </div>
        <div className={styles.quesDiv}>
          <p>
            <span className={styles.ques}>Already asked query</span>
            <span className={styles.plus}>+</span>
          </p>
        </div>
        <div className={styles.quesDiv}>
          <p>
            <span className={styles.ques}>Already asked query</span>
            <span className={styles.plus}>+</span>
          </p>
        </div>
      </section>

      <footer className={`${styles.footer}`}>
        <div className={`${styles.footerDiv} ${styles.container}`}>
          <div>
            <h4>Other Links</h4>
            <p>
              <a href="/">About us</a>
              <a href="/">Contact us</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Use</a>
            </p>
          </div>
          <div className={styles.socials}>
            <h4>Social Links</h4>
            <p>
              <a href="/">
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.9154 0.944336H2.75137C1.57946 0.944336 0.628723 1.83359 0.628723 2.92971V23.6604C0.628723 24.7565 1.57946 25.6458 2.75137 25.6458H24.9154C26.0873 25.6458 27.038 24.7565 27.038 23.6604V2.92971C27.038 1.83359 26.0873 0.944336 24.9154 0.944336ZM24.9154 23.6696C10.1328 23.6666 2.74147 23.6635 2.74147 23.6604C2.74477 9.83376 2.74807 2.92045 2.75137 2.92045C17.534 2.92354 24.9253 2.92662 24.9253 2.92971C24.922 16.7563 24.9187 23.6696 24.9154 23.6696ZM4.5439 10.2043H8.46239V21.993H4.5439V10.2043ZM6.5048 8.59251C7.75594 8.59251 8.776 7.64151 8.776 6.46819C8.776 6.18922 8.71725 5.91298 8.60311 5.65525C8.48897 5.39751 8.32168 5.16333 8.11078 4.96607C7.89988 4.76881 7.6495 4.61233 7.37395 4.50557C7.09839 4.39882 6.80305 4.34387 6.5048 4.34387C6.20654 4.34387 5.9112 4.39882 5.63564 4.50557C5.36009 4.61233 5.10971 4.76881 4.89881 4.96607C4.68791 5.16333 4.52062 5.39751 4.40648 5.65525C4.29234 5.91298 4.23359 6.18922 4.23359 6.46819C4.23029 7.64151 5.24705 8.59251 6.5048 8.59251ZM14.8336 16.1604C14.8336 14.6227 15.1472 13.1345 17.1841 13.1345C19.1912 13.1345 19.2209 14.8914 19.2209 16.2592V21.993H23.1361V15.5274C23.1361 12.3533 22.4032 9.91095 18.4385 9.91095C16.5337 9.91095 15.2562 10.8897 14.7313 11.816H14.6785V10.2043H10.9185V21.993H14.8336V16.1604Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3531 0.944336C9.76349 0.944336 9.31613 0.960548 7.91131 1.01613C6.50072 1.08098 5.54656 1.28557 4.70466 1.59129C3.82353 1.90242 3.02554 2.38956 2.36633 3.01874C1.69177 3.63388 1.17066 4.38068 0.840177 5.20586C0.513322 5.99332 0.294593 6.88577 0.22526 8.20514C0.161705 9.51989 0.148499 9.93755 0.148499 13.295C0.148499 16.6525 0.165832 17.071 0.22526 18.3849C0.294593 19.7005 0.513322 20.5968 0.840177 21.3842C1.17283 22.2084 1.69365 22.9548 2.36633 23.5713C3.024 24.2023 3.82243 24.6897 4.70466 24.9988C5.54656 25.3007 6.50485 25.5091 7.91131 25.574C9.31696 25.6334 9.76349 25.6458 13.3531 25.6458C16.9428 25.6458 17.3901 25.6295 18.7949 25.574C20.2014 25.5091 21.1597 25.2999 22.0016 24.9988C22.8827 24.6877 23.6807 24.2005 24.3399 23.5713C25.0154 22.9569 25.5366 22.2099 25.8661 21.3842C26.1888 20.5968 26.4117 19.7005 26.481 18.3849C26.5445 17.0702 26.5578 16.6525 26.5578 13.295C26.5578 9.93755 26.5404 9.51912 26.481 8.20514C26.4117 6.88963 26.188 5.98869 25.8661 5.20586C25.5334 4.38171 25.0126 3.63532 24.3399 3.01874C23.683 2.38699 22.8843 1.89946 22.0016 1.59129C21.1597 1.28557 20.2014 1.08098 18.7949 1.01613C17.3893 0.956688 16.9428 0.944336 13.3531 0.944336ZM13.3531 3.16774C16.8784 3.16774 17.2993 3.18395 18.6926 3.23954C19.9777 3.2959 20.6777 3.49662 21.1424 3.66646C21.7168 3.86481 22.2368 4.18051 22.6644 4.59057C23.102 4.98879 23.4383 5.47402 23.6482 6.0103C23.8298 6.44495 24.0444 7.09962 24.1047 8.30165C24.1641 9.60481 24.1814 9.99931 24.1814 13.2958C24.1814 16.5923 24.1641 16.9868 24.0997 18.29C24.0304 19.492 23.8158 20.1467 23.635 20.5813C23.3849 21.1611 23.106 21.5664 22.6454 22.0049C22.2164 22.4124 21.6968 22.7266 21.1234 22.9252C20.6644 23.095 19.9546 23.2957 18.6645 23.3521C17.2638 23.4077 16.8511 23.4239 13.3168 23.4239C9.78248 23.4239 9.37061 23.4077 7.96827 23.3475C6.68313 23.2826 5.97412 23.0819 5.50942 22.9128C4.88212 22.6789 4.45209 22.418 3.99153 21.9872C3.52683 21.5525 3.23134 21.1387 3.00353 20.5636C2.81864 20.1343 2.60734 19.4704 2.53883 18.2637C2.49179 16.9691 2.4695 16.5676 2.4695 13.2773C2.4695 9.9885 2.49179 9.58628 2.53883 8.2754C2.60734 7.06874 2.81864 6.40635 3.00353 5.97556C3.23134 5.38806 3.52765 4.98661 3.99153 4.55197C4.45127 4.12195 4.88212 3.84403 5.50942 3.62632C5.97412 3.45725 6.6658 3.25652 7.95589 3.19631C9.35658 3.14921 9.76927 3.13223 13.2986 3.13223L13.3531 3.16774ZM13.3531 6.95602C12.4628 6.95572 11.5812 7.11951 10.7586 7.43805C9.93594 7.75658 9.18851 8.22362 8.55896 8.81245C7.92941 9.40129 7.43009 10.1004 7.08953 10.8698C6.74897 11.6392 6.57385 12.4638 6.57418 13.2966C6.57385 14.1293 6.74897 14.954 7.08953 15.7234C7.43009 16.4928 7.92941 17.1919 8.55896 17.7807C9.18851 18.3696 9.93594 18.8366 10.7586 19.1551C11.5812 19.4737 12.4628 19.6375 13.3531 19.6372C14.2434 19.6375 15.1251 19.4737 15.9477 19.1551C16.7703 18.8366 17.5177 18.3696 18.1473 17.7807C18.7768 17.1919 19.2762 16.4928 19.6167 15.7234C19.9573 14.954 20.1324 14.1293 20.1321 13.2966C20.1324 12.4638 19.9573 11.6392 19.6167 10.8698C19.2762 10.1004 18.7768 9.40129 18.1473 8.81245C17.5177 8.22362 16.7703 7.75658 15.9477 7.43805C15.1251 7.11951 14.2434 6.95572 13.3531 6.95602ZM13.3531 17.4137C10.9199 17.4137 8.95131 15.5725 8.95131 13.2966C8.95131 11.0207 10.9199 9.17943 13.3531 9.17943C15.7864 9.17943 17.7549 11.0207 17.7549 13.2966C17.7549 15.5725 15.7864 17.4137 13.3531 17.4137ZM21.99 6.7028C21.9896 7.09627 21.8222 7.47348 21.5246 7.75156C21.2269 8.02964 20.8235 8.18584 20.4028 8.18584C20.1948 8.18584 19.9888 8.14752 19.7967 8.07307C19.6045 7.99862 19.4299 7.88949 19.2828 7.75192C19.1357 7.61435 19.019 7.45103 18.9394 7.27129C18.8598 7.09155 18.8189 6.8989 18.8189 6.70435C18.8189 6.50979 18.8598 6.31714 18.9394 6.1374C19.019 5.95766 19.1357 5.79434 19.2828 5.65677C19.4299 5.5192 19.6045 5.41007 19.7967 5.33562C19.9888 5.26117 20.1948 5.22285 20.4028 5.22285C21.2752 5.22285 21.99 5.88678 21.99 6.7028Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.6104 0.944336H2.13551C1.74639 0.944336 1.37321 1.08892 1.09806 1.34627C0.822912 1.60363 0.668335 1.95268 0.668335 2.31664V24.2735C0.668335 24.6374 0.822912 24.9865 1.09806 25.2438C1.37321 25.5012 1.74639 25.6458 2.13551 25.6458H14.7753V16.0945H11.345V12.355H14.7753V9.61041C14.7753 6.41982 16.8587 4.68111 19.9104 4.68111C20.9359 4.67837 21.963 4.72777 22.9841 4.82795V8.14892H20.8787C19.2237 8.14892 18.901 8.88721 18.901 9.96721V12.3482H22.858L22.3444 16.0877H18.8995V25.6458H25.6104C25.9995 25.6458 26.3727 25.5012 26.6478 25.2438C26.923 24.9865 27.0776 24.6374 27.0776 24.2735V2.31664C27.0776 1.95268 26.923 1.60363 26.6478 1.34627C26.3727 1.08892 25.9995 0.944336 25.6104 0.944336Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.3281 6.27356C26.3281 6.27356 26.0706 3.85258 25.2766 2.79025C24.2714 1.3921 23.1456 1.38332 22.6306 1.30211C18.938 0.944336 13.3917 0.944336 13.3917 0.944336H13.3818C13.3818 0.944336 7.83718 0.944336 4.14296 1.30211C3.6263 1.38551 2.50218 1.3921 1.49692 2.79025C0.70294 3.85258 0.450386 6.27356 0.450386 6.27356C0.450386 6.27356 0.187927 9.11376 0.187927 11.9605V14.623C0.187927 17.4632 0.450386 20.3099 0.450386 20.3099C0.450386 20.3099 0.707892 22.7309 1.49692 23.7955C2.50218 25.1936 3.82273 25.1475 4.41202 25.2968C6.52654 25.5645 13.3934 25.6458 13.3934 25.6458C13.3934 25.6458 18.9446 25.6326 22.6372 25.2814C23.1539 25.2002 24.278 25.1914 25.2832 23.7933C26.0772 22.7309 26.3347 20.3078 26.3347 20.3078C26.3347 20.3078 26.5972 17.4676 26.5972 14.6208V11.9583C26.5922 9.11815 26.3298 6.27136 26.3298 6.27136L26.3281 6.27356ZM10.6565 17.8517V7.98119L17.7908 12.9329L10.6565 17.8517Z"
                    fill="white"
                  />
                </svg>
              </a>
            </p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>
              <a href="/">support@tutedude.com</a>
              <a href="/">+91 7988800474</a>
            </p>
          </div>
          <div>
            <h3>Registered Office</h3>
            <p>
              1411/14 Indira Colony Hansi Hissar Hr 125033 <br />
              India <br />
              Region : Hisar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseIntro;
