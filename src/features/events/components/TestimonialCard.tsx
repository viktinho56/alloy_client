import { Box, Text, Center, useBreakpointValue, Flex } from "@chakra-ui/react";

import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
const TestimonialCard = ({ data }: any) => {
  return (
    <Box
      border={"solid white 2px"}
      borderBottomStartRadius={50}
      borderTopEndRadius={50}
      // bg={"white"}
      //bg={"#04001D"}
      // bg={"#0349AC"}
      minH={20}
      color={"white"}
      p={10}
    >
      <Flex my={2} justifyContent={"flex-start"}>
        <FaQuoteLeft />
      </Flex>

      <Center>
        <Text
          h={150}
          my={0}
          color={"white"}
          fontWeight={400}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "14px", md: "16px" })}
        >
          {data.content}
        </Text>
      </Center>
      <Center>
        <Text
          my={3}
          color={"white"}
          fontWeight={800}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "14px", md: "20px" })}
        >
          {data.firstName} {data.lastName}
        </Text>
      </Center>
      <Flex my={2} justifyContent={"flex-end"}>
        <FaQuoteRight />
      </Flex>
    </Box>
  );
};

export default TestimonialCard;
