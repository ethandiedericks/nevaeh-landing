import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES } from "@/constants/data";
import { ServiceCard } from "./ServiceCard";
import Link from "next/link";

export const Services = () => (
  <section className="relative w-full py-24" id="services">
    {/* Background gradients */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent blur-3xl" />
      <div className="absolute right-0 h-96 w-96 rounded-full bg-violet-900/20 blur-3xl" />
    </div>

    {/* Content container */}
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mx-auto max-w-3xl text-center">
        <Badge 
          variant="secondary" 
          className="mb-8 animate-fade-in bg-white backdrop-blur-sm"
        >
          <Sparkles className="mr-2 h-3 w-3" /> Our Services
        </Badge>

        <h2 className="text-balance bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          We Are Here To Take Web Development{' '}
          <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text">
            Off Your Chest
          </span>
        </h2>

        <p className="mt-6 text-balance text-lg text-gray-400">
          Let us handle the complexities of web development while you focus on growing your business. 
          Our expert team delivers solutions that exceed expectations.
        </p>
      </div>

      {/* Services grid */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* CTA section */}
      <div className="mt-16 flex flex-col items-center justify-center gap-6">
        <Link
          href={"#contact"}
        >
          <Button
            size="lg"
            className="group bg-violet-600 px-8 hover:bg-violet-700"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        
        <p className="text-sm text-gray-500">
          Free consultation • No commitment required
        </p>
      </div>
    </div>
  </section>
);

export default Services;