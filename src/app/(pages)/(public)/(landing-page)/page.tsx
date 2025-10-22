import {
  Faqs,
  FindYourFit,
  GetInTouchWithUs,
  HeroSection,
  Partners,
  Statistics,
  TheTeam,
} from "@/components";
import { Stack } from "@mantine/core";

const LandingPage = () => {
  return (
    <Stack gap={"lg"}>
      <HeroSection />
      <Statistics />
      <Partners />
      <FindYourFit />
      <Faqs />
      <TheTeam />
      <GetInTouchWithUs />
    </Stack>
  );
};

export default LandingPage;
