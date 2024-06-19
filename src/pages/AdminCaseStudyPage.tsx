//import Clients from "../features/clients/Clients";
import AdminCaseStudy from "../features/case/AdminCaseStudy";
//import AdminServices from "../features/services/AdminServices";
//import Services from "../features/services/Services";
//import Events from "../features/events/Events";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminCaseStudyPage = () => {
  return (
    <AdminDashboardLayout>
      <AdminCaseStudy />
    </AdminDashboardLayout>
  );
};

export default AdminCaseStudyPage;
