import { AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Avatar, Button } from '@chakra-ui/react'
import { ServerUrl } from '../../../constants'
import { Confirm, Report } from 'notiflix';
import { AddToCartApi } from '../services/userServices';
import useAuth from '../../../hooks/useAuth';



const FoodAccordion = ({ data}: any) => {
    let { GetCurrentUser } = useAuth();
    function handleConfirm(): void {
        Confirm.show(
            'Notiflix Confirm',
            'Are you sure you want to add to cart?',
            'Yes',
            'No',
            async () => {
                let record = {
                    productId: data.productId,
                    menuId: data.menuId,
                    quantity: 1,
                    patientId: GetCurrentUser()?.id,
                }
                let { error } = await AddToCartApi(record);
                if (!error) {
                    Report.success(
                        'Success',
                        'Added Successfully to Cart',
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
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        {data.productName}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Box>
                    <Avatar size={"2xl"} borderRadius={3} src={ServerUrl + data.avatarUrl} />

                </Box>
                <Button onClick={handleConfirm} colorScheme='blue' my={5}>Add to Cart</Button>
            </AccordionPanel>
        </AccordionItem>
    )
}

export default FoodAccordion