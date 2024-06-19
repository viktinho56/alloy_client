//import ManageDocuments from "../features/dashboard/ManageDocuments";
import Documents from "../features/documents/Documents";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const ManageDocumentsPage = () => {
  return (
    <AdminDashboardLayout>
      <Documents />
    </AdminDashboardLayout>
  );
};

export default ManageDocumentsPage;
