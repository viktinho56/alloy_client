//import ManageDocuments from "../features/dashboard/ManageDocuments";
//import Documents from "../features/documents/Documents";
import FoodFeature from "../features/menu/FoodFeature";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";

const FoodItemPage = () => {
    return (
        <AdminDashboardLayout>
            <FoodFeature />
        </AdminDashboardLayout>
    );
};

export default FoodItemPage;
