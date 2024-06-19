import React from "react";
import { Button, Text, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Box, Flex } from "@chakra-ui/react";
import { yellowColor } from "../../../constants";
import { IoMdCloudUpload } from "react-icons/io";

interface UploadDocumentsProps {
    isOpen: boolean;
    onClose: () => void;
}

const UploadDocuments: React.FC<UploadDocumentsProps> = ({ isOpen, onClose }) => {
    return (
        <Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Upload Documents</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody textAlign="center">
                        <Flex direction="column" align="center">
                            <IoMdCloudUpload fontSize={50} />
                            <Input type="file" size='sm' mt={5} />
                            <Text color='black' fontSize='sm'>or drag and drop the files here</Text>
                            <Text mt={5} fontSize='xs'>Allowed file types: PDF, DOCX, JPG, PNG <br />Maximum file size: 10MB</Text>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button
                            size={"md"}
                            py={{ base: 4, md: 6 }}
                            fontSize={{ base: "12px", md: "14px" }}
                            fontWeight={"bold"}
                            type="button"
                            bg={yellowColor}
                        >
                            {"UPLOAD"}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default UploadDocuments;
