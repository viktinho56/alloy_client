import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
//import Complaint from "../features/dashboard/Complaint";
//import Payments from "../features/dashboard/Payments";
import PaymentConfirmation from "../features/dashboard/PaymentConfirmation";

const PaymentConfirmationPage = () => {
  return (
    <AdminDashboardLayout>
      <PaymentConfirmation />
    </AdminDashboardLayout>
  );
};

export default PaymentConfirmationPage;
