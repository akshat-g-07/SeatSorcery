import FAQSection from "./components/HomePageComps/FAQSection";
import FooterSection from "./components/HomePageComps/FooterSection";
import IntroSection from "./components/HomePageComps/IntroSection";
import ServicesSection from "./components/HomePageComps/ServicesSection";

export default function Home() {
  return (
    <>
      <IntroSection />
      <ServicesSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
