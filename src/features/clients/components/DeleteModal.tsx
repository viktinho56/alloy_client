import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import React from "react";

import Notiflix from "notiflix";
import { DeleteByIdApi } from "../services/userServices";

export function DeleteUserModal({ data }: any) {
  //let statusText = data.status == 1 ? "Disable" : "Enable";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = React.useRef();
  const handleClick = async () => {
    //let dataObject = { id: data.id};
    let { response, error } = await DeleteByIdApi(data.id);
    if (!error) {
      Notiflix.Report.success("Success", response ?? "Success", "OK", () => {
        window.location.reload();
      });
    } else {
      Notiflix.Report.failure("Error", error ?? "Error", "OK", () => {
        window.location.reload();
      });
    }
  };
  return (
    <>
      <Button
        onClick={onOpen}
        fontSize={"14px"}
        fontWeight={"medium"}
        size={"sm"}
        w={"full"}
        mt={2}
        bg={data.status == 1 ? "red.200" : "green.200"}
        color={data.status == 1 ? "red.800" : "green.800"}
        rounded={"md"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
      >
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {"Delete"} {data.clientName}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? Please confirm before proceeding.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              {data.status == 1 && (
                <Button colorScheme="red" onClick={() => handleClick()} ml={3}>
                  {"Delete"}
                </Button>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
