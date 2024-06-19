import { Box, Text, Image } from "@chakra-ui/react";
// import React from "react";
//import { ServerUrl, yellowColor } from "../../../constants";

const TeamCard = ({ data }: any) => {
  return (
    <Box>
      <Box borderRadius={12} overflow={"hidden"}>
        <Image src={data.Url} />
      </Box>
      <Box mt={3}>
        <Text
          textAlign={"center"}
          bgClip="text"
          bgGradient="linear(to-r, red, yellow)"
          fontWeight={"semibold"}
          fontSize={"20px"}
        >
          {data.name}
        </Text>
      </Box>
    </Box>
  );
};

export default TeamCard;
