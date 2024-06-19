import {
  Avatar,
  Flex,
  Heading,
  VStack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { linkColor } from "../../../constants";

const RecentActivitiesTableDetails = ({ data }: any) => {
  let { name, activityTime, activityType, avatar } = data;

  return (
    <Box>
      <Flex my={3} justifyContent={"space-between"} alignItems={"center"}>
        <Flex gap={2} justifyContent={"flex-start"} alignItems={"center"}>
          <Avatar size={"sm"} name="Ryan Florence" src={avatar} />
          <VStack
            spacing={1}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Heading fontWeight={600} fontSize={15}>
              {name} {activityType}
            </Heading>
            <Text color={linkColor} fontSize={13}>
              {activityTime}
            </Text>
          </VStack>
        </Flex>
        <Flex gap={3} alignItems={"center"}>
          <Button size={"xs"} bg={"blue.100"} color={"blue.600"}>
            {activityTime}
          </Button>
        </Flex>
      </Flex>
      <hr />
    </Box>
  );
};

export default RecentActivitiesTableDetails;
