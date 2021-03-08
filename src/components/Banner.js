import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Mukesh Maddheshiya",
    text:
      `Professional web
       developer with decent \
    experience in this field​`,
    image: "/images/Mukesh.png",
  });
  return (
    <header className="header" id="Banner">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                  <a href="https://facebook.com/profile.php?id=100008415307363"><FaFacebookF className="headerIcon" /> </a>
                  </li>
                  <li>
                   <a href="https://twitter.com/Mukeshmaddhes12"><FaTwitter className="headerIcon" /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mukesh-maddheshiya-76a83b193"><FaLinkedinIn className="headerIcon" /></a>
                  </li>
                  <li>
                   <a href="https://instagram.com/mukeshmaddy7"> <FaInstagram className="headerIcon" /></a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="https://youtube.com/channel/UCrnYPJrz8cbEvN1OVvlrzVw" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
