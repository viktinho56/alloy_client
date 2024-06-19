// import MainLayout from "../layouts/MainLayout";

// import { IndexHero } from "../features/hero";
// import { IndexAbout } from "../features/about-us";
//import UserLogin from "../features/auth/UserLogin";
import { Container } from "@chakra-ui/react";
import UserAuthLayout from "../layouts/UserAuthLayout";
//import OtpSetup from "../features/auth/OtpSetup";
import Otp from "../features/auth/Otp";
// import { DonationCard } from "../features/donation";
// import { NewsLetterCard } from "../features/newsletter";
// import { IndexTestimonials } from "../features/testimonials/components";
// import { IndexEvents } from "../features/events";

const OtpPage = () => {
  return (
    <UserAuthLayout>
      <Container>
        <Otp />
      </Container>
    </UserAuthLayout>
  );
};

export default OtpPage;
