"use client";

import {
  // Heading,
  // Avatar,
  Box,
  Flex,
  //Center,
  //Image,
  // Flex,
  Text,
  // Stack,
  //Button,
  useColorModeValue,
  // Badge,
} from "@chakra-ui/react";

//import { EditUserModal } from "./EditUserModal";
import { ServerUrl } from "../../../constants";
import { DeleteUserModal } from "./DeleteModal";
import { ppt } from "../../../assets";

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
        {data.mediaType == ".pptx" && (
          <Box py={2} as={Flex} justifyContent={"center"} alignItems={"center"}>
            <img width={150} src={ppt} />
          </Box>
        )}
        {data.mediaType == ".mp4" && (
          <video preload="true" controls width="100%">
            <source src={ServerUrl + data.mediaUrl} type="video/mp4" />
          </video>
        )}
        <Text px={2} fontSize={13}>
          {data.eventTitle}
        </Text>
        <Box p={2}>
          <DeleteUserModal data={data} />
        </Box>
      </Box>
    </>
  );
};
