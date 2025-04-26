import React from "react";

const personalInfoContent = [
  { meta: "Company name", metaInfo: "SimSign" },
  { meta: "Software", metaInfo: "Digital Signage" },
  { meta: "experience", metaInfo: "12+ Years" },
  // { meta: "Nationality", metaInfo: "Tunisian" },
  { meta: "Services", metaInfo: "specializing in digital signage" },
  { meta: "Address", metaInfo: "Dubai - UAE" },
  { meta: "phone", metaInfo: "+966553242639" },
  { meta: "Email", metaInfo: "admin@simsign.org" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "Arabic, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
         
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
