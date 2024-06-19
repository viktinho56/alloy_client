"use client";

import {
  Heading,
  // Avatar,
  Box,
  //Center,
  Image,
  Flex,
  Text,
  Stack,
  //Button,
  useColorModeValue,
  Button,
  //Badge,
} from "@chakra-ui/react";
import parse from "html-react-parser";
//import { EditUserModal } from "./EditUserModal";
import { ServerUrl } from "../../../constants";
import { DeleteUserModal } from "./DeleteModal";
import { NavLink } from "react-router-dom";

export const UserProfileCard = ({ data }: any) => {
  return (
    <Box
      //maxW={"270px"}
      mt={12}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      //   boxShadow={"2xl"}
      rounded={"md"}
    >
      <Flex
        h={150}
        py={2}
        borderRadius={12}
        bg={"white"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={0}
      >
        <Image w={"120px"} src={ServerUrl + data.imageCover} />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"sm"} fontWeight={600}>
            {data.title}
          </Heading>
          <Box h={120}>
            <Text textAlign={"center"} noOfLines={5} fontSize={14} mt={2}>
              {data.content &&
                data.content.length > 0 &&
                parse(data.content ? data.content : "")}
            </Text>
          </Box>
          {/* <Box mt={2}>
            {data.status == 1 && <Badge colorScheme="green">Active</Badge>}
            {data.status == 0 && <Badge colorScheme="red">In Active</Badge>}
          </Box> */}
          {/* <Text fontSize={"xs"} color={"gray.400"}>
            {data.email}
          </Text> */}
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={2}>
          <Button
            as={NavLink}
            to={"/admin/case-study/edit/" + data.id}
            fontSize={"14px"}
            fontWeight={"medium"}
            size={"sm"}
            w={"full"}
            mt={2}
            bg={useColorModeValue("#EDF2F7", "gray.900")}
            color={"#000"}
          >
            Edit
          </Button>
          {/* <EditUserModal data={data} /> */}
          <DeleteUserModal data={data} />
        </Stack>

        {/* <Button
          w={"full"}
          mt={3}
          bg={useColorModeValue("red.500", "gray.900")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Remove
        </Button> */}
      </Box>
    </Box>
  );
};
