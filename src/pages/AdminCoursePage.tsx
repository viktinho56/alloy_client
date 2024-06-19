import AdminCourses from "../features/courses/AdminCourses";
// import Users from "../features/users/Users";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminCoursePage = () => {
  return (
    <AdminDashboardLayout>
      <AdminCourses />
    </AdminDashboardLayout>
  );
};

export default AdminCoursePage;
