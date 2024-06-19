import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    List,
    ListItem,
    Box,
    //Icon,
} from "@chakra-ui/react";
import { lightColor } from "../../constants";
import { NavLink } from "react-router-dom";

const StaffSubMenu = () => {
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
                        {/* <Icon mr="2" fontSize="20" as={icon} /> */}
                        Menu Management
                    </Box>
                    <AccordionIcon color={lightColor} />
                </AccordionButton>

                <AccordionPanel pb={2}>
                    <List spacing={2} ml={10}>
                        <ListItem
                            color={lightColor}
                            display={"block"}
                            as={NavLink}
                            to={"/admin/menu-management"}
                            fontSize={"sm"}
                            fontWeight={"medium"}
                            cursor={"pointer"}
                        >
                            Food Menu
                        </ListItem>
                        <ListItem
                            color={lightColor}
                            display={"block"}
                            as={NavLink}
                            to={"/admin/category-management"}
                            fontSize={"sm"}
                            fontWeight={"medium"}
                            cursor={"pointer"}
                        >
                            Food Categories
                        </ListItem>
                        <ListItem
                            color={lightColor}
                            display={"block"}
                            as={NavLink}
                            to={"/admin/food-management"}
                            fontSize={"sm"}
                            fontWeight={"medium"}
                            cursor={"pointer"}
                        >
                           Food Items
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

export default StaffSubMenu;
