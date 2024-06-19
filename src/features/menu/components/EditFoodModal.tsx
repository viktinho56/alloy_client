import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    // ModalFooter,
    // Text,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";


import EditFood from "./EditFood";

export const EditFoodModal = ({ data }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                onClick={onOpen}
                fontSize={"14px"}
                fontWeight={"medium"}
                size={"sm"}
                w={"full"}
                mt={2}
                bg={useColorModeValue("#EDF2F7", "gray.900")}
                color={"#000"}
            >
                Edit Food
            </Button>

            <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Food</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={3} overflowY={"scroll"} maxH={500}>
                        <EditFood close={onClose} data={data} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
