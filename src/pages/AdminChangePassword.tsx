import ChangePassword from "../features/auth/ChangePassword";
//import Settings from "../features/settings/Settings";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminChangePassword = () => {
  return (
    <AdminDashboardLayout>
      <ChangePassword />
    </AdminDashboardLayout>
  );
};

export default AdminChangePassword;
