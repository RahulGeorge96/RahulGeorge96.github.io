import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { HiEye } from "react-icons/hi";
import { AiOutlinePlayCircle } from "react-icons/ai";
// import { useState } from "react";
import myntra from "../Project/myntra.png";
import Sephora from "../Project/sephora.png";
import clockify from "../Project/clockify.png";
import portfolio from "../Project/Portfolio.png";
import zepto from "../Project/zepto.png";
import BeeHome from "../Project/BeeHome.png";
import HarleyDavison from "../Project/HarleyDavison.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = (props) => {
  const { project } = props;
  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  return (
    <Box className="mainDiv" mt={["20%", "20%", "10%"]} ref={project}>
      <Heading fontSize={40} ml={["20%", "25%", "40%"]}>
        <span style={{ color: "white" }}>Projects</span>
      </Heading>
      <SimpleGrid
        m={"auto"}
        mt={"20"}
        w={"80%"}
        columns={[1, 1, 2]}
        spacing="40px"
        className="ProjectDiv"
        textAlign={"center"}
        pb={"100px"}
      >
        {/* mynta................................ ....................................................................*/}
        <Box data-aos="zoom-in" borderRadius={10} p={4} boxShadow="dark-lg">
          <Image
            w={"100%"}
            borderRadius={10}
            src={HarleyDavison}
            alt="Myntra-com"
            border="5px solid rgb(39, 116, 232)"
          />
          <Heading mt={4} fontSize={"22px"}>
            HarleyDavidson - Clone
          </Heading>
          <Text
            fontSize={["14px", "14px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            The Harley Davidson website is an online platform that allows
            customers to browse, purchase, and learn about Harley Davidson
            motorcycles and accessories, including helmets, gloves, and jackets.
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["14px", "14px", "17px"]}>
            {/* <b> Individual Project </b>| <b>Duration: </b> 04 Days */}
            <b> Group Project: </b>| 5 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["13px", "13px", "15px"]}>
            <span style={{ color: "rgb(39, 116, 232)", fontSize: "16px" }}>
              TECH STACK:-
            </span>
            <span style={{ fontSize: "16px" }} ml="30px">
              {" "}
              HTML | CSS | JAVASCRIPT | REACTJS | FIREBASE | CHAKRA UI
            </span>
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "40px"]}
            className="ProjectIcon"
          >
            <a href="https://github.com/RahulGeorge96/Array-Archers_042">
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            {/* <a href="https://www.linkedin.com/posts/faizan7_myntra-project-react-activity-6970441473116782592-FTAe?utm_source=share&utm_medium=member_desktop">
              <AiOutlinePlayCircle
                className="gitEye"
                style={{ marginTop: "3" }}
              />
            </a> */}
            <a href="https://harley-davidson-six.vercel.app/">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>
        {/*Sephora................................................................................................... */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} boxShadow="dark-lg">
          <Image
            w={"100%"}
            borderRadius={10}
            src={BeeHome}
            alt="Myntra-com"
            border="5px solid rgb(39, 116, 232)"
          />
          <Heading mt={4} fontSize={"22px"}>
            BeeHome
          </Heading>
          <Text
            fontSize={["14px", "14px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            BeeHome is a real estate accommodation website that offers a variety
            of properties, including apartments, flats, and paying guest
            accommodations, helping users find and book their ideal living
            spaces easily.
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["14px", "14px", "17px"]}>
            <b> Group Project: </b>| 3 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["13px", "13px", "15px"]}>
            <span style={{ color: "rgb(39, 116, 232)", fontSize: "16px" }}>
              TECH STACK:-
            </span>
            <span style={{ fontSize: "16px" }} ml="30px">
              {" "}
              HTML | CSS | JAVASCRIPT | REACTJS | JSON SERVER
            </span>
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "40px"]}
            className="ProjectIcon"
          >
            <a href="https://github.com/RahulGeorge96/Sovereignty-SQL_033">
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            {/* <a href="https://www.linkedin.com/posts/faizan7_python-html-css-activity-6945353972337520640-nnFZ?utm_source=share&utm_medium=member_desktop">
              <AiOutlinePlayCircle
                className="gitEye"
                style={{ marginTop: "3" }}
              />
            </a> */}
            <a href="https://beehome-realestate.netlify.app/">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* ..............................Clockify ..........................................*/}
        <Box data-aos="zoom-in" borderRadius={10} p={4} boxShadow="dark-lg">
          <Image
            w={"100%"}
            borderRadius={10}
            src={zepto}
            alt="zepto"
            border="5px solid rgb(39, 116, 232)"
          />
          <Heading mt={4} fontSize={"22px"}>
            Zepto - Clone
          </Heading>
          <Text
            fontSize={["14px", "14px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            This website is a clone of "Clockify". Clockify is a time tracker
            and timesheet app that lets you track work hours across projects.
            Unlimited users, free forever.
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["14px", "14px", "17px"]}>
            <b> Group Project: </b>| 4 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["13px", "13px", "15px"]}>
            <span style={{ color: "rgb(39, 116, 232)", fontSize: "16px" }}>
              TECH STACK:-
            </span>
            <span style={{ fontSize: "16px" }} ml="30px">
              HTML | CSS | JAVASCRIPT | BOOTSTRAP
            </span>
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "40px"]}
            className="ProjectIcon"
          >
            <a href="https://github.com/RahulGeorge96/Alibaba-Aces_110">
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://zepto-website-unit-4-project.netlify.app/">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* ...............................Portfolio................................. */}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
