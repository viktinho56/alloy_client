import { Box,  Flex, Heading } from "@chakra-ui/react";
//import ExportMenu from "./components/ExportMenu";
//import UserSearchBox from "./components/UserSearchBox";
//import UsersTable from "./components/UsersTable";

//import UsersSkeleton from "./components/UsersSkeleton";
//import HasError from "../../components/common/HasError";

//import { User } from "../../types/user-type";
// import { FilterIcon } from "../../components/icons";
// import Pagination from "../../components/common/Pagination";
// import { UserProfileCard } from "./components/UserProfileCard";

import useCartItems from "../../hooks/useCartItems";
import useAuth from "../../hooks/useAuth";
//import CartObject from "./components/CartObject";
import HistoryObject from "./components/HistoryObject";




const HistoryFeature = () => {
    let { GetCurrentUser } = useAuth();
    let { data: AllUsers } = useCartItems(GetCurrentUser()?.id ?? 0,1);
  
    return (
        <Box p={10}>
            <Heading fontSize={23}>Food Cart</Heading>
            <Flex p={5} gap={10}>
                {AllUsers && AllUsers.length > 0 && AllUsers.map((d: any, i: any) => <HistoryObject key={i} data={d} />)}
            </Flex>
          
        </Box>
    );
};

export default HistoryFeature;
