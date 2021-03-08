import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaEye,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "Hi, I’m Mukesh. Nice to meet you.",
    text:
      "I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text:
        "Photography is my passion - nature is my refuge. Combine the two, and that is where I am most at peace.",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text:
        "I value simple content structure, clean design patterns, and thoughtful interactions.",
    },
    {
      id: 4,
      icon: <FaEye className="commonIcons" />,
      heading: "Logo Design",
      text:
        "Build 2D and 3D Logos to your requirement, in your budget and as per your timeline",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Can Edit any type of video with best cinematic effect",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "SEO Expert",
      text:
        "We Make your website visible to your audience by ranking higher.",
    },
  ]);
  return (
    <div className="services" id="Services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
