import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "../ContactMe/Contact.module.css";
import CONTACT from "../ContactMe/contact.gif";
import { useToast, Link } from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import emailjs from "emailjs-com";

import AOS from "aos";
import "aos/dist/aos.css";
const formdata = {
  name: "",
  email: "",
  message: "",
};

export default function Contact(props) {
  const { contact } = props;
  const toast = useToast();
  const [form, setForm] = useState(formdata);
  // const [user, setUser] = useState([]);
  function handleform(e) {
    const { name: key, value } = e.target;
    setForm({ ...form, [key]: value });
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s7uya8i",
        "template_jasjee3",
        e.target,
        "tPodLml1dQbamqDMF"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    toast({
      title: "Thank you for contacting me🙂",
      description: "I will give  you reply soon ",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setForm("");
    e.target.reset();
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    // setForm("");
  }, []);
  return (
    <>
      <Box mt={["10%", "10%", "5%"]} ref={contact}>
        <Box display="flex">
          <Heading ml={["20%", "24%", "40%"]} mt="5%" >Contact</Heading>
          {/* <Heading ml="2%" color="#A3E900">
            In
          </Heading> */}
          {/* <Heading ml="0.9%">Touch</Heading> */}
        </Box>
        <SimpleGrid columns={[1, 1, 2]} spacing={10} w="80%" m="auto" mt="-2%">
          <Box data-aos="zoom-in-down">
            <Image
              boxSize={["250px", "380", "450"]}
              objectFit="cover"
              src={CONTACT}
              alt="Form"
              ml={["10%", "10%", "2%", "none"]}
              mb={["-10%", "-10%", "none"]}
            />
          </Box>
          <Box className={style.App}>
            <Box display={"flex"} m="auto" gap={[2, 2, 7, 8]} mt="100px">
              <Box>
                <Button
                  fontSize={[14, 14, 14, 17]}
                  color="#ffff"
                  bg="rgb(39, 116, 232)"
                  p={"0"}
                  pl={[1, 1, 0, 3]}
                  pr={[1, 1, 0, 3]}
                  // data-aos="fade-right"
                  transition="all .4s ease-in-out"
                  _hover={{
                    transform: "scale(1.1)",
                    bg: "#ffff",
                    color: "#4db946",
                  }}
                >
                  <a href="https://github.com/RahulGeorge96">GitHub</a>
                  <AiFillGithub />
                </Button>
              </Box>

              <Box>
                <Button
                  fontSize={[14, 14, 14, 17]}
                  color="#ffff"
                  bg="rgb(39, 116, 232)"
                  p={"0"}
                  pl={[1, 1, 0, 3]}
                  pr={[1, 1, 0, 3]}
                  // data-aos="fade-right"
                  // transition="all .4s ease-in-out"
                  // _hover={{
                  //   transform: "scale(1.1)",
                  //   bg: "#ffff",
                  //   color: "#4db946",
                  // }}
                >
                  <a href="https://www.linkedin.com/in/rahul-jithu/">
                    LinkedIn
                  </a>
                  <AiFillLinkedin />
                </Button>
              </Box>

              <Box>
                <Button
                  fontSize={[14, 14, 14, 17]}
                  color="#ffff"
                  bg="rgb(39, 116, 232)"
                  p={"0"}
                  pl={[1, 1, 0, 3]}
                  pr={[1, 1, 0, 3]}
                  // data-aos="fade-right"
                  // transition="all .4s ease-in-out"
                  // _hover={{
                  //   transform: "scale(1.1)",
                  //   bg: "rgb(39, 116, 232)",
                  //   color: "#4db946",
                  // }}
                >
                  <a href="mailto:rahuljithu911@gmail.com">Gmail</a>
                  <AiOutlineMail />
                </Button>
              </Box>

              <Box>
                <a href="tel:+919752736273">
                  <Button
                    fontSize={[14, 14, 14, 17]}
                    color="#ffff"
                    bg="rgb(39, 116, 232)"
                    p={"0"}
                    pl={[1, 1, 0, 3]}
                    pr={[1, 1, 0, 3]}
                    // data-aos="fade-right"
                    // transition="all .4s ease-in-out"
                    // _hover={{
                    //   transform: "scale(1.1)",
                    //   bg: "rgb(39, 116, 232)",
                    //   color: "#4db946",
                    // }}
                  >
                    {" "}
                    <AiFillPhone
                      style={{ marginRight: "4", fontSize: "20px" }}
                    />
                  </Button>
                </a>
              </Box>
            </Box>
            <Box
              // data-aos="fade-down"
              mt="10px"
              //   data-aos-anchor-placement="bottom-bottom"
            >
              <form onSubmit={handlesubmit}>
                <label>Name</label>
                <input
                  value={form.name}
                  onChange={handleform}
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="Your name.."
                  required
                />
                <label>Email</label>
                <input
                  value={form.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email  should be valid"
                  onChange={handleform}
                  required
                />

                <label>Message</label>
                <textarea
                  placeholder="Type you message here.."
                  value={form.message}
                  type="message"
                  name="message"
                  onChange={handleform}
                  required
                />
                <button type="submit">SUBMIT</button>
              </form>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* ICONS....................................>>>>>>>>>>>>>>>>>>>> */}
      <Box
        position="fixed"
        top="77%"
        left="0%"
        fontSize="250%"
        // border="5px solid red"
      >
        <Link
          href="https://github.com/RahulGeorge96"
          _hover={{
            color: "rgb(39, 116, 232)",
          }}
        >
          <AiFillGithub />
        </Link>
        <Button
          fontSize="100%"
          w="57%"
          mt="10px"
          mb="5px"
          _hover={{
            color: "rgb(39, 116, 232)",
          }}
        >
          <Link href="https://www.linkedin.com/in/rahul-jithu/">
            <AiFillLinkedin />
          </Link>
        </Button>

        <Link
          href="mailto:rahuljithu911@gmail.com"
          _hover={{
            color: "rgb(39, 116, 232)",
          }}
        >
          <AiOutlineMail />
        </Link>
      </Box>

      <Box mt={["15%", "15%", "11%"]} mb="30px">
        <Text
          fontSize={["10px", "14px", "15px", "15px"]}
          fontStyle="-moz-initial"
          fontFamily="mono"
        >
          Designed and build by Rahul George ,2024 All right reserved
        </Text>
      </Box>
    </>
  );
}
