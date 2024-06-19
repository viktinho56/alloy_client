//import AdminCourses from "../features/courses/AdminCourses";
import { Box } from "@chakra-ui/react";
import EditCourses from "../features/courses/EditCourses";
// import Users from "../features/users/Users";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminEditCourses = () => {
  return (
    <AdminDashboardLayout>
      <Box bg="white">
        <EditCourses />
      </Box>
    </AdminDashboardLayout>
  );
};

export default AdminEditCourses;
