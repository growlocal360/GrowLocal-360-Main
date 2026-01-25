import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Features from "@/components/Features";
import JobSnaps from "@/components/JobSnaps";
import HowItWorks from "@/components/HowItWorks";
import Showcase from "@/components/Showcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Industries />
      <Features />
      <JobSnaps />
      <HowItWorks />
      <Showcase />
      <Footer />
    </main>
  );
}
