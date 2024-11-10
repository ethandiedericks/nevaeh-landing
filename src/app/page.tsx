import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { Portfolio } from "@/components/home/Portfolio";
import { Services } from "@/components/home/Services";
import { Footer } from "@/components/layout/Footer";
import { Skills } from "@/components/home/Skills";
import { WebsitePricing } from "@/components/home/WebsitePricing";
import { MobileAppPricing } from "@/components/home/MobileAppPricing";
import { ContactForm } from "@/components/home/ContactForm";
import { Faq } from "@/components/home/Faq";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen text-white">
        <Navbar />
        <Hero />
        <Services />
        <Skills />
        <Portfolio />
        <WebsitePricing />
        <MobileAppPricing />
        <Faq/>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}