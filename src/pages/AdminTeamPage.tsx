import Clients from "../features/clients/Clients";
//import Events from "../features/events/Events";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminTeamPage = () => {
  return (
    <AdminDashboardLayout>
      <Clients />
    </AdminDashboardLayout>
  );
};

export default AdminTeamPage;
