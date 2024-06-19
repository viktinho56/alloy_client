//import ManageDocuments from "../features/dashboard/ManageDocuments";
//import Documents from "../features/documents/Documents";

//import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
import MenuFeature from "../features/patient-menu/MenuFeature";
import PatientDashboardLayout from "../layouts/PatientDashboardLayout";

const PatientMenuPage = () => {
    return (
        <PatientDashboardLayout>
            <MenuFeature />
        </PatientDashboardLayout>
    );
};

export default PatientMenuPage;
