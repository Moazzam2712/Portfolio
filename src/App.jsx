import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import HeaderPhone from "./components/HeaderPhone";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  console.log(menuOpen);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);
    console.log(ratio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return ratio<2.2 ? (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ): <em id="customMessage">Please Change the Ratio to View</em>
}

export default App;
