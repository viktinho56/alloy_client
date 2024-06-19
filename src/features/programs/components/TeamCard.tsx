import { Box, Text, Image } from "@chakra-ui/react";
// import React from "react";
import { ServerUrl, yellowColor } from "../../../constants";

const TeamCard = ({ data }: any) => {
  return (
    <Box>
      <Box borderRadius={12} overflow={"hidden"}>
        <Image src={ServerUrl + data.avatarUrl} />
      </Box>
      <Box mt={3}>
        <Text
          textAlign={"center"}
          color={"white"}
          fontWeight={"semibold"}
          fontSize={"20px"}
        >
          {data.name}
        </Text>
        <Text textAlign={"center"} color={yellowColor} fontSize={"15px"}>
          {data.role}
        </Text>
      </Box>
    </Box>
  );
};

export default TeamCard;
