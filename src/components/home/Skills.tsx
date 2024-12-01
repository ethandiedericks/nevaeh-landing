import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/constants/data";
import { SkillCard } from "@/components/home/SkillCard";
import { Sparkles } from "lucide-react";


// Enhanced Skills Section
export const Skills = () => (
  <section className="relative w-full py-24">
    {/* Background effects */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-900/20 blur-3xl" />
    </div>

    {/* Main content */}
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mx-auto max-w-3xl text-center">
        <Badge 
          variant="secondary" 
          className="mb-8 animate-fade-in bg-white backdrop-blur-sm"
        >
          <Sparkles className="mr-2 h-3 w-3" /> Technical Expertise
        </Badge>

        <h2 className="text-balance bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          Expertise You Can{' '}
          <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text">
            Trust
          </span>
        </h2>

        <p className="mt-6 text-balance text-lg text-gray-400">
          Our team leverages cutting-edge technologies and industry best practices 
          to create exceptional digital experiences that drive business growth.
        </p>
      </div>

      {/* Skills grid */}
      <div className="flex justify-center">
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      

      
    </div>
  </section>
);

export default Skills;