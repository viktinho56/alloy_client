import {
  Box,
  Text,
  Flex,
  VStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { accentColor, primaryColorDark, whiteColor } from "../../../constants";
import { heroBg } from "../../../assets";

const IndexEventCard = () => {
  return (
    <Box>
      <Box
        borderRadius={12}
        m={5}
        overflow={"hidden"}
        height={200}
        bg={whiteColor}
        boxShadow={"md"}
      >
        <Flex
          w={"full"}
          h={"80vh"}
          backgroundImage={heroBg}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
        >
          <VStack
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={`linear(to-r, blackAlpha.300, blackAlpha.300)`}
          ></VStack>
        </Flex>
      </Box>
      <Box mx={5}>
        <Text my={3} fontWeight={600}>
          Test User
        </Text>
        <Flex mb={10} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={14} color={primaryColorDark}>
            25th February 2023
          </Text>
          <Heading fontSize={14} color={accentColor}>
            Read More
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};

export default IndexEventCard;
