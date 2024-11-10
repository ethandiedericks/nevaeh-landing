import { Card } from "../ui/card";
import { Skill } from '@/types';

export const SkillCard = ({ name, icon: Icon, description, technologies }: Skill) => (
  <Card className="group relative overflow-hidden border-violet-800/20 bg-violet-950/10 p-8 transition-all duration-300 hover:border-violet-700/30 hover:bg-violet-950/20">
    {/* Hover gradient effect */}
    <div className="absolute inset-0 -z-10 translate-y-full rounded-2xl bg-gradient-to-t from-violet-600/20 to-transparent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
    
    {/* Icon with animated gradient background */}
    <div className="relative mb-6">
      <div className="relative z-10 inline-flex rounded-xl bg-gradient-to-br from-violet-600/20 to-purple-900/20 p-3 ring-1 ring-violet-800/20 backdrop-blur-sm">
        <Icon className="h-6 w-6 text-violet-400" strokeWidth={1.5} />
      </div>
      <div className="absolute -inset-2 -z-[1] animate-pulse rounded-[20px] bg-violet-600/20 blur-xl transition-all group-hover:bg-violet-500/20" />
    </div>

    {/* Content */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-violet-200">
        {name}
      </h3>
      
      <p className="text-gray-400 [text-wrap:balance]">
        {description}
      </p>

      {/* Technologies tags with improved styling */}
      <div className="flex flex-wrap gap-2 pt-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full border border-violet-800/20 bg-violet-950/50 px-3 py-1 text-sm text-violet-200 backdrop-blur-sm transition-colors group-hover:border-violet-700/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

   
  </Card>
);