//import Clients from "../features/clients/Clients";
// import AdminServices from "../features/services/AdminServices";
//import Services from "../features/services/Services";
//import Events from "../features/events/Events";
// import AdminServices from "../features/about-us/AdminServices";

import AdminWebinar from "../features/webinar/AdminWebinar";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminEventsPage = () => {
  return (
    <AdminDashboardLayout>
      <AdminWebinar />
    </AdminDashboardLayout>
  );
};

export default AdminEventsPage;
