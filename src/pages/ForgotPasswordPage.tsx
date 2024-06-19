// import MainLayout from "../layouts/MainLayout";

// import { IndexHero } from "../features/hero";
// import { IndexAbout } from "../features/about-us";
//import UserLogin from "../features/auth/UserLogin";
import { Container } from "@chakra-ui/react";
import UserAuthLayout from "../layouts/UserAuthLayout";
import ForgotPassword from "../features/auth/ForgotPassword";
// import { DonationCard } from "../features/donation";
// import { NewsLetterCard } from "../features/newsletter";
// import { IndexTestimonials } from "../features/testimonials/components";
// import { IndexEvents } from "../features/events";

const ForgotPasswordPage = () => {
  return (
    <UserAuthLayout>
      <Container bg={"white"}>
        <ForgotPassword />
      </Container>
    </UserAuthLayout>
  );
};

export default ForgotPasswordPage;
