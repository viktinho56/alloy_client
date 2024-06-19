import {
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Stack,
  Center,
} from "@chakra-ui/react";
import { lightBg } from "../../../assets";
import { accentColor, whiteColor } from "../../../constants";
import NewsLetterForm from "./NewsLetterForm";

const NewsLetterCard = () => {
  return (
    <Flex
      my={10}
      w={"full"}
      h={"60vh"}
      backgroundImage={lightBg}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        //bgGradient={`linear(to-r, blackAlpha.900, blackAlpha.800)`}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <section
            className="wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay=".7s"
          >
            <Text
              color={accentColor}
              fontWeight={600}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "16", md: "18" })}
            >
              Want to get First Class information
            </Text>
          </section>
          <section
            className="wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay=".5s"
          >
            <Text
              //bgClip="text"
              //bgGradient={`linear(to-r, ${accentColor}, ${primaryColor})`}
              color={whiteColor}
              fontWeight={700}
              lineHeight={1.2}
              textAlign={"center"}
              fontSize={useBreakpointValue({ base: "xl", md: "4xl" })}
            >
              Kindly Subscribe to our newsletter
            </Text>
          </section>

          <Stack direction={"row"}>
            <section
              className="wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay=".8s"
            >
              <Center>
                <NewsLetterForm />
              </Center>
            </section>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default NewsLetterCard;
