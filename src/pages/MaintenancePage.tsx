import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
import Maintenance from "../features/dashboard/Maintenance";

const MaintenancePage = () => {
  return (
    <AdminDashboardLayout>
      <Maintenance />
    </AdminDashboardLayout>
  );
};

export default MaintenancePage;
