// import MainLayout from "../layouts/MainLayout";

// import { IndexHero } from "../features/hero";
// import { IndexAbout } from "../features/about-us";
//import UserLogin from "../features/auth/UserLogin";
import { Container } from "@chakra-ui/react";
import UserAuthLayout from "../layouts/UserAuthLayout";
//import ForgotPassword from "../features/auth/ForgotPassword";
import ResetPassword from "../features/auth/ResetPassword";
// import { DonationCard } from "../features/donation";
// import { NewsLetterCard } from "../features/newsletter";
// import { IndexTestimonials } from "../features/testimonials/components";
// import { IndexEvents } from "../features/events";

const ResetPasswordPage = () => {
  return (
    <UserAuthLayout>
      <Container bg={"white"}>
        <ResetPassword />
      </Container>
    </UserAuthLayout>
  );
};

export default ResetPasswordPage;
