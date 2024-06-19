//import ManageDocuments from "../features/dashboard/ManageDocuments";
//import Documents from "../features/documents/Documents";
import MenuFeature from "../features/menu/MenuFeature";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const MenuPage = () => {
  return (
    <AdminDashboardLayout>
      <MenuFeature />
    </AdminDashboardLayout>
  );
};

export default MenuPage;
