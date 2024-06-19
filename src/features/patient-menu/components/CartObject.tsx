import { Avatar, Box, Button, Flex, Heading } from '@chakra-ui/react'
import { ServerUrl } from '../../../constants'
import { Confirm,Report } from 'notiflix';
//import useAuth from '../../../hooks/useAuth';
import { DeleteCartByIdApi } from '../services/userServices';


const CartObject = ({data}:any) => {

    function handleConfirm(): void {
        Confirm.show(
            'Notiflix Confirm',
            'Are you sure you want to remove from cart?',
            'Yes',
            'No',
            async () => {
                
                let { error } = await DeleteCartByIdApi(data.id);
                if (!error) {
                    Report.success(
                        'Success',
                        'Removed Successfully from Cart',
                        'Okay',
                        () => {
                            window.location.reload();
                        }
                    );
                }
                else {
                    Report.failure(
                        'Failure',
                        'Could not be added',
                        'Okay',
                    );
                }
            },
            () => {

            },
            {
            },
        );
    }

  return (
    <Box w={"100%"} p={5} shadow={"2xl"} bg={"white"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Heading fontSize={22}>{data.productName}</Heading>
              <Avatar size={"xl"} borderRadius={3} src={ServerUrl + data.avatarUrl} />
        </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Heading fontSize={16}>Quantity {data.quantity}</Heading>
              <Button onClick={handleConfirm} colorScheme='red' my={5}>Remove</Button>
          </Flex>
    </Box>
  )
}

export default CartObject