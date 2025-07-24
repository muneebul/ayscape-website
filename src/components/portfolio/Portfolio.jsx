import React, { useState } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>
            <Tab>LOGO</Tab>
            <Tab>VIDEO</Tab>
            <Tab>GRAPHIC DESIGN</Tab>
            <Tab>MOCKUP</Tab>
            <Tab>SIMSIGN</Tab>
            <Tab>Cloud Services</Tab>
          </TabList>

          <div className="container">
            {/* ALL */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map(({ id, type, image, delayAnimation }) => (
                  <div
                    key={id}
                    data-aos="fade-right"
                    data-aos-delay={delayAnimation}
                  >
                    <div className="tab-content">
                      <img src={image} alt="portfolio project demo" />
                      <h3>
                        <span className="conent-title">{type}</span>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* LOGO */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("logo")).map(
                  ({ id, type, image, delayAnimation }) => (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div className="tab-content">
                        <img src={image} alt="portfolio project demo" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            </TabPanel>

            {/* VIDEO */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("video")).map(
                  ({ id, type, image, delayAnimation }) => (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div className="tab-content">
                        <img src={image} alt="portfolio project demo" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            </TabPanel>

            {/* GRAPHIC DESIGN */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) =>
                  item.tag.includes("graphic design")
                ).map(({ id, type, image, delayAnimation }) => (
                  <div
                    key={id}
                    data-aos="fade-right"
                    data-aos-delay={delayAnimation}
                  >
                    <div className="tab-content">
                      <img src={image} alt="portfolio project demo" />
                      <h3>
                        <span className="conent-title">{type}</span>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* MOCKUP */}
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) =>
                  item.tag.includes("mockup")
                ).map(({ id, type, image, delayAnimation }) => (
                  <div
                    key={id}
                    data-aos="fade-right"
                    data-aos-delay={delayAnimation}
                  >
                    <div className="tab-content">
                      <img src={image} alt="portfolio project demo" />
                      <h3>
                        <span className="conent-title">{type}</span>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* SIMSIGN */}
            <TabPanel>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "40px",
                }}
              >
                <div
                  style={{
                    maxWidth: "800px",
                    padding: "30px",
                    borderRadius: "12px",
                    border: "2px solid grey",
                    textAlign: "center",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <h4 className="text-success" style={{ marginBottom: "20px" }}>
                    Simsign Info
                  </h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
                    <strong>SIMSIGN</strong> is an advanced cloud-based digital signage platform that enables businesses to create, manage, and schedule multimedia content across any number of displays remotely. With real-time updates, intuitive drag-and-drop editing, and support for images, videos, live feeds, and web content, SIMSIGN is ideal for retail stores, hotels, educational institutions, government buildings, and corporate environments seeking impactful visual communication.
                  </p>
                </div>
              </div>
            </TabPanel>

            {/* AWS */}
            <TabPanel>
              <div
                className="box-stats with-margin"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "40px",
                }}
              >
                <div
                  style={{
                    maxWidth: "800px",
                    padding: "30px",
                    borderRadius: "12px",
                    border: "2px solid grey",
                    textAlign: "center",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  }}
                >
              <h4 className="text-success" style={{ marginBottom: "20px" }}>
                    Cloud-Based Platform Info
                  </h4>
                  <p style={{ fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
                    Our <strong>Cloud-Based Platform</strong> empowers businesses to operate smarter and faster by leveraging scalable, on-demand infrastructure. Easily manage content, deploy software applications, and scale services globally — all through a centralized, secure dashboard. With real-time monitoring, automated backups, and seamless integration, our cloud solutions are ideal for organizations seeking performance, agility, and reduced operational complexity in today's digital landscape.
                  </p>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>

      {/* Modal is not triggered by image clicks anymore */}
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}
    </>
  );
};

export default Portfolio;
