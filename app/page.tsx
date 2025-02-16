import { Features } from "@/components/Features.tsx/Features";
import { Footer } from "@/components/Footer/Footer";
import { ContactForm } from "@/components/Form/Form";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import { Pricing } from "@/components/Pricing/Pricing";
import Logos from "@/components/ui/Logotick";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Pricing />
      <ContactForm />
      <Footer />
    </>
  );
}
