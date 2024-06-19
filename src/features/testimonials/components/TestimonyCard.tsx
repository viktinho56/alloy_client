import { Box, Center, Text } from "@chakra-ui/react";

import { whiteColor } from "../../../constants";

const TestimonyCard = ({ data }: any) => {
  return (
    <Box
      borderRadius={12}
      p={7}
      m={5}
      height={200}
      bg={whiteColor}
      boxShadow={"md"}
    >
      <Center>
        <Text mt={5} fontWeight={600} textAlign={"center"}>
          {data.firstName + " " + data.lastName}
        </Text>
      </Center>
      <Center>
        <Text textAlign={"center"} my={2} noOfLines={4}>
          {data.content}
        </Text>
      </Center>
    </Box>
  );
};

export default TestimonyCard;
