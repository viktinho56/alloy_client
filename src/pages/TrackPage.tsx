//import ManageDocuments from "../features/dashboard/ManageDocuments";
//import Documents from "../features/documents/Documents";
//import MenuFeature from "../features/menu/MenuFeature";
import TrackFeature from "../features/patient-menu/TrackFeature";
import PatientDashboardLayout from "../layouts/PatientDashboardLayout";

const TrackPage = () => {
    return (
        <PatientDashboardLayout>
            <TrackFeature />
        </PatientDashboardLayout>
    );
};

export default TrackPage;
