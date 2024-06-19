import {
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Stack,
  Button,
} from "@chakra-ui/react";
import { darkBg } from "../../../assets";
import {
  accentColor,
  primaryColor,
  whiteColor,
  primaryColorDark,
  primaryColorLight,
} from "../../../constants";
import { NavLink } from "react-router-dom";

const DonationCard = () => {
  return (
    <Flex
      my={10}
      w={"full"}
      h={"60vh"}
      backgroundImage={darkBg}
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
              Your little help needed
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
              Your donation can change lives of people in Alberta Canada
            </Text>
          </section>

          <Stack direction={"row"}>
            <section
              className="wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay=".5s"
            >
              <Button
                as={NavLink}
                to={"/donation"}
                px={7}
                size={"md"}
                bg={accentColor}
                rounded={"full"}
                fontWeight={500}
                fontSize={16}
                color={primaryColorDark}
                _hover={{
                  bgGradient: `linear(to-r, ${primaryColorLight}, ${primaryColor})`,
                }}
              >
                Donate Now
              </Button>
            </section>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default DonationCard;
