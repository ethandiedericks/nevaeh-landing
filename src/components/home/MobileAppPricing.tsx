import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import { MOBILE_APP_TIERS } from "@/constants/data";
import { PricingCard } from "./PricingCard";
import { Button } from "../ui/button";
import Link from "next/link";

export const MobileAppPricing = () => (
  <section className="relative w-full py-24">
    {/* Background effects */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-900/20 blur-3xl" />
    </div>

    {/* Main content */}
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mx-auto max-w-3xl text-center">
        <Badge 
          variant="secondary" 
          className="mb-8 animate-fade-in bg-white backdrop-blur-sm"
        >
          <Sparkles className="mr-2 h-3 w-3" /> Mobile App Pricing
        </Badge>

        <h2 className="text-balance bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          Bring Your Idea to Life
        </h2>

        <p className="mt-6 text-balance text-lg text-gray-400">
          Our mobile app development services offer flexible pricing options to 
          fit your budget and project needs.
        </p>
      </div>

      {/* Pricing cards grid */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {MOBILE_APP_TIERS.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link href={"#contact"}>
          <Button
            size="lg"
            className="mt-8 md:w-[300px] bg-[#7f56da] hover:bg-[#6a46c6]"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  </section>
);