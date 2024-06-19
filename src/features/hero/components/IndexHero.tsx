"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
//import { heroBg } from "../../../assets";
import {
  AppName,
  accentColor,
  primaryColor,
  primaryColorDark,
  primaryColorLight,
  whiteColor,
} from "../../../constants";
import { NavLink } from "react-router-dom";

export default function IndexHero() {
  return (
    <Flex
      w={"full"}
      h={"80vh"}
      backgroundImage={
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={`linear(to-r, blackAlpha.600, blackAlpha.600)`}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <section
            className="wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay=".5s"
          >
            <Text
              bgClip="text"
              bgGradient={`linear(to-r, ${accentColor}, ${whiteColor})`}
              fontWeight={800}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "3xl" })}
            >
              WELCOME TO {AppName}
            </Text>
          </section>
          <section
            className="wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay=".7s"
          >
            <Text
              color={whiteColor}
              fontWeight={400}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "16", md: "16" })}
            >
              32 YEARS OF EXPERIENCE SINCE BEING FOUNDED IN 1992
            </Text>
          </section>

          <Stack direction={"row"}>
            <section
              className="wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay=".8s"
            >
              <Button
                as={NavLink}
                to={"/about-us"}
                px={7}
                size={"md"}
                bg={primaryColor}
                rounded={"full"}
                fontWeight={500}
                fontSize={16}
                color={primaryColorDark}
                _hover={{
                  bgGradient: `linear(to-r, ${primaryColorLight}, ${primaryColor})`,
                }}
              >
                Read More
              </Button>
            </section>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
