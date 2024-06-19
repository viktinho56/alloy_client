import { Box } from "@chakra-ui/react";
import EditCaseStudy from "../features/case/EditCaseStudy";
//import AdminCourses from "../features/courses/AdminCourses";
// import Users from "../features/users/Users";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminEditCaseStudy = () => {
  return (
    <AdminDashboardLayout>
      <Box bg="white">
        <EditCaseStudy />
      </Box>
    </AdminDashboardLayout>
  );
};

export default AdminEditCaseStudy;
