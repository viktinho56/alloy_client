import {
  Box,
  useColorModeValue,
  Text,
  Image,
  Flex,
  BoxProps,
  CloseButton,
  Button,
  Avatar,
} from "@chakra-ui/react";

import { NavItem } from "./../common/NavItem";
import { logoLight } from "../../assets";

import {
  accentColor,
  lightColor,
  primaryColor,
  redColor,
} from "../../constants";
import {
  //DashboardIcon,
  //ProductsIcon,
  //UsersIcon,
  //MessageIcon,
  // NotificationIcon,
  //GearIcon,
  //CalenderIcon,
  //  GroupIcon,
 //CaseIcon,
  //ServiceIcon,
  //AboutIcon,
  //TestimonialIcon,
  //GearIcon,
  //CalenderIcon,
  DashboardIcon,
} from "../icons";
import useAuth from "../../hooks/useAuth";
import { Confirm } from "notiflix";
import StaffSubMenu from "../common/StaffSubMenu";
// import Submenu from "../common/Submenu";
// import TermsSubmenu from "../common/TermsSubmenu";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}
interface LinkItemProps {
  name: string;
  icon: any;
  url: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Menu", icon: DashboardIcon, url: "/menu" },
  // {
  //   name: "Order History",
  //   icon: ProductsIcon,
  //   url: "/admin/order-summary",
  // },
  // {
  //   name: "Order Summary",
  //   icon: ProductsIcon,
  //   url: "/admin/order-summary",
  // },
  // {
  //   name: "Track Order ",
  //   icon: CaseIcon,
  //   url: "/admin/track-order",
  // },

  // { name: "Order Management", icon: ProductsIcon, url: "/order-management" },
  // {
  //   name: "About Us",
  //   icon: ProductsIcon,
  //   url: "/about-us",
  // },
  // {
  //   name: "Contact Us",
  //   icon: ProductsIcon,
  //   url: "/contact-us",
  // },
  // { name: "Services", icon: ServiceIcon, url: "/admin/services" },

  // { name: "Gallery", icon: ProductsIcon, url: "/admin/gallery" },
  // { name: "Case Study", icon: CaseIcon, url: "/admin/case-study" },

  //{ name: "About", icon: AboutIcon, url: "/admin/#" },
  // { name: "Testimonials", icon: TestimonialIcon, url: "/admin/testimonial" },
  // {
  //   name: "Notifications",
  //   icon: NotificationIcon,
  //   url: "/admin/notifications",
  // },

  // {
];

export const AdminSidebar = ({ onClose, ...rest }: SidebarProps) => {
  let { AuthLogout } = useAuth();
  function handleConfirm(): void {
    Confirm.show(
      "Confirm",
      "Are you sure you want to log out?",
      "Yes",
      "No",
      () => {
        AuthLogout();
      },
      () => {},
      {}
    );
  }

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue(primaryColor, "gray.900")}
      borderRight="0px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        p={10}
        alignItems="center"
        mx="5"
        gap={3}
        mt={10}

        //justifyContent="space-between"
      >
        <Avatar name="Admin User" size={"lg"} />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box h={0} bg={accentColor}></Box>
      <Text
        textTransform={"uppercase"}
        mt={3}
        mx={5}
        fontSize={11}
        fontWeight={"bold"}
        color={lightColor}
        opacity={0.5}
      >
        Basic
      </Text>

      {LinkItems.map((link) => (
        <NavItem key={link.name} url={link.url} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
<StaffSubMenu/>
      {/* <TermsSubmenu icon={GearIcon} /> */}
      <Box
        borderRadius={10}
        position={"absolute"}
        mx={6}
        p={5}
        justifyContent={"center"}
        alignItems={"center"}
        bottom={{ base: 10, md: 50, lg: 50 }}
        //bg={"#FFEEC1"}
        width={190}
      >
        <Image w={"120px"} src={logoLight} />
        {/* <Image w={"90px"} src={logo} /> */}
        <Button
          color={"white"}
          onClick={() => handleConfirm()}
          _hover={{ bg: "#fff" }}
          bg={redColor}
          mt={2}
          // size={{ base: "md", lg: "xs" }}
          w={"full"}
          borderRadius={20}
        >
          {" "}
          Log Out
        </Button>
      </Box>
    </Box>
  );
};
