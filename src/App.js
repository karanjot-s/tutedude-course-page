import { useEffect, useState } from "react";
import Layout from "./components/Layout";
// import MentorButton from "./components/MentorButton";
import Course from "./pages/Course";
import Cookies from "js-cookie";

function App() {
  const [chakraInit, setChakraInit] = useState(false);
  useEffect(() => {
    initChakra();
    // eslint-disable-next-line
  }, []);

  function initChakra() {
    const email = Cookies.get("user_email");
    const name = Cookies.get("user_name");
    if (chakraInit) return;
    (function (d, w, c) {
      w.ChatraID = process.env.REACT_APP_CHAKRA_ID;
      var s = d.createElement("script");
      w[c] =
        w[c] ||
        function () {
          (w[c].q = w[c].q || []).push(arguments);
        };
      s.async = true;
      s.src = "https://call.chatra.io/chatra.js";
      if (d.head) d.head.appendChild(s);
    })(document, window, "Chatra");
    window.ChatraIntegration = {
      /* main properties */
      name: name,
      email: email,
    };
    setChakraInit(true);
  }
  return (
    <Layout>
      <Course />
      {/* <MentorButton /> */}
    </Layout>
  );
}

export default App;
