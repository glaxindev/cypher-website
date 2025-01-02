import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <div className="bg-[#121212] min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
