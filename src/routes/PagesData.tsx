// import AdminAuthPage from "../pages/AdminAuthPage";

import { routerType } from "../types/router-type";
import AboutPage from "../pages/AboutPage";

import AdminMissionPage from "../pages/AdminMissionPage";
// import AdminPosts from "../pages/AdminPosts";
import AdminPrivacyPage from "../pages/AdminPrivacyPage";
// import AdminServicesPage from "../pages/AdminServicesPage";
// import AdminSettings from "../pages/AdminSettings";
// import AdminTeamPage from "../pages/AdminTeamPage";
import AdminTermsPage from "../pages/AdminTermsPage";
import AdminTestimonialPage from "../pages/AdminTestimonialPage";
// import AdminUserManagement from "../pages/AdminUserManagement";
import AdminVisionPage from "../pages/AdminVisionPage";
// import ConsultingPage from "../pages/ConsultingPage";

// import CoursesPage from "../pages/CoursesPage";
//import IndexPage from "../pages/IndexPage";
import ContactPage from "../pages/ContactPage";
import ProgramPage from "../pages/ProgramPage";
import WebinarPage from "../pages/WebinarPage";
import DonationPage from "../pages/DonationPage";
import AdminAuthPage from "../pages/AdminAuthPage";
import AdminProtectedRoute from "./AdminProtectedRoute";
import AdminUserManagement from "../pages/AdminUserManagement";
import AdminValuesPage from "../pages/AdminValuesPage";
import AdminObjectivesPage from "../pages/AdminObjectivesPage";
import AdminServicesPage from "../pages/AdminServicesPage";
import AdminGalleryPage from "../pages/AdminGalleryPage";
import AdminEventsPage from "../pages/AdminEventsPage";
//import ProgramPage from "../pages/ProgramPage";
//import PrivacyPage from "../pages/PrivacyPage";
// import ServicesPage from "../pages/ServicesPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AdminDashboard from "../pages/AdminDashboard";
import AdminSettings from "../pages/AdminSettings";
import FaqPage from "../pages/FaqPage";
import MaintenancePage from "../pages/MaintenancePage";
import ComplaintPage from "../pages/ComplaintPage";
import PaymentsPage from "../pages/PaymentsPage";
import AdminReports from "../pages/AdminReportsPage";
import TransactionsPage from "../pages/TransactionsPage";
import PropertyInfoPage from "../pages/PropertyInfoPage";
import ManageDocumentsPage from "../pages/ManageDocumentsPage";
import BookViewingPage from "../pages/BookViewingPage";
import CreatePasswordPage from "../pages/CreatePasswordPage";
import AdminChangePassword from "../pages/AdminChangePassword";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ServiceStatusPage from "../pages/ServiceStatusPage";
import AdminEditProfile from "../pages/AdminEditProfile";
import PaymentConfirmationPage from "../pages/PaymentConfirmationPage";
import OtpSetUpPage from "../pages/OtpSetupPage";
import OtpPage from "../pages/OtpPage";
import NotificationSettingsPage from "../pages/NotificationSettingsPage";
import StaffLoginPage from "../pages/StaffLoginPage";
import MenuPage from "../pages/MenuPage";
import FoodItemPage from "../pages/FoodItemPage";
import FoodCategoryPage from "../pages/FoodCategoryPage";
import PatientMenuPage from "../pages/PatientMenuPage";
import CartPage from "../pages/CartPage";
import SummaryPage from "../pages/SummaryPage";
import HistoryPage from "../pages/HistoryPage";
import TrackPage from "../pages/TrackPage";
//import ContactPage from "../pages/ContactPage";
// import TrainingsPage from "../pages/TrainingsPage";
// import CaseStudyPage from "../pages/CaseStudyPage";

// import AdminProtectedRoute from "./AdminProtectedRoute";
// import CaseStudyViewPage from "../pages/CaseStudyViewPage";
// import AdminTeamsPage from "../pages/AdminTeamsPage";
// import AdminEditServices from "../pages/AdminEditServices";
// import AdminEditCourses from "../pages/AdminEditCourses";
// import AdminEditCaseStudy from "../pages/AdminEditCaseStudy";
// import AdminCreateCase from "../pages/AdminCreateCase";
// import AdminCreateCourse from "../pages/AdminCreateCourse";
// import AdminCreateService from "../pages/AdminCreateService";

const PagesData: routerType[] = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/staff",
    element: <StaffLoginPage />,
  },

  {
    path: "/menu",
    element: (
      <AdminProtectedRoute>
        <PatientMenuPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/cart",
    element: (
      <AdminProtectedRoute>
        <CartPage />
      </AdminProtectedRoute>
    ),
  },
 
  {
    path: "/order-summary",
    element: (
      <AdminProtectedRoute>
        <SummaryPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/order-history",
    element: (
      <AdminProtectedRoute>
        <HistoryPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/track-order",
    element: (
      <AdminProtectedRoute>
        <TrackPage />
      </AdminProtectedRoute>
    ),
  },

  {
    path: "/auth/register",
    element: <RegisterPage />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/auth/reset-password/:email",
    element: <ResetPasswordPage />,
  },
  {
    path: "/auth/create-password",
    element: <CreatePasswordPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/otp-setup",
    element: <OtpSetUpPage />,
  },
  {
    path: "/auth/otp",
    element: <OtpPage />,
  },
  {
    path: "/contact-us",
    element: <ContactPage />,
  },
  {
    path: "/about-us",
    element: <AboutPage />,
  },
  {
    path: "/our-services",
    element: <ProgramPage />,
  },
  {
    path: "/faqs",
    element: <FaqPage />,
  },
  {
    path: "/book-viewing",
    element: <BookViewingPage />,
  },
  {
    path: "/events",
    element: <WebinarPage />,
  },
  {
    path: "/donation",
    element: <DonationPage />,
  },
  {
    path: "/admin",
    element: <AdminAuthPage />,
  },

  {
    path: "/admin/menu-management",
    element: (
      <AdminProtectedRoute>
        <MenuPage />
      </AdminProtectedRoute>
    ),
  },

  {
    path: "/admin/food-management",
    element: (
      <AdminProtectedRoute>
        <FoodItemPage />
      </AdminProtectedRoute>
    ),
  },

  {
    path: "/admin/category-management",
    element: (
      <AdminProtectedRoute>
        <FoodCategoryPage />
      </AdminProtectedRoute>
    ),
  },






  {
    path: "/admin/maintenance",
    element: (
      <AdminProtectedRoute>
        <MaintenancePage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/notification-settings",
    element: (
      <AdminProtectedRoute>
        <NotificationSettingsPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/profile",
    element: (
      <AdminProtectedRoute>
        <AdminEditProfile />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/service-status",
    element: (
      <AdminProtectedRoute>
        <ServiceStatusPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/complaints",
    element: (
      <AdminProtectedRoute>
        <ComplaintPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/payments",
    element: (
      <AdminProtectedRoute>
        <PaymentsPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/payment-confirmation",
    element: (
      <AdminProtectedRoute>
        <PaymentConfirmationPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/change-password",
    element: (
      <AdminProtectedRoute>
        <AdminChangePassword />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/transactions",
    element: (
      <AdminProtectedRoute>
        <TransactionsPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/user-management",
    element: (
      <AdminProtectedRoute>
        <AdminUserManagement />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/reports",
    element: (
      <AdminProtectedRoute>
        <AdminReports />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/property-information",
    element: (
      <AdminProtectedRoute>
        <PropertyInfoPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/manage-documents",
    element: (
      <AdminProtectedRoute>
        <ManageDocumentsPage />
      </AdminProtectedRoute>
    ),
  },
  
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  // {
  //   path: "/consulting",
  //   element: <ConsultingPage />,
  // },
  // {
  //   path: "/services/:slug",
  //   element: <ServicesPage />,
  // },
  // {
  //   path: "/case-study/",
  //   element: <CaseStudyPage />,
  // },
  // {
  //   path: "/study/view/:slug",
  //   element: <CaseStudyViewPage />,
  // },
  // {
  //   path: "/courses",
  //   element: <CoursesPage />,
  // },

  // {
  //   path: "/training",
  //   element: <TrainingsPage />,
  // },

  {
    path: "/admin/dashboard",
    element: (
      <AdminProtectedRoute>
        <AdminDashboard />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/settings",
    element: (
      <AdminProtectedRoute>
        <AdminSettings />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/testimonial",
    element: (
      <AdminProtectedRoute>
        <AdminTestimonialPage />
      </AdminProtectedRoute>
    ),
  },
  // {
  //   path: "/admin/courses",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminCoursePage />
  //     </AdminProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/admin/team",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminTeamsPage />
  //     </AdminProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/admin/events",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminEventManagement />
  //     </AdminProtectedRoute>
  //   ),
  // },
  {
    path: "/admin/objectives",
    element: (
      <AdminProtectedRoute>
        <AdminObjectivesPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/values",
    element: (
      <AdminProtectedRoute>
        <AdminValuesPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/mission",
    element: (
      <AdminProtectedRoute>
        <AdminMissionPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/vision",
    element: (
      <AdminProtectedRoute>
        <AdminVisionPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/services",
    element: (
      <AdminProtectedRoute>
        <AdminServicesPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/gallery",
    element: (
      <AdminProtectedRoute>
        <AdminGalleryPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/events",
    element: (
      <AdminProtectedRoute>
        <AdminEventsPage />
      </AdminProtectedRoute>
    ),
  },
  // {
  //   path: "/admin/services",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminServicesPage />
  //     </AdminProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/admin/case-study",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminCaseStudyPage />
  //     </AdminProtectedRoute>
  //   ),
  // },

  {
    path: "/admin/terms",
    element: (
      <AdminProtectedRoute>
        <AdminTermsPage />
      </AdminProtectedRoute>
    ),
  },

  {
    path: "/admin/privacy",
    element: (
      <AdminProtectedRoute>
        <AdminPrivacyPage />
      </AdminProtectedRoute>
    ),
  },

  // {
  //   path: "/admin/events-management",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminEventManagement />
  //     </AdminProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/admin/messages",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminMessages />
  //     </AdminProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/admin/posts",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminPosts />
  //     </AdminProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/admin/settings",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminSettings />
  //     </AdminProtectedRoute>
  //   ),
  // },

  // {
  //   path: "/admin/services/edit/:id",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminEditServices />
  //     </AdminProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/admin/services/new/",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminCreateService />
  //     </AdminProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/admin/course/new/",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminCreateCourse />
  //     </AdminProtectedRoute>
  //   ),
  // },

  // {
  //   path: "/admin/courses/edit/:id",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminEditCourses />
  //     </AdminProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/admin/case-study/new/",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminCreateCase />
  //     </AdminProtectedRoute>
  //   ),
  // },

  // {
  //   path: "/admin/case-study/edit/:id",
  //   element: (
  //     <AdminProtectedRoute>
  //       <AdminEditCaseStudy />
  //     </AdminProtectedRoute>
  //   ),
  // },
];

export default PagesData;
