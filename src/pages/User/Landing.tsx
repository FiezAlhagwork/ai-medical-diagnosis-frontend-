
import HeroSection from "../../components/landing/HeroSection";
import StatsSection from "../../components/landing/StatsSection";
import MedicalSolutionSection from "../../components/landing/MedicalSolutionSection";
import SpecialtySection from "../../components/landing/SpecialtySection";
import DistinguishedDoctorsSection from "../../components/landing/DistinguishedDoctorsSection";


const Landing = () => {



  return (
    <main className="min-h-[calc(100vh-88.8px)] ">
      <HeroSection />
      <StatsSection />
      <MedicalSolutionSection />
      <SpecialtySection />
      <DistinguishedDoctorsSection />

    </main>
  );
};

export default Landing;
