import Clients from "../features/clients/Clients";
//import Events from "../features/events/Events";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminClientsPage = () => {
  return (
    <AdminDashboardLayout>
      <Clients />
    </AdminDashboardLayout>
  );
};

export default AdminClientsPage;
