import { Text, useBreakpointValue, Center, Box } from "@chakra-ui/react";

import { redColor } from "../../../constants";

const EventsCard = ({ data }: any) => {
  return (
    <Box
      // border={"solid white 2px"}
      borderBottomStartRadius={50}
      borderTopEndRadius={50}
      bg={"white"}
      boxShadow={"xl"}
      height={"400px"}
      p={10}
    >
      <Box
        h={50}
        w={130}
        px={5}
        py={5}
        borderBottomStartRadius={50}
        borderTopEndRadius={50}
        bg={redColor}
      >
        <Text
          color={"white"}
          fontWeight={700}
          // fontFamily={"Poppins"}
          lineHeight={1.2}
          fontSize={{ base: "14px", md: "16px" }}
        >
          {data.eventDate}
        </Text>
      </Box>
      <Text
        my={5}
        color={"black"}
        fontWeight={700}
        fontFamily={"Poppins"}
        lineHeight={1.2}
        fontSize={useBreakpointValue({ base: "14px", md: "20px" })}
      >
        {data.eventName}
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
          {data.content}
        </Text>
      </Center>
    </Box>
  );
};

export default EventsCard;
