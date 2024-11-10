import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types';

export const ProjectCard = ({ title, description, imageUrl, link }: Project) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white/5 transition-all hover:bg-white/[0.075]">
    <Image
      src={imageUrl}
      alt={title}
      width={400}
      height={300}
      className="w-full h-full object-cover transition-transform group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="mb-2 text-xl font-medium text-white">{title}</h3>
        <p className="mb-4 text-sm text-gray-300">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
        >
          View Project
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);