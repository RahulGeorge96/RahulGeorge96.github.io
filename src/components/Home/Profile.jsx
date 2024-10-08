import style from "./Profile.module.css";
import React, { useEffect } from "react";
import AOS from "aos";
import { AiOutlineArrowDown } from "react-icons/ai";
import "aos/dist/aos.css";
import {
  Box,
  Text,
  Heading,
  Image,
  Wrap,
  Avatar,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import image from "../Home/photo.jpg";
import hi from "../Home/Hi.gif";
import resume from "../Home/RahulGeorge_Resume.pdf";

export default function Profile(props) {
  const { home } = props;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box m="auto" mt="1%" w="90%" ml={["none", "none", "10%"]} ref={home}>
      <SimpleGrid columns={[1, 1, 2]} spacing="0px">
        <Box
          m="10%"
          ml={["-10px", "none", "none"]}
          data-aos="fade-right"
          mt="20%"
        >
          <Box className={style.mainBox}>
            <Box display="flex">
              <Text fontSize={["22px", "22px", "42px"]}>Hello,</Text>
              <Box w="8%">
                <img src={hi} alt="hello.gif" />
              </Box>
              <Text fontSize={["22px", "22px", "42px"]}> My name is</Text>
            </Box>

            <Heading as="h1" size={["xl", "2xl"]}>
              Rahul George
            </Heading>
          </Box>
          <Box className={style.tagLine}>
            <Box id={style.faizan}>
              <Heading
                as="h1"
                className={style.run}
                fontSize={["20px", "20px", "35px"]}
              >
                <span>I</span>'m<span> Full Stack Web Developer</span>
              </Heading>
            </Box>
            <Button
              mt="20px"
              bg="rgb(39, 116, 232)"
              fontSize="3xl"
              h="50px"
              display="flex"
            >
              <a href={resume} download="Rahul_George_Resume">
                Resume
              </a>
              <AiOutlineArrowDown />
            </Button>
          </Box>
        </Box>
        <Box
        //  data-aos="zoom-in"
         >
          <Image
            // className={style.floating}
            src={image}
            boxSize={["260px", "300", "360px"]}
            ml="25%"
            borderRadius="16px"
            // transition=" all 3s ease-in-out"
            mt="12%"
            // _hover={{
            //   transform: "scale(1.1)",
            // }}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
