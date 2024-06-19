//import ManageDocuments from "../features/dashboard/ManageDocuments";
//import Documents from "../features/documents/Documents";
//import MenuFeature from "../features/menu/MenuFeature";
import HistoryFeature from "../features/patient-menu/HistoryFeature";

import PatientDashboardLayout from "../layouts/PatientDashboardLayout";

const HistoryPage = () => {
    return (
        <PatientDashboardLayout>
            <HistoryFeature />
        </PatientDashboardLayout>
    );
};

export default HistoryPage;
