import { Text, useBreakpointValue, Center, Box } from "@chakra-ui/react";
//import { yellowColor } from "../../../constants";
//import parse from "html-react-parser";
const MaxVisionCard = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="2000">
      <Box borderBottomStartRadius={50} borderTopEndRadius={50} p={10}>
        <Center>
          <Text
            textAlign={"center"}
            bgGradient="linear(to-r, red, yellow)"
            bgClip="text"
            fontWeight={700}
            // fontFamily={"Poppins"}
            lineHeight={1.2}
            fontSize={{ base: "14px", md: "20px" }}
          >
            Our Vision Statement
          </Text>
        </Center>
        <Text
          my={5}
          color={"black"}
          //fontWeight={700}
          //fontFamily={"Poppins"}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
        >
          A world where everyone lives healthy, happy and quality life, with no
          one left out.
        </Text>
        {/* <Center>
        <Text
          my={0}
          color={"black"}
          fontWeight={400}
          lineHeight={1.8}
          textAlign={"center"}
          fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
        ></Text>
      </Center> */}
      </Box>
    </div>
  );
};

export default MaxVisionCard;
