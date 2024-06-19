//import AdminCourses from "../features/courses/AdminCourses";
import { Box } from "@chakra-ui/react";
//import EditCourses from "../features/courses/EditCourses";
// import Users from "../features/users/Users";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
import NewUser from "../features/services/components/NewUser";

const AdminCreateService = () => {
  return (
    <AdminDashboardLayout>
      <Box bg="white" p={10}>
        <NewUser />
      </Box>
    </AdminDashboardLayout>
  );
};

export default AdminCreateService;
