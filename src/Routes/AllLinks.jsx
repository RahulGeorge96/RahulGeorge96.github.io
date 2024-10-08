import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Styles from "../components/All.module.css";
import { Box, Text, Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Profile from "../components/Home/Profile";
import About from "../components/AboutMe/About";
import Skill from "../components/Skill/Skill";
import Projects from "../Project/Project";
import Contact from "../components/ContactMe/Contact";
import { useState } from "react";
import { useEffect } from "react";
import { BsEggFried } from "react-icons/bs";
import { Draw } from "../components/Drawer/Drawe";
// import GitHub from "../components/Github/Github";
// import Timeline from "../components/Experince";
export default function AllLinks() {
  const { colorMode, toggleColorMode } = useColorMode();
  // console.log(colorMode);
  const about = useRef();
  function handleaboutClick() {
    about.current.scrollIntoView({ behavior: "smooth" });
  }

  const home = useRef();
  function handlehomeClick() {
    home.current.scrollIntoView({ behavior: "smooth" });
  }

  const Skills = useRef();
  function handleSkillClick() {
    Skills.current.scrollIntoView({ behavior: "smooth" });
  }

  const project = useRef();
  function handleprojectClick() {
    project.current.scrollIntoView({ behavior: "smooth" });
  }

  const contact = useRef();
  function handlecontactClick() {
    contact.current.scrollIntoView({ behavior: "smooth" });
  }

const experince = useRef();
function handleExperinceClick() {
  experince.current.scrollIntoView({ behavior: "smooth" });
}


  const [bg, setBg] = useState();

  useEffect(() => {
    if (colorMode == "light") {
      console.log(colorMode);
      setBg({ backgroundColor: "white" });
    } else {
      setBg({ backgroundColor: "rgb(34,35,38)" });
    }
  }, [colorMode]);

  return (
    <>
      <Box position="sticky" top="0" left="0" style={bg} zIndex="1000">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <NavLink to="/">
            <Box
              w="20%"
              display="flex"
              mt="10px"
              style={{ fontFamily: "'Courgette', cursive" }}
            >
              <Text fontSize="3xl" fontWeight="bold" ml="20px">
                RAHUL
              </Text>
              <Text fontSize="3xl" fontWeight="bold" ml="20px">
                GEORGE
              </Text>
              {/* <Text fontSize="3xl" fontWeight="bold" color="#A3E900">
                ZAN
              </Text> */}
            </Box>
          </NavLink>
          <Box
            // border="1px solid black"
            display="flex"
            justifyContent="space-around"
            w="60%"
            fontWeight="bold"
            alignItems="center"
            mt="10px"
          >
            <Text
              fontSize="xl"
              className={Styles.nav}
              onClick={handlehomeClick}
              display={["none", "none", "none", "flex"]}
            >
              HOME
            </Text>
            <Text
              fontSize="xl"
              className={Styles.nav}
              onClick={handleaboutClick}
              display={["none", "none", "none", "flex"]}
            >
              ABOUT
            </Text>
            <Text
              fontSize="xl"
              className={Styles.nav}
              onClick={handleSkillClick}
              display={["none", "none", "none", "flex"]}
            >
              SKILLS
            </Text>
            <Text
              fontSize="xl"
              className={Styles.nav}
              onClick={handleprojectClick}
              display={["none", "none", "none", "flex"]}
            >
              PROJECT
            </Text>
            <Text
              fontSize="xl"
              className={Styles.nav}
              onClick={handlecontactClick}
              display={["none", "none", "none", "flex"]}
            >
              CONTACT
            </Text>

            {/* 
            <Text
              fontSize="xl"
              className={Styles.nav}
              onClick={handleExperinceClick}
              display={["none", "none", "none", "flex"]}
            >
              EXEPERINCE
            </Text> */}

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // Open the file in a new tab
                window.open(
                  "https://drive.google.com/file/d/1oflL0__xpX01hLnyVjYkhU5upvfDs8oX/view",
                  "_blank"
                );

                // Create a temporary link element to trigger the download
                const link = document.createElement("a");
                link.href =
                  "https://drive.google.com/uc?export=download&id=1oflL0__xpX01hLnyVjYkhU5upvfDs8oX";
                link.download = "resume.pdf"; // You can set the downloaded file name
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link); // Remove the temporary link
              }}
            >
              <Text
                fontSize="xl"
                className={Styles.nav}
                display={["none", "none", "none", "flex"]}
              >
                RESUME
              </Text>
            </a>
            <Text display={["block", "block", "none", "none"]}>
              {/* drawer....................................................................... */}
              <Draw
                handlecontactClick={handlecontactClick}
                handleprojectClick={handleprojectClick}
                handleSkillClick={handleSkillClick}
                handleaboutClick={handleaboutClick}
                handlehomeClick={handlehomeClick}
              />

              {/* Dark Mode Button............................................................... */}
            </Text>
            <Button fontSize="xl" onClick={toggleColorMode} mr="20px" mb="10px">
              {/* {colorMode === "light" ? "Light" : "Dark"} */}
              {colorMode == "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>
        </Box>
      </Box>
      <Profile home={home} />
      <About about={about} />
      <Skill Skills={Skills} />
      {/* <Timeline experince={experince}/> */}
      {/* <GitHub /> */}
      <Projects project={project} />
      <Contact contact={contact} />
    </>
  );
}
