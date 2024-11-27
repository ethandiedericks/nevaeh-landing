import { PROJECTS } from '@/constants/data';
import { ProjectCard } from './ProjectCard';
import { Badge } from '../ui/badge';
import { Sparkles } from 'lucide-react';

export const Portfolio = () => (
  <section className="relative w-full py-24">
    {/* Background effects - using different patterns */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-900/20 blur-3xl" />
    </div>

    {/* Main content */}
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section header with unique styling */}
      <div className="mx-auto max-w-3xl text-center">
        <Badge 
          variant="secondary" 
          className="mb-8 animate-fade-in bg-white backdrop-blur-sm"
        >
          <Sparkles className="mr-2 h-3 w-3" /> Featured Projects
        </Badge>

        <h2 className="text-balance bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          Our Latest{' '}
          <span className="inline-block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text font-serif italic">
            Work
          </span>
        </h2>

        <p className="mt-6 text-balance text-lg text-gray-400">
          Discover how we&apos;ve helped businesses transform their digital presence 
          through innovative solutions and cutting-edge technology.
        </p>
      </div>

      {/* Projects grid with masonry-like layout */}
      <div className='flex justify-center'>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 max-w-5xl">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="mt-16 flex flex-col items-center justify-center gap-4">
        <p className="text-sm text-gray-500">
          We&apos;re constantly updating our portfolio with new projects
        </p>
      </div>
    </div>
  </section>
);

export default Portfolio;