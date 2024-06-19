import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
// import { EditUserModal } from "./EditUserModal";
// import { DeleteUserModal } from "./DeleteModal";
import { ServerUrl } from "../../../constants";
import { DeleteUserByIdApi } from "../services/userServices";
import Notiflix from "notiflix";

const ActionMenu = ({ user }: any) => {
  async function handleClick() {
    let { error } = await DeleteUserByIdApi(user.id);
    if (!error) {
      window.location.reload();
    } else {
      Notiflix.Report.failure("Error", "An Error has Occured", "Retry");
    }
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Action
      </MenuButton>
      <MenuList>
        <MenuItem>
          <a
            style={{ marginLeft: "10px" }}
            download
            href={ServerUrl + user.docUrl}
          >
            Download
          </a>
        </MenuItem>
        <MenuItem>
          <MenuItem onClick={() => handleClick()}>Delete</MenuItem>
        </MenuItem>
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
