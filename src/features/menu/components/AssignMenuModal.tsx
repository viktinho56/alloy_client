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
  Heading,
  Checkbox,
  Box,
  Avatar,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ServerUrl } from "../../../constants";
import useProducts from "../../../hooks/useProducts";
import useMenuItems from "../../../hooks/useMenuItems";
import { ChangeEvent, useEffect, useState } from "react";
import { Confirm } from "notiflix";
import { CreateOrderMenuApi, DeleteOrderMenuApi } from "../services/userServices";
//import useCategoryMenu from "../hooks/useCategoryMenu";

//import EditUser from "./EditUser";

export const AssignMenuModal = ({ data }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //let { data: CatMenu } = useCategoryMenu(data.id);
  let { data: AllFoodItems } = useProducts();
  let { data: FoodItems } = useMenuItems(data.id);
  let [filtered, setFiltered] = useState<any>([]);
  let def: any = [];
  useEffect(() => {
    for (let index = 0; index < AllFoodItems.length; index++) {
      const element = AllFoodItems[index];
      let found = FoodItems.find((x) => x.productId == element.id);
      if (found) { element.isPart = true }
      else { element.isPart = false }
      def.push(element);
      setFiltered([...filtered, element]);
    }
    setFiltered(def);
  }, [AllFoodItems, FoodItems]);
  function handleOnChange(event: ChangeEvent<HTMLInputElement>, d: any): void {
    let res = event.target.checked;
    console.log(d);
    let datay = {
      menuId: data.id,
      productId: d.id
    }
    if (res) {
      Confirm.show(
        'Notiflix Confirm',
        'Do you want to add this item?',
        'Yes',
        'No',
        async () => {
          let { error } = await CreateOrderMenuApi(datay);
          if (!error) {
            window.location.reload();
          }
        },
        () => {
          // alert('If you say so...');
        },
        {
        },
      )
    }
    else {
      Confirm.show(
        'Notiflix Confirm',
        'Do you want to remove this item?',
        'Yes',
        'No',
        async () => {
          let { error } = await DeleteOrderMenuApi(datay);
          if (!error) {
            window.location.reload();
          }
        },
        () => {
          /// alert('If you say so...');
        },
        {
        },
      )
    }
  }

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
        Assign Food Items
      </Button>

      <Modal size={"sm"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Assign Food Items</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={1} overflowY={"scroll"} maxH={500}>
            <Heading fontSize={15}>Assign to Menu</Heading>
            {filtered &&
              filtered.map((d: any, i: number) => (
                <Box as={Flex} alignItems={"center"} key={i} my={2}>

                  {d.status == 1 && d.isPart == true ? <Checkbox
                    size={"lg"}
                    onChange={(e) => handleOnChange(e, d)}
                    defaultChecked={true}
                  >
                    <Box gap={2} as={Flex} alignItems={"center"}>
                      <Avatar borderRadius={8} src={ServerUrl + d.avatarUrl} />
                      <Text>{d.productName}</Text>
                    </Box>

                  </Checkbox> : <Checkbox
                    size={"lg"}
                      onChange={(e) => handleOnChange(e, d)}
                    defaultChecked={false}
                  >
                    <Box gap={2} as={Flex} alignItems={"center"}>
                      <Avatar borderRadius={8} src={ServerUrl + d.avatarUrl} />
                      <Text>{d.productName}</Text>
                    </Box>

                  </Checkbox>}
                </Box>
              ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
