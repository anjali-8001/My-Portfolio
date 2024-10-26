"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import HomeComponent from "@/components/Home/HomeComponent";
import Projects from "@/components/Home/Projects";
import SKills from "@/components/Home/SKills";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import axios from "axios";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    const res = await axios.post("/api/user");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
