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

import EditUser from "./EditUser";

export const EditUserModal = ({ data }: any) => {
  console.log(data);
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
        Edit Content
      </Button>

      <Modal size={"sm"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Content</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={3} overflowY={"scroll"} maxH={500}>
            <EditUser />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
