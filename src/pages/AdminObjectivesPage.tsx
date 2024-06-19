import AdminObjectives from "../features/about-us/AdminObjectives";

//import AdminCourses from "../features/courses/AdminCourses";
// import Users from "../features/users/Users";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminObjectivesPage = () => {
  return (
    <AdminDashboardLayout>
      <AdminObjectives />
    </AdminDashboardLayout>
  );
};

export default AdminObjectivesPage;
