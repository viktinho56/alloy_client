//import ChangePassword from "../features/auth/ChangePassword";
import { Box, Text } from "@chakra-ui/react";
import ProfileSettings from "../features/settings/components/ProfileSettings";
//import Settings from "../features/settings/Settings";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminEditProfile = () => {
  return (
    <AdminDashboardLayout>
      <Box p={5} bg={"white"}>
        <Text fontSize={"xl"} my={5}>
          Edit Personal Information
        </Text>
        <ProfileSettings />
      </Box>
    </AdminDashboardLayout>
  );
};

export default AdminEditProfile;
