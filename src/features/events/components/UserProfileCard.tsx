"use client";

import {
  Heading,
  //Avatar,
  Box,
  //Center,
  //Image,
  //Flex,
  Text,
  Stack,
  //Button,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";

import { EditUserModal } from "./EditUserModal";
//import { ServerUrl, yellowColor } from "../../../constants";
import { DeleteUserModal } from "./DeleteModal";

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
      {/* <Flex justify={"center"} mt={-10}>
        <Avatar
          bg={yellowColor}
          color={"black"}
          border={"7px solid #EDF2F7"}
          size={"lg"}
          name={data.firstName + data.lastName}
          src={ServerUrl + data.avatarUrl}
        />
      </Flex> */}

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading mb={5} fontSize={"sm"} fontWeight={600}>
            {data.eventName}
          </Heading>
          <Box h={100}>
            <Text
              //title={data.content}
              noOfLines={5}
              //textAlign={"center"}
              w={"80%"}
              fontSize={"xs"}
              color={"black.500"}
            >
              {data.content}
            </Text>
          </Box>
          <Box mt={2}>
            {data.status == 1 && (
              <Badge colorScheme="green">{data.eventDate}</Badge>
            )}
          </Box>
          {/* <Text fontSize={"xs"} color={"gray.400"}>
            {data.email}
          </Text> */}
        </Stack>

        <Stack direction={"row"} justify={"center"} spacing={2}>
          <EditUserModal data={data} />
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
