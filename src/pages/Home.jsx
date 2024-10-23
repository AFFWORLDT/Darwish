import useMetaTags from "../hooks/useMetaTags";
import AboutUs from "../ui/AboutUs";
import BeforeAfter from "../ui/BeforeAfter";
import Cta from "../ui/Cta";
import Faq from "../ui/Faq";
import Hero from "../ui/Hero";
import Services from "../ui/Services";

function Home() {
  useMetaTags(
    'Repairing Dubai Best Repairing Company in dubai',
    `Welcome to Best Repairing Dubai, Dubai's premier provider of top-quality cleaning and maintenance services. Explore our comprehensive solutions for residential and commercial needs.`,
    'Repairing Dubai,cleaning services Dubai,maintenance services Dubai,professional cleaning Dubai'
  )
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Cta />
      <BeforeAfter />
      <Faq />
    </>
  );
}

export default Home;
