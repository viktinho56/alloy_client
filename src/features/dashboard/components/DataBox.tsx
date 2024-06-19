//import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  //Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const DataBox = ({ color, icon, name, url, links }: any) => {
  console.log(url);
  return (
    <Menu>
      <MenuButton as={Box}>
        <Box
          mb={50}
          h={"200px"}
          textAlign={"center"}
          p={7}
          borderRadius={10}
          bg={color}
        >
          <Heading fontSize={18}>{name}</Heading>
          {icon}{" "}
        </Box>
      </MenuButton>
      <MenuList>
        {links.map((l: any, id: number) => (
          <MenuItem as={NavLink} to={l.url} key={id} fontSize={14}>
            {l.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
    //
  );
};

export default DataBox;
