import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import NowBuilding from "./components/NowBuilding";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";
import KonamiEasterEgg from "./components/KonamiEasterEgg";

export default function App() {
  return (
    <div className="bg-primary-bg text-primary">
      <LoadingScreen />
      <ScrollProgress />
      <div className="site-atmosphere" />
      <div className="scanline" />
      <CustomCursor />
      <KonamiEasterEgg />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Skills />
        <Stats />
        <NowBuilding />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
