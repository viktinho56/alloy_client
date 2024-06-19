import { Box, Button, Flex, Heading } from "@chakra-ui/react";
//import ExportMenu from "./components/ExportMenu";
//import UserSearchBox from "./components/UserSearchBox";
//import UsersTable from "./components/UsersTable";

//import UsersSkeleton from "./components/UsersSkeleton";
//import HasError from "../../components/common/HasError";

//import { User } from "../../types/user-type";
// import { FilterIcon } from "../../components/icons";
// import Pagination from "../../components/common/Pagination";
// import { UserProfileCard } from "./components/UserProfileCard";
import {  Report } from 'notiflix';
import useCartItems from "../../hooks/useCartItems";
import useAuth from "../../hooks/useAuth";
import CartObject from "./components/CartObject";
import { PlaceCartByIdApi } from "./services/userServices";



const CartFeature = () => {
let {GetCurrentUser} = useAuth();
    let { data: AllUsers } = useCartItems(GetCurrentUser()?.id??0,0);
    async function handleConfirm(){
      let {error} =  await PlaceCartByIdApi(GetCurrentUser()?.id??0);
        if (!error) {
            Report.success(
                'Order Successfully Placed.',
                'You will be notifed when the kitchen is about to prepare your meal.',
                'Okay',
                () => {
                    window.location.href="/order-summary";
                }
            );
        }
        else {
            Report.failure(
                'Failure',
                'Order Could not be added',
                'Okay',
            );
        }
    }
    return (
        <Box p={10}>
            <Heading fontSize={23}>Food Cart</Heading>
            <Flex p={5} gap={10}>
                {AllUsers && AllUsers.length > 0 && AllUsers.map((d: any, i: any) => <CartObject key={i} data={d} />)}
               
            </Flex>
            {AllUsers && AllUsers.length > 0 && <Button mx={5} onClick={handleConfirm} colorScheme='green' my={5}>Place Order</Button>}
        </Box>
    );
};

export default CartFeature;
