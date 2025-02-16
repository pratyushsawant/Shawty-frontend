import { Creation } from "@/components/Creation/Creation";
import { Footer } from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Creation />
      <Footer />
    </div>
  );
}
