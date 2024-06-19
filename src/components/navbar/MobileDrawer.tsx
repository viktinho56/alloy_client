import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavLinks,
  accentColor,
  primaryColor,
  primaryColorDark,
  primaryColorLight,
  yellowColor,
} from "../../constants";
//import NavbarDropdown from "../common/NavbarDropdown";

export function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  return (
    <>
      <Button
        size={"xs"}
        ref={btnRef}
        color={primaryColorDark}
        bg={accentColor}
        onClick={onOpen}
      >
        MENU
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack
              alignItems={"flex-start"}
              gap={10}
              fontSize={"14px"}
              fontWeight={"semibold"}
            >
              {NavLinks &&
                NavLinks.length > 0 &&
                NavLinks.map((link, index) => (
                  <Text
                    _hover={{ color: yellowColor }}
                    key={index}
                    as={NavLink}
                    to={link.url}
                  >
                    {link.name}
                  </Text>
                ))}
            </VStack>
            <VStack mt={5} gap={5} alignItems={"flex-start"}>
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
