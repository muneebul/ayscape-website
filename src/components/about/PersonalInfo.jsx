import React from "react";

const personalInfoContent = [
  { meta: "Company name", metaInfo: "Ayscape Cloud" },
  { meta: "Software", metaInfo: "Cloud-Based Solutions" },
  { meta: "Services", metaInfo: "Scalable digital signage and real-time display management." },
  // { meta: "Nationality", metaInfo: "Tunisian" },
  { meta: "Address", metaInfo: "Druroo Tangmarg, Jammu & Kashmir" },
  { meta: "experience", metaInfo: "12+ Years" },
  { meta: "phone", metaInfo: "+917006992372" },
  { meta: "Email", metaInfo: "admin@simsign.org" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "Arabic, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font box-stats">
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
