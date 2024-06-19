//import AdminCourses from "../features/courses/AdminCourses";
import { Box } from "@chakra-ui/react";
import EditService from "../features/services/EditService";
// import Users from "../features/users/Users";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminEditServices = () => {
  return (
    <AdminDashboardLayout>
      <Box bg="white">
        <EditService />
      </Box>
    </AdminDashboardLayout>
  );
};

export default AdminEditServices;
