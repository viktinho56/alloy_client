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

const TermsSubmenu = ({ icon }: any) => {
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
            <Icon
              mr="2"
              fontSize="20"
              _groupHover={{
                opacity: 0.5,
              }}
              as={icon}
            />
            Terms & Legal
          </Box>
          <AccordionIcon color={lightColor} />
        </AccordionButton>

        <AccordionPanel pb={2}>
          <List spacing={2} ml={10}>
            <ListItem
              color={lightColor}
              display={"block"}
              as={NavLink}
              to={"/admin/privacy"}
              fontSize={"sm"}
              fontWeight={"medium"}
              cursor={"pointer"}
            >
              Privacy Policy
            </ListItem>
            <ListItem
              color={lightColor}
              display={"block"}
              as={NavLink}
              to={"/admin/terms"}
              fontSize={"sm"}
              fontWeight={"medium"}
              cursor={"pointer"}
            >
              Terms
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default TermsSubmenu;
