import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
//import Complaint from "../features/dashboard/Complaint";
//import Payments from "../features/dashboard/Payments";
import ServiceUpdates from "../features/dashboard/ServiceUpdates";

const ServiceStatusPage = () => {
  return (
    <AdminDashboardLayout>
      <ServiceUpdates />
    </AdminDashboardLayout>
  );
};

export default ServiceStatusPage;
