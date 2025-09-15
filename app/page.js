import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/Featuresection";
import VisionMissionSection from "./components/VisionMissionSection";
import Choose from "./components/Choose";
import Scalable from "./components/Scalable";
import Real from "./components/Real";
import About from "./components/About";
import Cookies from "./components/Cookies";
export default function Home() {
  return (
    <div className= "bg-gray-50">
  
   <Navbar />
   <Cookies />
   <Hero /> 
   <FeaturesSection />
    <VisionMissionSection />
    <Choose/>
  <Scalable />
<Real/>
<About/>
    </div>
  );
}