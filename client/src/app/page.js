import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import HomeComponent from "@/components/Home/HomeComponent";
import Navbar from "@/components/Home/Navbar";
import Projects from "@/components/Home/Projects";
import SKills from "@/components/Home/SKills";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div
      className="flex flex-col gap-5 w-[100vw] h-[100%] relative"
      style={{
        background:
          "linear-gradient(135deg, #000000, #0A0F29, #001B33, #0A0F29)",
      }}
    >
      <Navbar />
      <HomeComponent />
      <About />
      <SKills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
