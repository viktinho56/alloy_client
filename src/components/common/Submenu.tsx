import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  List,
  ListItem,
  Box,
  Icon,
} from "@chakra-ui/react";
import { lightColor } from "../../constants";
import { NavLink } from "react-router-dom";

const Submenu = ({ icon }: any) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem border={"none"}>
        <AccordionButton>
          <Box
            as="span"
            fontSize={14}
            fontWeight={"semibold"}
            color={lightColor}
            // align="center"
            px={2}
            py={{ base: 1, md: 1, lg: 1 }}
            flex="1"
            textAlign="left"
          >
            <Icon mr="2" fontSize="20" as={icon} />
            About
          </Box>
          <AccordionIcon color={lightColor} />
        </AccordionButton>

        <AccordionPanel pb={2}>
          <List spacing={2} ml={10}>
            <ListItem
              color={lightColor}
              display={"block"}
              as={NavLink}
              to={"/admin/mission"}
              fontSize={"sm"}
              fontWeight={"medium"}
              cursor={"pointer"}
            >
              Mission
            </ListItem>
            <ListItem
              color={lightColor}
              display={"block"}
              as={NavLink}
              to={"/admin/vision"}
              fontSize={"sm"}
              fontWeight={"medium"}
              cursor={"pointer"}
            >
              Vision
            </ListItem>
            <ListItem
              color={lightColor}
              display={"block"}
              as={NavLink}
              to={"/admin/values"}
              fontSize={"sm"}
              fontWeight={"medium"}
              cursor={"pointer"}
            >
              Values
            </ListItem>
            <ListItem
              color={lightColor}
              display={"block"}
              as={NavLink}
              to={"/admin/objectives"}
              fontSize={"sm"}
              fontWeight={"medium"}
              cursor={"pointer"}
            >
              Objectives
            </ListItem>
            {/* <ListItem
              color={lightColor}
              display={"block"}
              as={NavLink}
              to={"/admin/services"}
              fontSize={"sm"}
              fontWeight={"medium"}
              cursor={"pointer"}
            >
              Services
            </ListItem> */}
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Submenu;
