import { PRICING_TIERS } from "@/constants/data";
import { PricingCard } from "./PricingCard";
import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";

export const WebsitePricing = () => (
  <section className="relative w-full py-24">
    {/* Background effects */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-900/20 blur-3xl" />
      <div className="absolute left-1/4 top-3/4 h-[400px] w-[400px] rounded-full bg-purple-900/20 blur-3xl" />
    </div>

    {/* Main content */}
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mx-auto max-w-3xl text-center">
        <Badge 
          variant="secondary" 
          className="mb-8 animate-fade-in bg-white backdrop-blur-sm"
        >
          <Sparkles className="mr-2 h-3 w-3" /> Website Pricing
        </Badge>

        <h2 className="text-balance bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          Choose the Perfect {' '}
          <span className="inline-block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text font-serif italic">
            Package
          </span>
        </h2>

        <p className="mt-6 text-balance text-lg text-gray-400">
          Our website development services offer tailored pricing options to 
          meet the unique needs of your project.
        </p>
      </div>

      {/* Pricing cards grid */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PRICING_TIERS.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
    </div>
  </section>
);