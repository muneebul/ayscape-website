import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/homimg.jpg";
import logoImg from "../../assets/img/hero/logoimg.png";
import heroImgMobile from "../../assets/img/hero/homimg.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  logoImg: logoImg,
  heroTitleName: "Ayscape Cloud",
  heroDesignation: "Cloud Software Solutions",
  heroDescriptions: `offers cutting-edge cloud software designed to help businesses scale effortlessly, collaborate seamlessly, and operate more efficiently. From custom SaaS platforms to workflow automation and secure cloud infrastructure, Ayscape Cloud delivers reliable, scalable, and user-friendly solutions. Trusted by modern teams, it empowers organizations to streamline operations, enhance agility, and unlock the full potential of cloud-first transformation.`,
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
        {/* Desktop Side Image */}
        <div
          className="col-lg-5 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + heroContent.heroImage})`,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "4rem",
              left: "7rem",
              fontWeight: "600",
              fontSize: "1.75rem",
              background: "linear-gradient(90deg, #00c9ff, #92fe9d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
            }}
          >
            Ayscape Cloud Private Limited
          </div>
        </div>

        {/* Main Content */}
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
          <div>
            {/* Mobile Image with Overlay Text */}
            <div
              className="d-block d-lg-none position-relative"
              style={{ width: "100%", maxHeight: "300px", overflow: "hidden" }}
            >
              <img
                src={heroContent.heroMobileImage}
                alt="hero mobile"
                className="img-fluid w-100"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  right: "1rem",
                  fontWeight: "600",
                  fontSize: "1.3rem",
                  background: "linear-gradient(90deg, #00c9ff, #92fe9d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
                  zIndex: 2,
                }}
              >
                Ayscape Cloud Private Limited
              </div>
            </div>

            <h1 className="text-uppercase poppins-font mt-3">
              {heroContent.heroTitleName}
              <span> {heroContent.heroDesignation}</span>
            </h1>

            <img
              alt="logo"
              style={{ width: "30%", float: "right", padding: "7% 3% 0% 3%" }}
              className="text-uppercase poppins-font"
              src={heroContent.logoImg}
            />

            <p style={{ textAlign: "justify" }} className="open-sans-font">
              <span style={{ color: "green" }}>{heroContent.heroTitleName}</span>{" "}
              {heroContent.heroDescriptions}
            </p>

            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal for About Us */}
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

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>US</span>
                </h1>
                <span className="title-bg">Ayscape Cloud</span>
              </div>
              <Index />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
