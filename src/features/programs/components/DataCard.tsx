import { Text, useBreakpointValue, Center, Box } from "@chakra-ui/react";

import { yellowColor } from "../../../constants";
import parse from "html-react-parser";
const DataCard = ({ data, title }: any) => {
  return (
    <Box
      //border={"solid white 2px"}
      borderBottomStartRadius={50}
      borderTopEndRadius={50}
      // bg={"white"}
      // boxShadow={"2xl"}
      // height={"400px"}
      p={10}
    >
      <Center>
        <Box
          h={50}
          w={230}
          px={5}
          py={5}
          borderBottomStartRadius={50}
          borderTopEndRadius={50}
          bg={yellowColor}
        >
          <Text
            textAlign={"center"}
            color={"black"}
            fontWeight={700}
            // fontFamily={"Poppins"}
            lineHeight={1.2}
            fontSize={{ base: "14px", md: "14px" }}
          >
            Our {title} Statement
          </Text>
        </Box>
      </Center>
      <Text
        my={5}
        color={"black"}
        fontWeight={700}
        fontFamily={"Poppins"}
        lineHeight={1.2}
        fontSize={useBreakpointValue({ base: "14px", md: "20px" })}
      >
        {data.name}
      </Text>
      <Center>
        <Text
          my={0}
          color={"black"}
          fontWeight={400}
          lineHeight={1.8}
          textAlign={"center"}
          fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
        >
          {data.content &&
            data.content.length > 0 &&
            parse(data.content ? data.content : "")}
        </Text>
      </Center>
    </Box>
  );
};

export default DataCard;
