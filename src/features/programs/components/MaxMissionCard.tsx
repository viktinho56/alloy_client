import { Text, Center, Box } from "@chakra-ui/react";

//import parse from "html-react-parser";
const MaxMissionCard = () => {
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
            Our Mission Statement
          </Text>
        </Center>
        <ol>
          <li>
            <Text
              color={"black"}
              //fontWeight={700}
              //fontFamily={"Poppins"}
              lineHeight={1.2}
              fontSize={{ base: "14px", md: "16px" }}
              my={5}
            >
              Deliver right information, knowledge, capacity and facilitate
              right action towards living a healthy, happy, and quality life.
            </Text>
          </li>
          <li>
            <Text
              color={"black"}
              //fontWeight={700}
              // fontFamily={"Poppins"}
              lineHeight={1.2}
              fontSize={{ base: "14px", md: "16px" }}
            >
              Bringing hope and relief to people facing challenges, by providing
              and facilitating solutions, changing situations to the bright
              side.
            </Text>
          </li>
        </ol>
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
