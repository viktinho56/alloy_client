//import ManageDocuments from "../features/dashboard/ManageDocuments";
//import Documents from "../features/documents/Documents";
//import MenuFeature from "../features/menu/MenuFeature";
import SummaryFeature from "../features/patient-menu/SummaryFeature";
import PatientDashboardLayout from "../layouts/PatientDashboardLayout";


const SummaryPage = () => {
    return (
        <PatientDashboardLayout>
            <SummaryFeature />
        </PatientDashboardLayout>
    );
};

export default SummaryPage;
