//import ManageDocuments from "../features/dashboard/ManageDocuments";
//import Documents from "../features/documents/Documents";
//import MenuFeature from "../features/menu/MenuFeature";
import CartFeature from "../features/patient-menu/CartFeature";
import PatientDashboardLayout from "../layouts/PatientDashboardLayout";

const CartPage = () => {
    return (
        <PatientDashboardLayout>
            <CartFeature />
        </PatientDashboardLayout>
    );
};

export default CartPage;
