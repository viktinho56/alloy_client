"use client";

import {
  // Heading,
  // Avatar,
  Box,
  //Center,
  //Image,
  // Flex,
  // Text,
  // Stack,
  //Button,
  useColorModeValue,
  // Badge,
} from "@chakra-ui/react";

//import { EditUserModal } from "./EditUserModal";
import { ServerUrl } from "../../../constants";
import { DeleteUserModal } from "./DeleteModal";

export const UserProfileCard = ({ data }: any) => {
  return (
    <>
      <Box
        //maxW={"270px"}
        mt={12}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        //   boxShadow={"2xl"}
        rounded={"md"}
      >
        <Box
          h={300}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          backgroundImage={ServerUrl + data.imageUrl}
        ></Box>

        <DeleteUserModal data={data} />
      </Box>
    </>
  );
};
