import { Box, Flex, HStack, Image, Show, Text } from "@chakra-ui/react";
import { logoLight } from "../../assets";
import { NavLink } from "react-router-dom";
import {
  // ContactLinks,
  NavLinks,
  accentColor,
  lightColor,
  primaryColor,
  primaryColorDark,
  primaryColorLight,
  // SocialLinks,
  // darkColor,
  yellowColor,
} from "../../constants";

import { MobileDrawer } from "./MobileDrawer";
import NavbarMenu from "../common/NavbarMenu";
import useAuth from "../../hooks/useAuth";
//import { SearchBarComponent } from "../common/SearchBarComponent";

//import useServices from "../../hooks/useServices";

const Navbar = () => {
  let link = window.location.pathname;
  const linkUrl = link.replace(/^(.*\/)/, "$1");
  let { GetCurrentUser } = useAuth();
  // let { data: Services } = useServices();
  return (
    <>
      <Show below="md">
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          bg={"white"}
          px={{ base: 5, md: 20 }}
          py={{ base: 5, md: 1 }}
        >
          <Image src={logoLight} w={"180px"} />
          <MobileDrawer />
        </Flex>
      </Show>

      <Show above="md">
        <Box
          position={"fixed"}
          zIndex={1000}
          w={"full"}
          bg={"transparent"}
          px={{ base: 5, md: 20 }}
          py={{ base: 5, md: 4 }}
        >
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box as={NavLink} to={"/"}>
              <Image src={logoLight} w={"150px"} />
            </Box>
            <HStack gap={10} fontSize={"14px"} fontWeight={"medium"}>
              {NavLinks &&
                NavLinks.length > 0 &&
                NavLinks.map((link, index) =>
                  linkUrl == link.url ? (
                    link.isMenu ? (
                      <NavbarMenu name={link.name} Submenu={link.Submenu} />
                    ) : (
                      <Text
                        fontSize={14}
                        color={yellowColor}
                        _hover={{ color: yellowColor }}
                        key={index}
                        as={NavLink}
                        to={link.url}
                      >
                        {link.name}
                      </Text>
                    )
                  ) : link.isMenu ? (
                    <NavbarMenu name={link.name} Submenu={link.Submenu} />
                  ) : (
                    <Text
                      fontSize={14}
                      color={lightColor}
                      _hover={{ color: yellowColor }}
                      key={index}
                      as={NavLink}
                      to={link.url}
                    >
                      {link.name}
                    </Text>
                  )
                )}
            </HStack>
            {/* <SearchBarComponent /> */}
            <Flex gap={2}>
              {!GetCurrentUser()?.email && (
                <HStack>
                  <Box
                    to={"/auth/login"}
                    as={NavLink}
                    py={2}
                    px={5}
                    color={primaryColorLight}
                    fontWeight="medium"
                    fontSize={"14px"}
                    borderRadius="full"
                    bg={primaryColorDark}
                    //bgGradient="linear(to-r, red.500, yellow.500)"
                    //bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: `linear(to-r, ${primaryColorLight}, ${primaryColor})`,
                    }}
                  >
                    Login
                  </Box>
                  <Box
                    to={"/auth/register"}
                    as={NavLink}
                    py={2}
                    px={5}
                    color={primaryColorDark}
                    fontWeight="medium"
                    fontSize={"14px"}
                    borderRadius="full"
                    bg={accentColor}
                    //bgGradient="linear(to-r, red.500, yellow.500)"
                    //bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: `linear(to-r, ${primaryColorLight}, ${primaryColor})`,
                    }}
                  >
                    Register
                  </Box>
                </HStack>
              )}
              {GetCurrentUser()?.email && (
                <Box
                  to={"/admin/dashboard"}
                  as={NavLink}
                  py={2}
                  px={5}
                  color={primaryColorLight}
                  fontWeight="medium"
                  fontSize={"14px"}
                  borderRadius="full"
                  bg={primaryColorDark}
                  //bgGradient="linear(to-r, red.500, yellow.500)"
                  //bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: `linear(to-r, ${primaryColorLight}, ${primaryColor})`,
                  }}
                >
                  Dashboard
                </Box>
              )}
            </Flex>
          </Flex>
        </Box>
      </Show>
    </>
  );
};

export default Navbar;
