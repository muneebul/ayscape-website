import { useState } from "react";
import img1 from "../assets/img/blog/webonew.png";
import img2 from "../assets/img/blog/tizen3.png";
import img3 from "../assets/img/blog/linuxtext2.png";
import img4 from "../assets/img/blog/android.png";
import img5 from "../assets/img/blog/zameerreshi.png";
import img6 from "../assets/img/blog/lateefpalla.png";


const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "WebOS is a popular Platform in LG displays",
      // commentor: "Rio ",
      // date: "21 April 2022",
      // tag: `wordpress, business, economy, design`,
      description1:
        "It allows for seamless integration of SimSign software without the need for external media player.",
      description2:
        "WebOS continues to be a preferred choice in the digital signage industry due to its stability, ease of use, and scalability, making it suitable for small businesses as well as large enterprises. ",
      description3:
        "Supports playback of various formats: MP4, JPG, HTML5, and streaming. Allows scheduling of content and real-time updates.",
      description4:
        "LG WebOS signage displays come with System on Chip (SoC), enabling high-performance processing without external hardware. Supports multi-zone screen layout, splitting the screen for multiple media.",
    },
    {
      id: 2,
      img: img2,
      title: "Samsung’s Tizen is a Smart Signage displays",
      commentor: "Santhan ",
      date: "14 January 2022",
      tag: `wordpress, business, economy, design`,
      description1:
        "It’s used for high-performance content rendering, often used in commercial and retail environments.",
      description2:
        "Samsung Smart Signage powered by Tizen provides a reliable and scalable platform for dynamic content delivery in retail, corporate, public spaces, transportation hubs, etc. ",
      description3:
        "Fast boot times and smooth performance for high-definition (HD/4K) content. Low power consumption, making it ideal for always-on commercial displays.",
      description4:
        "The Tizen  allows seamless playback of videos, images, and HTML5-based content without needing external hardware (like media players). Tizen is sandboxed and includes multi-layer security, ensuring safe deployment of connected signage in public or high-traffic environments.",
    },
    {
      id: 3,
      img: img3,
      title: "Linux is a popular choice for open-source signage",
      commentor: "steve ",
      date: "9 January 2020",
      tag: `wordpress, business, economy, design`,
      description1:
        "Many media players run on Linux for stability, cost-effectiveness, and especially for businesses.",
      description2:
        "Linux plays a significant role in digital signage due to its open-source nature, stability, and low resource consumption. ",
      description3:
        "Open-Source: Freedom to modify the software based on specific needs without licensing restrictions. Designed to handle 24/7 operations with minimal resource usage",
      description4:
        "Tailor the OS for specific signage solutions (e.g., menu boards, etc.). Supports images, videos, and dynamic web-based content.",
    },
    {
      id: 4,
      img: img4,
      title: "Android is most popular platforms for signage",
      commentor: "Beker ",
      date: "15 March 2022",
      tag: `wordpress, business, economy, design`,
      description1:
        "its flexibility and wide range of supported devices (including commercial displays and tablets).",
      description2:
        "Android has become a popular platform for digital signage due to its affordability, ease of use, and compatibility with a wide range of devices, such as smart TVs, tablets, and media players. ",
      description3:
        " Many Android devices (smart TVs, tablets, and media players) are inexpensive compared to proprietary systems.  Ready-to-use with Android media players or smart TVs; no need for complex installations.",
      description4:
        "Ideal for interactive signage like digital menus using Android tablets or touch displays. Supports videos, live dashboards, social media feeds, and web content.",
    },
    {
      id: 5,
      img: img5,
      title: "Raspberry Pi is a small, single-board computer",
      commentor: "Janntul ",
      date: "9 January 2021",
      tag: `wordpress, business, economy, design`,
      description1:
        "its become a popular platform for signage , especially in budget-conscious and DIY environments.",
      description2:
        "The Raspberry Pi, a low-cost, credit-card-sized computer, has become a popular choice for digital signage due to its affordability, flexibility, and energy efficiency. It provides a perfect platform for businesses looking to build reliable signage solutions at a low cost.", 
      description3:
        " Raspberry Pi boards start as low-cost single-board computers, making it an affordable option for signage projects. Small size and low power consumption make it ideal for continuous operation.",
      description4:
        "Raspberry Pi supports custom apps, dashboards, and web content. Simple web interface for managing playlists. Supports images, videos, and web pages.",
        
    },
    {
      id: 6,
      img: img6,
      title: "Windows is used where more integration required",
      commentor: "Hasan ",
      date: "9 January 2022",
      tag: `wordpress, business, economy, design`,
      description1:
        "its used in advanced functionality with existing IT infrastructure. high-end media players are built for Windows.",
      description2:
        "Windows-based systems are popular for digital signage due to their compatibility, powerful hardware support, and familiar interface. They are ideal for businesses needing advanced features, such as integration with enterprise software, complex displays, and interactive signage. ",
      description3:
        "Supports PCs, Intel NUCs, tablets, and mini-PCs with HDMI outputs. Suitable for 4K/8K displays and demanding applications.",
      description4:
        "Easy for businesses already using Windows systems. Supports images, videos, web pages, and PowerPoint slides.",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
