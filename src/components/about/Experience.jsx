import React from "react";

const experienceContent = [
  {
    // year: "",
    position: " Most Expert ",
    compnayName: "People",
    details: `With years of experience in the digital signage industry, SimSign has established itself as a trusted provider of innovative display solutions.`,
  },
  {
    // year: "2013 - 2018",
    position: "24/7 Technical",
    compnayName: "Support Team",
    details: `We provide ongoing support to ensure that your digital signage continues to operate at its peak performance. Our dedicated support team is just a call away, ready to assist with any questions or concerns.`,
  },
  // {
  //   // year: "2005 - 2013",
  //   position: "Consultant",
  //   compnayName: "Videohive",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
