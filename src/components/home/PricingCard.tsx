import { PricingTier } from '@/types';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const PricingCard = ({ name, price, description, features, highlighted }: PricingTier) => (
  <div className={`relative rounded-2xl p-px ${highlighted ? 'bg-gradient-to-b from-[#7f56da] to-transparent' : 'bg-white/5'}`}>
    <div className={`h-full rounded-2xl bg-black p-8 ${highlighted ? 'border-0' : 'border border-white/5'}`}>
      <h3 className="text-2xl font-medium text-white">{name}</h3>
      <p className="mt-4 text-gray-400">{description}</p>
      <div className="mt-6 flex items-baseline">
        <span className="mr-2 text-gray-400">From </span>
        <span className="text-4xl font-bold text-white">{price}</span>
        {price !== "Custom" && <span className="ml-2 text-gray-400">/project</span>}
      </div>
      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="mr-3 h-5 w-5 text-[#7f56da]" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        size="lg"
        className={`mt-8 w-full ${
          highlighted
            ? 'bg-[#7f56da] hover:bg-[#6a46c6]'
            : 'bg-white/10 hover:bg-white/20'
        }`}
      >
        Get Started
      </Button>
    </div>
  </div>
);
