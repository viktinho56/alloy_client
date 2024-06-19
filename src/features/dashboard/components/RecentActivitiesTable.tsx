import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { linkColor } from "../../../constants";
import RecentActivitiesTableDetails from "./RecentActivitiesTableDetails";

const RecentActivitiesTable = () => {
  let data = [
    {
      name: "Gen Tolu Wole",
      activityTime: "12:00 AM",
      activityType: "just made a post",
      avatar: "https://bit.ly/ryan-florence",
    },
    {
      name: "Gen Segun Adebayo",
      activityTime: "12:00 AM",
      activityType: "just made a post",
      avatar: "https://bit.ly/sage-adebayo",
    },
    {
      name: "Gen Kent Dodds",
      activityTime: "12:00 AM",
      activityType: "just made a post",
      avatar: "https://bit.ly/kent-c-dodds",
    },
    {
      name: "Gen Prosper Otemuyiwa",
      activityTime: "12:00 AM",
      activityType: "just made a post",
      avatar: "https://bit.ly/prosper-baba",
    },
    {
      name: "Gen Christian Nwamba",
      activityTime: "12:00 AM",
      activityType: "just made a post",
      avatar: "https://bit.ly/code-beast",
    },
  ];
  return (
    <Box h={"auto"} bg={"#fff"} borderRadius={8} p={7}>
      <Text fontSize={16} fontWeight={600}>
        Recent Activities
      </Text>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={15} color={linkColor}>
          Check general system activities
        </Text>
        <Button size={"sm"}>View All</Button>
      </Flex>
      {data &&
        data.length > 0 &&
        data.map((record, index) => (
          <RecentActivitiesTableDetails key={index} data={record} />
        ))}
    </Box>
  );
};

export default RecentActivitiesTable;
