import { Text, Box } from "@chakra-ui/react";
import { accentColor, primaryColor } from "../../../constants";

import parse from "html-react-parser";
import useMission from "../hooks/useMission";
const MaxMissionCard = () => {
  let { data } = useMission();
  return (
    <div data-aos="fade-right" data-aos-duration="2000">
      <Box
        mt={{ base: 5, md: 0 }}
        borderBottomStartRadius={50}
        borderTopEndRadius={50}
        //p={10}
      >
        <Text
          textAlign={"justify"}
          bgGradient={`linear(to-r, ${primaryColor}, ${accentColor})`}
          bgClip="text"
          fontWeight={700}
          // fontFamily={"Poppins"}
          lineHeight={1.2}
          fontSize={{ base: "18px", md: "25px" }}
        >
          Our Mission Statement
        </Text>
        <Text lineHeight={2} textAlign={"justify"}>
          {data &&
            data.length > 0 &&
            parse(data[0].content ? data[0].content : "")}
        </Text>
        {/* <Text
        my={5}
        color={"black"}
        fontWeight={700}
        fontFamily={"Poppins"}
        lineHeight={1.2}
        fontSize={useBreakpointValue({ base: "14px", md: "20px" })}
      >
        A world where everyone lives healthy, happy and quality life, with no
        one left out.
      </Text> */}
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

export default MaxMissionCard;
