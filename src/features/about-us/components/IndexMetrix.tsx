import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  accentColor,
  primaryColor,
  primaryColorDark,
  primaryColorLight,
} from "../../../constants";

const IndexMetrix = () => {
  return (
    <Box px={{ base: 1, md: 40 }} py={{ base: 1, md: 10 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }}>
        <Flex
          borderRadius={125}
          bg={primaryColorLight}
          justifyContent={"center"}
          alignItems={"center"}
          w={250}
          h={250}
        >
          <Text
            color={accentColor}
            fontWeight={600}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "16", md: "48" })}
          >
            45
          </Text>
        </Flex>
        <Flex
          borderRadius={125}
          bg={primaryColor}
          justifyContent={"center"}
          alignItems={"center"}
          w={250}
          h={250}
        ></Flex>
        <Flex
          borderRadius={125}
          bg={primaryColorDark}
          justifyContent={"center"}
          alignItems={"center"}
          w={250}
          h={250}
        ></Flex>
      </SimpleGrid>
    </Box>
  );
};

export default IndexMetrix;
