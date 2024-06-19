//import ManageDocuments from "../features/dashboard/ManageDocuments";
//import Documents from "../features/documents/Documents";
import CategoryFeature from "../features/menu/CategoryFeature";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const FoodCategoryPage = () => {
    return (
        <AdminDashboardLayout>
            <CategoryFeature />
        </AdminDashboardLayout>
    );
};

export default FoodCategoryPage;
