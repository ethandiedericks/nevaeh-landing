import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Stars, Code, Boxes } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => (
  <section className="relative min-h-[calc(100vh-4rem)] w-full">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-b from-violet-600/30 via-purple-800/20 to-transparent blur-3xl" />
      </div>
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-900/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-violet-800/20 blur-3xl" />
    </div>

    <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <Badge variant="secondary" className="mb-8 animate-fade-in bg-white backdrop-blur-sm">
        <Stars className="mr-2 h-3 w-3" /> New Services Available
      </Badge>


      <h1 className="relative bg-gradient-to-b from-white to-gray-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
        Development Partner for
        <br />
        <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text">
          Established & Growing Businesses
        </span>
      </h1>

 
      <p className="mt-6 max-w-3xl text-center text-lg text-gray-400 sm:text-xl">
        Elevating South African businesses through premium development solutions
        at competitive rates. Transform your digital presence with our expertise.
      </p>


      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
        <Link
          href={"#services"}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-violet-600 px-8 transition-all hover:bg-violet-700"
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        
        <Link
          href={"#portfolio"}>
          <Button
            size="lg"
            variant="secondary"
            className="group border-violet-800/20 bg-white/15 px-8 backdrop-blur-sm  text-white hover:bg-white/10"
          >
            View Portfolio
            <Code className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        
      </div>


      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {[
          { label: 'Projects Delivered', value: '5+', icon: Boxes },
          { label: 'Client Satisfaction', value: '100%', icon: Stars },
          { label: 'Years Experience', value: '5+', icon: Code },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center justify-center rounded-lg border border-violet-800/20 bg-violet-950/10 p-6 backdrop-blur-sm">
            <stat.icon className="mb-2 h-6 w-6 text-violet-400" />
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;