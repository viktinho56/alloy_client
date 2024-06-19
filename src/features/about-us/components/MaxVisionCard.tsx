import { Text, Box } from "@chakra-ui/react";
import { primaryColor, accentColor } from "../../../constants";
import useVision from "../hooks/useVision";
//import { yellowColor } from "../../../constants";
import parse from "html-react-parser";
const MaxVisionCard = () => {
  let { data } = useVision();
  return (
    <div data-aos="fade-left" data-aos-duration="2000">
      <Box
        mt={{ base: 10, md: 0 }}
        borderBottomStartRadius={50}
        borderTopEndRadius={50}
        //p={10}
      >
        <Text
          textAlign={"left"}
          bgGradient={`linear(to-r, ${primaryColor}, ${accentColor})`}
          bgClip="text"
          fontWeight={700}
          // fontFamily={"Poppins"}
          lineHeight={1.2}
          fontSize={{ base: "18px", md: "25px" }}
        >
          Our Vision Statement
        </Text>

        <Text lineHeight={2} textAlign={"justify"}>
          {data &&
            data.length > 0 &&
            parse(data[0].content ? data[0].content : "")}
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
