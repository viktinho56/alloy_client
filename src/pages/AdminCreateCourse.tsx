//import AdminCourses from "../features/courses/AdminCourses";
import { Box } from "@chakra-ui/react";
//import EditCourses from "../features/courses/EditCourses";
// import Users from "../features/users/Users";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
import NewUser from "../features/courses/components/NewUser";

const AdminCreateCourse = () => {
  return (
    <AdminDashboardLayout>
      <Box bg="white" p={10}>
        <NewUser />
      </Box>
    </AdminDashboardLayout>
  );
};

export default AdminCreateCourse;
