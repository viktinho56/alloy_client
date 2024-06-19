import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { lightColor } from "../../constants";

const NavbarMenu = ({ name, Submenu }: any) => {
  return (
    <Menu isLazy>
      <MenuButton fontSize={14} color={lightColor}>
        {name}
      </MenuButton>
      <MenuList>
        {Submenu &&
          Submenu.map((data: any, index: number) => (
            <MenuItem as={NavLink} to={"/services"} key={index}>
              {data.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default NavbarMenu;
