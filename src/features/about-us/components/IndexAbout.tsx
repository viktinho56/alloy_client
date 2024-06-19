import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
//import { heroBg } from "../../../assets";
import { primaryColor, whiteColor } from "../../../constants";

const IndexAbout = () => {
  return (
    <Box px={{ base: 5, md: 40 }} pt={{ base: 5, md: 20 }}>
      <Heading fontSize={20}>ABOUT US</Heading>
      <Text
        bgGradient={`linear(to-r, ${primaryColor}, ${whiteColor})`}
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
      >
        WHO WE ARE.
      </Text>
      <SimpleGrid
        mb={{ base: 1, md: 20 }}
        gap={10}
        columns={{ base: 1, md: 2 }}
      >
        <section
          className="wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay=".5s"
        >
          <Flex
            w={"full"}
            h={{ base: 200, md: 300 }}
            backgroundImage={
              "https://images.pexels.com/photos/4276613/pexels-photo-4276613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            backgroundSize={"cover"}
            borderRadius={12}
            overflow={"hidden"}
            backgroundPosition={"center center"}
          >
            <VStack
              w={"full"}
              justify={"center"}
              px={useBreakpointValue({ base: 4, md: 8 })}
              bgGradient={`linear(to-r, blackAlpha.600, blackAlpha.600)`}
            ></VStack>
          </Flex>
        </section>
        <section
          className="wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay=".5s"
        >
          <Text lineHeight={2}>
            PROPERY & FACILITIES MANAGEMENT <br />
            Ongoing management and maintenance of properties is a key factor in
            value realization, value management and value enhancement. Our work
            in rental and property management involves rental billings and
            collections, financial reporting, property inspections to provide
            recommendations on maintenance and improvement programs, attendance
            to repair and maintenance works and lease administration including
            lease renewal and review of lease terms.
          </Text>
        </section>
      </SimpleGrid>
    </Box>
  );
};

export default IndexAbout;
