import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  //ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  Box,
  // ModalFooter,
  Text,
  Button,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

//import EditUser from "./EditUser";
//import CourseCard from "./CourseCard";
import { ServerUrl, yellowColor } from "../../../constants";
import parse from "html-react-parser";
export const CourseModal = ({ data }: any) => {
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
        bg={useColorModeValue(yellowColor, "gray.900")}
        color={"#000"}
      >
        READ MORE
      </Button>

      <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={10}>
            <Image
              // borderBottomStartRadius={50}
              // borderTopEndRadius={50}
              w={"full"}
              //mx={10}
              h={300}
              objectFit={"cover"}
              objectPosition={"center"}
              src={ServerUrl + data.courseCover}
            />
            <Box p={10}>
              <Text
                mb={2}
                color={"black"}
                fontWeight={700}
                fontFamily={"Poppins"}
                lineHeight={1.2}
                fontSize={{ base: "14px", md: "20px" }}
              >
                {data.courseName}
              </Text>
              <Center>
                <Box>
                  <Text
                    textAlign={"justify"}
                    //noOfLines={5}
                    fontSize={14}
                    mt={2}
                  >
                    {data.content &&
                      data.content.length > 0 &&
                      parse(data.content ? data.content : "")}
                  </Text>
                </Box>
              </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
