import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
import Transactions from "../features/dashboard/Transactions";

const TransactionsPage = () => {
  return (
    <AdminDashboardLayout>
      <Transactions />
    </AdminDashboardLayout>
  );
};

export default TransactionsPage;
