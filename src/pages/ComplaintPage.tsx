import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
import Complaint from "../features/dashboard/Complaint";

const ComplaintPage = () => {
  return (
    <AdminDashboardLayout>
      <Complaint />
    </AdminDashboardLayout>
  );
};

export default ComplaintPage;
