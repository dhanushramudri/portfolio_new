import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
// import { urlFor, client } from "../../client";
import { images } from "../../constants";

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text" id="about">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <img src={images.about01} alt="Frontend " />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Frontend Developer
          </h2>
          <p className="p-text" style={{ marginTop: 10 }}>
            I am a frontend developer passionate about building responsive web
            applications
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <img src={images.about03} alt="Frontend " />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            React Developer
          </h2>
          <p className="p-text" style={{ marginTop: 10 }}>
            I am a frontend developer with a passion for building beautiful and
            functional responsive applications
          </p>
        </motion.div>{" "}
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <img src={images.about02} alt="Frontend " />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Web Designer
          </h2>
          <p className="p-text" style={{ marginTop: 10 }}>
            I am a web designer with passion for creating beautiful and
            functional web applications
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <img src={images.about04} alt="Frontend " />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Backend Developer
          </h2>
          <p className="p-text" style={{ marginTop: 10 }}>
            I am a backend developer creating high-performing websites that
            blend beauty with functionality.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
