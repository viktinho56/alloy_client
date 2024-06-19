import { Box, Flex, Heading } from "@chakra-ui/react";
//import ExportMenu from "./components/ExportMenu";
//import UserSearchBox from "./components/UserSearchBox";
//import UsersTable from "./components/UsersTable";

//import UsersSkeleton from "./components/UsersSkeleton";
//import HasError from "../../components/common/HasError";

//import { User } from "../../types/user-type";
// import { FilterIcon } from "../../components/icons";
// import Pagination from "../../components/common/Pagination";
// import { UserProfileCard } from "./components/UserProfileCard";

import useMenu from "../../hooks/useMenu";
import FoodMenuModal from "./components/FoodMenuModal";



const MenuFeature = () => {

  let { data: AllUsers } = useMenu();

  console.log(AllUsers);


  return (
    <Box p={10}>
      <Heading fontSize={23}>Categories</Heading>
      <Flex p={5} gap={10}>
        {AllUsers && AllUsers.length > 0 && AllUsers.map((d: any, i: any) => <FoodMenuModal key={i} data={d} />)}
      </Flex>
    </Box>
  );
};

export default MenuFeature;
