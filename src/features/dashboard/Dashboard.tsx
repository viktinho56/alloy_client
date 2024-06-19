import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

// import {
//   accentColor,
//   //accentColor,
//   //greenColor,
//   lightColor,
//   //linkColor,
//   // redColor,
//   // yellowColor,
// } from "../../constants";
// import PostAnalysisCard from "./components/PostAnalysisCard";
// import UserAnalysisCard from "./components/UserAnaysisCard";
// import ArchivedAnalysis from "./components/ArchivedAnalysis";
// import DeActivatedAnalysis from "./components/DeActivatedAnalysis";

// import PostAnalysisTable from "./components/PostAnalysisTable";
// import RecentActivitiesTable from "./components/RecentActivitiesTable";

// import SimpleMap from "../../components/common/SimpleMap";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
// import DataBox from "./components/DataBox";
// import {
//   MdAccountCircle,
//   MdDesignServices,
//   MdPayment,
//   MdReceipt,
// } from "react-icons/md";
// import { useContext } from "react";
// import UserContext from "../../context/userContext";

const Dashboard = () => {
  let { currentUser } = useContext(AuthContext);

  return (
    <Box p={3}>
      <Flex my={5} justifyContent={"space-between"} alignItems={"center"}>
        <Heading fontWeight={"semibold"}>
          {currentUser?.firstName} {currentUser?.lastName} Dashboard
        </Heading>
        {/* <Button borderRadius={30} size={"lg"} bg={redColor} color={lightColor}>
          Emergency
        </Button> */}
      </Flex>

      <SimpleGrid my={5} gap={20} columns={{ base: 1, md: 1 }}>
        <Box p={5}>
          <SimpleGrid gap={20} columns={{ base: 1, md: 2 }}>
            <Button size={"lg"} colorScheme="yellow">
              Order Management
            </Button>
            <Button
              as={NavLink}
              to={"/admin/menu-management"}
              size={"lg"}
              colorScheme="cyan"
            >
              Menu Management
            </Button>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
      {/* <SimpleGrid my={7} gap={5} columns={{ base: 1, md: 2 }}>
        <PostAnalysisTable />
        <RecentActivitiesTable />
      </SimpleGrid> */}
    </Box>
  );
};

export default Dashboard;
