//import Clients from "../features/clients/Clients";
// import AdminServices from "../features/services/AdminServices";
//import Services from "../features/services/Services";
//import Events from "../features/events/Events";
// import AdminServices from "../features/about-us/AdminServices";
import AdminGallery from "../features/gallery/AdminGallery";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const AdminGalleryPage = () => {
  return (
    <AdminDashboardLayout>
      <AdminGallery />
    </AdminDashboardLayout>
  );
};

export default AdminGalleryPage;
