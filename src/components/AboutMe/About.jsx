import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React, { useRef } from "react";
import { List, ListItem, ListIcon, SimpleGrid } from "@chakra-ui/react";
import { ViewIcon, CheckCircleIcon } from "@chakra-ui/icons";
// import about from "../AboutMe/about.gif";
import ABOUT from "../AboutMe/about.gif";
import style from "../AboutMe/About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About(props) {
  const { about } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Box mt={["20%", "20%", "8%"]}>
        <Box display="flex" ref={about}>
          {/* <Heading ml="40%">All</Heading> */}
          {/* <Heading ml="0.6%">About</Heading> */}
          <Heading ml="40%">About</Heading>
          <Heading ml="0.6%">Me</Heading>
        </Box>
        <SimpleGrid columns={[1, 1, 2]} m="auto" mt="7%" spacing={-10}>
          <Box>
            <Image
              float="right"
              m="20px"
              mr="15%"
              src={ABOUT}
              borderRadius="20% 5% 20% 5%"
              boxSize={["70%", "70%", "80%"]}
              data-aos="zoom-in"
              // border="5px solid black"
            />
          </Box>
          <Box>
            <List
              spacing={4}
              className={style.list}
              fontSize={["10px", "15px", "xl"]}
              mr={["10%", "10%", "20%"]}
              // border="1px solid black"
            >
              <ListItem className={style.listitem} data-aos="fade-left">
                <ListIcon as={CheckCircleIcon} color="rgb(39, 116, 232)" />
                Hi there! I'm Rahul George, a passionate Full Stack Web
                Developer dedicated to creating innovative digital solutions
                that enhance user experiences.
              </ListItem>
              <ListItem className={style.listitem} data-aos="fade-up-right">
                <ListIcon as={CheckCircleIcon} color="rgb(39, 116, 232)" />I have a strong foundation in JavaScript, HTML, CSS, and React, I
                have completed over 1000 hours of hands-on coding practice,
                preparing me to tackle complex challenges in web development.
              </ListItem>
              <ListItem className={style.listitem} data-aos="fade-left">
                <ListIcon as={CheckCircleIcon} color="rgb(39, 116, 232)" />I
                thrive on curiosity and the pursuit of knowledge, which drives
                me to explore new technologies and methodologies in the
                ever-evolving tech landscape.
              </ListItem>
              <ListItem className={style.listitem} data-aos="fade-up-right">
                <ListIcon as={CheckCircleIcon} color="rgb(39, 116, 232)" />
                Fast Forwarding to today, I built a number of web applications
                and 4 major projects. Learned a great deal about teamwork,
                leadership, and communication. After months of rigorous
                training, here I am looking for an opportunity as a full stack
                web developer.
              </ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
