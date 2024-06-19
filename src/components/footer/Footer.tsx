"use client";

import { ReactNode } from "react";

import {
  Box,
  Center,
  // Container,
  Flex,
  HStack,
  Heading,
  Icon,
  // Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { logoDark } from "../../assets";
import { NavLink } from "react-router-dom";
import {
  AppName,
  ContactLinks,
  FooterLinks,
  SocialLinks,
  accentColor,
  primaryColor,
  primaryColorDark,
  yellowColor,
} from "../../constants";

//import Privacy from "./Privacy";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      fontSize={"14px"}
      px={{ base: 5, md: 40 }}
      py={10}
      bg={useColorModeValue(primaryColorDark, "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <SimpleGrid
        templateColumns={{ sm: "1fr 1fr", md: "1.5fr 1fr 1fr 1fr" }}
        spacing={7}
      >
        <Stack spacing={6} color={"#fff"}>
          <Box>
            <Image src={logoDark} w={150} />
            <Heading my={5} fontSize={20} fontWeight={"medium"}>
              {AppName}
            </Heading>
          </Box>
        </Stack>
        <Stack align={"flex-start"} color={"#fff"}>
          <ListHeader>Quick Links</ListHeader>
          <VStack
            alignItems={"flex-start"}
            gap={2}
            fontSize={"13px"}
            fontWeight={"medium"}
          >
            {FooterLinks &&
              FooterLinks.length > 0 &&
              FooterLinks.map((link, index) => (
                <Text
                  opacity={0.8}
                  _hover={{ color: yellowColor }}
                  key={index}
                  as={NavLink}
                  to={link.url}
                >
                  {link.name}
                </Text>
              ))}
          </VStack>
        </Stack>

        <Stack align={"flex-start"} color={"#fff"}>
          <ListHeader>Legal</ListHeader>

          <Box
            opacity={0.8}
            as="a"
            _hover={{ color: yellowColor }}
            href={"/terms"}
          >
            Terms of Service
          </Box>

          <Box
            opacity={0.8}
            as="a"
            _hover={{ color: yellowColor }}
            href={"/privacy"}
          >
            Privacy Policy
          </Box>
          {/* <Box opacity={0.6}>SCUML: SC311403569</Box> */}
          <Box opacity={0.8}>Reg No: TN25884669</Box>
        </Stack>

        <Stack align={"flex-start"} color={"#fff"}>
          <ListHeader>Our Contact</ListHeader>

          <VStack gap={2} alignItems={"flex-start"}>
            {ContactLinks &&
              ContactLinks.length > 0 &&
              ContactLinks.map((link, index) => (
                <Flex gap={1} alignItems={"center"}>
                  <Flex
                    w={30}
                    h={30}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={15}
                    // bg={link.background}
                    opacity={1}
                    _hover={{ opacity: 0.8 }}
                    key={index}
                  >
                    <Icon color={"white"} as={link.icon} />
                  </Flex>
                  <Text
                    opacity={0.6}
                    fontWeight={"medium"}
                    fontSize={"13px"}
                    color={"white"}
                    // noOfLines={1}
                  >
                    {link.name}
                  </Text>
                </Flex>
              ))}
          </VStack>
        </Stack>
      </SimpleGrid>
      <Box my={4} h={0.5} bg={accentColor}></Box>
      <Center mb={2} color={"white"}>
        <ListHeader>Our Social Links</ListHeader>
      </Center>
      <Center>
        <HStack gap={5}>
          {SocialLinks &&
            SocialLinks.length > 0 &&
            SocialLinks.map((link, index) => (
              <Flex
                w={35}
                h={35}
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={17.5}
                bg={primaryColor}
                _hover={{ opacity: 0.8 }}
                key={index}
                as={NavLink}
                to={link.url}
              >
                <Icon boxSize={5} color={"white"} as={link.icon} />
              </Flex>
            ))}
        </HStack>
      </Center>
      <Center mt={4} color={"white"}>
        <Text>Copyright &copy; {AppName} All rights reserved</Text>
      </Center>
      {/* <Privacy /> */}
    </Box>
  );
}
