import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
// import Skills from "./Skills";
// import cv from "../../assets/files/catalog.pdf";
// import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
  <div className="">
    <div className="col-12 box-stats with-margin">
      <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
        Company Info
      </h3>
      <h6 className="mt-2 " style={{ wordSpacing: "5px" }}>
  <span className="text-success fw-bold">Ayscape Cloud</span> is a leading cloud software company with over 12 years of experience. We specialize in digital signage, cloud content management, and remote display solutions. Our mission is to empower businesses with scalable, smart, and real-time visual communication tools powered by cloud technology.
</h6>

    </div>
              {/* End .col */}

              {/* <div className="col-12 d-block d-sm-none">
                <img
                  src={he}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div> */}
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              <div className="col-12 mt-1">
                <a className="button" href="/" download>
                  <span className="button-text">Download Catalog</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        {/* <hr className="separator" /> */}

        {/* Skills Starts */}
        {/* <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              My Skills
            </h3>
          </div>
          <Skills />
        </div> */}
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Experience 
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default index;
