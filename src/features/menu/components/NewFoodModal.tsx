import { AddIcon } from "@chakra-ui/icons";
import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";
import NewFoodItem from "./NewFoodItem";

export const NewFoodModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                bg={"yellow.100"}
                fontWeight={600}
                fontSize={"sm"}
                color={"yellow.600"}
                onClick={onOpen}
            >
                <AddIcon boxSize={3} mx={2} /> New Food Item
            </Button>

            <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Food Item</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={0} overflowY={"scroll"} maxH={500}>
                        <NewFoodItem close={onClose} />
                    </ModalBody>

                    <ModalFooter>
                        {/* <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
