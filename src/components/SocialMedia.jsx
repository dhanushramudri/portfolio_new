import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { images } from "../constants";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.upwork.com/freelancers/~01d28642c3d28d1406">
      <div>
        <img src={images.upwork} alt="Upwork" />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/dhanush-ramudri-09392124b/">
      <div>
        <FaLinkedinIn />
      </div>
    </a>
    <a href="https://twitter.com/Dhanush_Ramudri">
      <div>
        <BsTwitter />
      </div>
    </a>
  </div>
);

export default SocialMedia;
