import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AccountLinks } from "../../constants";
import { NavLink } from "react-router-dom";

export const AccountMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        My Accounts
      </MenuButton>
      <MenuList>
        {AccountLinks &&
          AccountLinks.map((d: any, i: number) => (
            <MenuItem key={i} as={NavLink} to={d.url}>
              {d.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default AccountMenu;
