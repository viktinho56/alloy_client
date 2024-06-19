import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Accordion } from '@chakra-ui/react'
import useMenuItems from '../../../hooks/useMenuItems';
import FoodAccordion from './FoodAccordion';


const FoodMenuModal = ({data}:any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let { data: FoodItems } = useMenuItems(data.id);
    console.log(FoodItems);
    return (
        <>
            <Button minW={"200px"} bg={"white"} size={"lg"} onClick={onOpen}>{data.menuName}</Button>

            <Modal isOpen={isOpen} size={"2xl"} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Food Items for Lunch</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            {FoodItems && FoodItems.length > 0 && FoodItems.map((d, i) => <FoodAccordion key={i} data={d}/>)}
                            </Accordion>
                       
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                      
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default FoodMenuModal