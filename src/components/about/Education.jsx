import React from "react";

const educationContent = [
  {
    // year: "2015",
    degree: "Cloud for Content ",
    institute: "Management",
    details: `Our team leverages the latest cloud technologies and IoT integration to ensure seamless, scalable operations.`,
  },
  {
    // year: "2012",
    degree: "Display",
    institute: "Wall",
    details: `Whether it's a single screen in one location or hundreds across a global network, SimSign system can scale to meet the size and complexity of the deployment.`,
  },
  // {
  //   year: "2009",
  //   degree: "BACHELOR DEGREE ",
  //   institute: "TUNIS HIGH SCHOOL",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
