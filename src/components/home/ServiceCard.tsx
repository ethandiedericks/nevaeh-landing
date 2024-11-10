import { Service } from "@/types";

export const ServiceCard = ({ icon: Icon, title, description }: Service) => (
  <div className="group relative overflow-hidden rounded-2xl border border-violet-800/20 bg-violet-950/10 p-8 transition-all duration-300 hover:border-violet-700/30 hover:bg-violet-950/20">
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 -z-10 translate-y-full rounded-2xl bg-gradient-to-t from-violet-600/20 to-transparent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
    
    {/* Icon container with gradient background */}
    <div className="relative mb-6 inline-flex rounded-xl bg-gradient-to-br from-violet-600/20 to-purple-900/20 p-3 ring-1 ring-violet-800/20 backdrop-blur-sm">
      <Icon className="h-6 w-6 text-violet-400" />
      <div className="absolute -inset-1 -z-10 animate-pulse rounded-xl bg-violet-600/20 blur-lg transition-all group-hover:bg-violet-500/20" />
    </div>

    {/* Content */}
    <h3 className="mb-3 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-violet-200">
      {title}
    </h3>
    <p className="text-gray-400 [text-wrap:balance]">{description}</p>

   
  </div>
);