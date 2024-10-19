import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/homeimg.gif";
import logoImg from "../../assets/img/hero/logo.png";
import heroImgMobile from "../../assets/img/hero/homeimg.gif";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  logoImg: logoImg,
  heroTitleName: "SimSign",
  heroDesignation: "Digital Signage",
  heroDescriptions: `SimSign is a powerful digital signage solution that leverages digital displays like webOS, Tizen, Android, Linux, Raspberry Pi and Windows to deliver dynamic content such as advertisements, announcements, and real-time information. Found in diverse environments like retail stores, airports, corporate offices, and public spaces, SimSign enhances audience engagement through visually appealing, easily updatable content. With the ability to integrate multimedia elements and interactive features, it provides businesses and organizations with an efficient way to share targeted messages, increase brand visibility, and improve customer experience.`,
  heroBtn: "About Us",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <img alt="simsign" style={{ width: "30%", float: "right", padding: "7% 3% 0% 3%" }}  className="text-uppercase poppins-font"
            src={heroContent.logoImg}
             
            />
              {/* <span>{heroContent.heroDesignation}</span>  */}
            <p style={{ textAlign: "justify" }} className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>US</span>
                </h1>
                <span className="title-bg">SimSign</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
