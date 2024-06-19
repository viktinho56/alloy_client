import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";

import { yellowColor } from "../../constants";
// import { NavLink } from "react-router-dom";
const NavbarDropdown = ({ linkName, linkMenu }: any) => {
  return (
    <Menu>
      <MenuButton
        _hover={{ color: yellowColor }}
        textTransform={"uppercase"}
        as={Text}
      >
        {linkName}
      </MenuButton>
      <MenuList mt={4}>
        {linkMenu.map((submenu: any, index: number) => (
          <MenuItem
            color={"blackAlpha.600"}
            as={"a"}
            href={"/services/" + submenu.slug}
            key={index}
            _hover={{ bg: "transparent", color: yellowColor }}
            fontWeight={"400"}
          >
            {submenu.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavbarDropdown;
