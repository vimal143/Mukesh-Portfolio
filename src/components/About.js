import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Mukesh Maddheshiya" },
    { id: 2, title: "Email:", text: "mukeshdr005@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 81159 15835" },
    { id: 4, title: "Linkedin", text: "mukesh-maddheshiya-76a83b193" },
  ]);
  return (
    <div className="about" id="About">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/Mukesh.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
             My name is Mukesh Maddheshiya. I Love Programming, writing, speaking and Travelling.
             I'm not like to talking about myself in the 3rd person .
             I am the co-founder of <a href="http://campussathi.in">campussathi.in</a>
              </div>
              <div className="about__info-p2">
                Feel free to take a look at my most recent projects on Project Section
                
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
