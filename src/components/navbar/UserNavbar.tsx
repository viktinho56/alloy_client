import {
    Flex,
    useColorModeValue,
    IconButton,
    HStack,
    // Menu,
    // MenuButton,
    // Avatar,
    // VStack,
    // MenuList,
    // MenuItem,
    // MenuDivider,
    Box,
    Text,
    Image,
    FlexProps,
    //MenuDivider,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import { logo } from "../../assets";

//import { ServerUrl } from "../../constants";
//import { NotificationDrawer } from "../common/NotificationDrawer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
//import useAuth from "../../hooks/useAuth";
//import { Confirm } from "notiflix";
import { useIdleTimer } from "react-idle-timer/legacy";
import { AdminSearchBarComponent } from "../common/AdminSearchBarComponent";
import { FaShoppingCart } from "react-icons/fa";
import useCartItems from "../../hooks/useCartItems";
import { NavLink } from "react-router-dom";
//import AccountMenu from "../menu/AccountMenu";
//import ServiceMenu from "../menu/ServiceMenu";
interface MobileProps extends FlexProps {
    onOpen: () => void;
}

export const UserNavbar = ({ onOpen, ...rest }: MobileProps) => {

    //let { AuthLogout } = useAuth();
    //let link = window.location.pathname;
    //const linkUrl = link.replace(/^(.*\/)/, "$1");
    //const splitted = linkUrl.split("/");
    let { currentUser } = useContext(AuthContext);
  let { data } = useCartItems(currentUser?.id??0,0);
    // function handleConfirm(): void {
    //   Confirm.show(
    //     "Confirm",
    //     "Are you sure you want to log out?",
    //     "Yes",
    //     "No",
    //     () => {
    //       AuthLogout();
    //     },
    //     () => {},
    //     {}
    //   );
    // }
    const [state, setState] = useState<string>("Active");
    const [count, setCount] = useState<number>(0);
    const [remaining, setRemaining] = useState<number>(0);

    const onIdle = () => {
        setState("Idle");
        //AuthLogout();
    };

    const onActive = () => {
        setState("Active");
    };

    const onAction = () => {
        setCount(count + 1);
    };
    const FIVE_MINS = 5 * 2 * 60 * 1000;
    const { getRemainingTime } = useIdleTimer({
        onIdle,
        onActive,
        onAction,
        timeout: FIVE_MINS,
        throttle: 500,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(Math.ceil(getRemainingTime() / 1000));
        }, 500);

        return () => {
            clearInterval(interval);
        };
    });
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 8 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={{ base: "space-between", md: "space-between" }}
            {...rest}
        >
            <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text fontWeight={"bold"} display={{ base: "none", md: "flex" }}>
                Patient Dashboard
                <Box display={"none"}>
                    <h1>React Idle Timer</h1>
                    <h2>useIdleTimer</h2>
                    <br />
                    <p>Current State: {state}</p>
                    <p>Action Events: {count}</p>
                    <p>{remaining} seconds remaining</p>
                </Box>
            </Text>
            <Text fontWeight={"bold"}>
                Welcome Back {currentUser?.firstName} {currentUser?.lastName}
            </Text>

            <Flex
                gap={3}
                display={{ base: "flex", md: "none" }}
                justifyContent={"center"}
            >
                <Image height={"30px"} src={logo} />
            </Flex>
            <AdminSearchBarComponent />
            <HStack spacing={{ base: "0", md: "6" }}>
                <Flex gap={5} alignItems={"center"}>
                    {/* <NotificationDrawer /> */}
                    {/* <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={ServerUrl + currentUser?.avatarUrl} />

                <Box display={{ base: "none", md: "none" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text m={2} fontSize="sm">
                  {currentUser?.firstName} {currentUser?.lastName}
                </Text>
                <Text ml={2} fontSize="xs" color="yellow.500">
                  {currentUser?.userRank}
                </Text>
              </VStack>
              <MenuDivider />
              <MenuItem>Profile</MenuItem>

              <MenuDivider />
              <MenuItem onClick={() => handleConfirm()}>Sign out</MenuItem>
            </MenuList>
          </Menu> */}
                    {/* <AccountMenu />
          <ServiceMenu /> */}
           <Box as={NavLink} to={"/cart"}>
              <FaShoppingCart size={"25px"} />
              <Flex justify={"center"} w={7} bg={"green"} borderRadius={50} p={"2px"} border={"white"} position={"absolute"} marginTop={-10} marginRight={2}>
                <Text fontWeight={"bold"} color={"white"} >{data.length}</Text>
              </Flex>
           </Box>
                </Flex>
            </HStack>
        </Flex>
    );
};
