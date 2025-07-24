import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";

const Portfolio = () => {
  const renderTabItems = (data) =>
    data.map(({ id, type, image, delayAnimation }) => (
      <div key={id} data-aos="fade-right" data-aos-delay={delayAnimation}>
        <div className="tab-content">
          <img src={image} alt="portfolio project demo" />
          <h3>
            <span className="conent-title">{type}</span>
          </h3>
        </div>
      </div>
    ));

  return (
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
          <TabPanel>
            <div className="tab-container">
              {renderTabItems(PortfolioData)}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tab-container">
              {renderTabItems(
                PortfolioData.filter((item) => item.tag.includes("logo"))
              )}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tab-container">
              {renderTabItems(
                PortfolioData.filter((item) => item.tag.includes("video"))
              )}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tab-container">
              {renderTabItems(
                PortfolioData.filter((item) =>
                  item.tag.includes("graphic design")
                )
              )}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="tab-container">
              {renderTabItems(
                PortfolioData.filter((item) => item.tag.includes("mockup"))
              )}
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

          {/* CLOUD SERVICES */}
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
  );
};

export default Portfolio;
