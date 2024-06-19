import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
//import { EditUserModal } from "./EditUserModal";
import { EditFoodModal } from "./EditFoodModal";
//import { DeleteUserModal } from "./DeleteModal";
// import { AssignMenuModal } from "./AssignMenuModal";
// import { AssignFoodModal } from "./AssignFoodModal";

const ActionMenu = ({ user }: any) => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Action
            </MenuButton>
            <MenuList>
                <MenuItem>
                    <EditFoodModal data={user} />
                </MenuItem>
                {/* <MenuItem>
                    <AssignMenuModal data={user} />
                </MenuItem>
                <MenuItem>
                    <AssignFoodModal data={user} />
                </MenuItem> */}
                {/* {user.status == 0 && (
          <MenuItem onClick={() => handleClick(1)}>Deactivate</MenuItem>
        )}
        {user.status == 1 && (
          <MenuItem onClick={() => handleClick(0)}>Activate</MenuItem>
        )} */}
            </MenuList>
        </Menu>
    );
};

export default ActionMenu;
