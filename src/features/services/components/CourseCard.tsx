import { Text, useBreakpointValue, Center, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import { ServerUrl } from "../../../constants";
import parse from "html-react-parser";
const CourseCard = ({ data }: any) => {
  console.log(data);
  return (
    <Box
      as={NavLink}
      to={"/"}
      overflow={"hidden"}
      //border={"solid white 2px"}
      borderBottomStartRadius={50}
      borderTopEndRadius={50}
      bg={"white"}
      boxShadow={"2xl"}
      minHeight={"400px"}
      p={0}
    >
      <motion.button whileHover={{ scale: 1.1 }}>
        <Image
          // borderBottomStartRadius={50}
          // borderTopEndRadius={50}
          w={"full"}
          //my={3}
          h={300}
          objectFit={"cover"}
          objectPosition={"center"}
          src={ServerUrl + data.courseCover}
        />
        <Box p={10}>
          <Text
            mb={2}
            color={"black"}
            fontWeight={700}
            fontFamily={"Poppins"}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "14px", md: "20px" })}
          >
            {data.courseName}
          </Text>
          <Center>
            <Text textAlign={"justify"} noOfLines={5} fontSize={14} mt={2}>
              {data.content &&
                data.content.length > 0 &&
                parse(data.content ? data.content : "")}
            </Text>
            {/* <Text
              my={0}
              color={"black"}
              fontWeight={400}
              lineHeight={1.8}
              textAlign={"center"}
              fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
            >
              {data.content}
            </Text> */}
          </Center>
        </Box>
      </motion.button>
    </Box>
  );
};

export default CourseCard;
