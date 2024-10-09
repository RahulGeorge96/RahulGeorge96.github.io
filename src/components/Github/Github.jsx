// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import { Image } from "@chakra-ui/react";
// // import "./GitHub.css";

// import { Box, Text } from "@chakra-ui/react";
// const GitHub = () => {
//   const github = {
//     margin: "auto",
//     border: "5px solid rgb(39, 116, 232)",
//     padding: "20px",
//     borderRadius: "10px",
//   };
//   let Theme = "";
//   let x = localStorage.getItem("chakra-ui-color-mode");
//   if (x === "dark") {
//     Theme = "tokyonight";
//   } else {
//     Theme = "default";
//   }

//   return (
//     <div>
//       <Text mt="6%" mb="1%">GITHUB STATS</Text>
//       <Box
//         w={["100%", "100%", "65%"]}
//         style={github}
//         className="github_Calender"
//       >
//         <GitHubCalendar
//           style={{ margin: "auto" }}
//           username="RahulGeorge96"
//           year={new Date().getFullYear()}
//         />
//       </Box>

//       <Box
//         m="auto"
//         mt="30px"
//         w={["100%", "100%", "65%"]}
//         border="5px solid rgb(39, 116, 232)"
//       >
//         <Image
//           align="center"
//           src={`https://github-readme-stats.vercel.app/api?username=RahulGeorge96&theme=${Theme}`}
//           alt="RahulGeorge"
//           width="100%"
//           height="100%"
//         />
//       </Box>

//       <Box
//         m="auto"
//         mt="30px"
//         w={["100%", "100%", "65%"]}
//         border="5px solid rgb(39, 116, 232)"
//       >
//         <Image
//           align="center"
//           alt="error"
//           src={`https://github-readme-streak-stats.herokuapp.com/?user=RahulGeorge96&theme=${Theme}`}
//           width="100%"
//         />
//       </Box>
//     </div>
//   );
// };

// export default GitHub;
