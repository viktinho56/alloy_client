import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ServiceLinks } from "../../constants";
import { NavLink } from "react-router-dom";

export const ServiceMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Service Request
      </MenuButton>
      <MenuList>
        {ServiceLinks &&
          ServiceLinks.map((d: any, i: number) => (
            <MenuItem key={i} as={NavLink} to={d.url}>
              {d.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default ServiceMenu;
