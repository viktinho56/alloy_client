import { Box, Flex, Heading } from "@chakra-ui/react";

//import { Report } from 'notiflix';
import useCartItems from "../../hooks/useCartItems";
import useAuth from "../../hooks/useAuth";

import TrackObject from "./components/TrackObject";



const TrackFeature = () => {
    let { GetCurrentUser } = useAuth();
    let { data: AllUsers } = useCartItems(GetCurrentUser()?.id ?? 0,1);
    
    return (
        <Box p={10}>
            <Heading fontSize={23}>Track Order</Heading>
            <Flex p={5} gap={10}>
                {AllUsers && AllUsers.length > 0 && AllUsers.map((d: any, i: any) => <TrackObject key={i} data={d} />)}

            </Flex>
            {/* {AllUsers && AllUsers.length > 0 && <Button mx={5} onClick={handleConfirm} colorScheme='green' my={5}>Place Order</Button>} */}
        </Box>
    );
};

export default TrackFeature;
