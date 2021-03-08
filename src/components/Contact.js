import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo1.png" alt="" />
              </div>
              <p>
              Just send me your questions or concerns by starting a new case and we will give you the help you need.
              Let’s talk about your website or project. Send us a message and we will be in touch within one business day

              </p>
              <h5>Email: mukeshdr005@gmail.com</h5>
              <ul className="contactCircles">
                <li>
                  <a href="https://facebook.com/profile.php?id=100008415307363"><FaFacebookF className="contactIcon" /></a>
                </li>
                <li>
                  <a href="https://twitter.com/Mukeshmaddhes12"><FaTwitter className="contactIcon" /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mukesh-maddheshiya-76a83b193"><FaLinkedinIn className="contactIcon" /></a>
                </li>
                <li>
                  <a href="https://instagram.com/mukeshmaddy7"><FaInstagram className="contactIcon" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
