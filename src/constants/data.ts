import { Flag, Wrench, Rocket } from 'lucide-react';
import { Project, Service, Skill, PricingTier, MobileAppTier, FAQs } from '@/types';
import { Code, Palette, Smartphone, Terminal, Database, Cloud } from 'lucide-react';

export const SERVICES: Service[] = [
  {
    icon: Flag,
    title: "Kickoff",
    description: "At project start, we'll have a first touchpoint to go through your Figma website designs."
  },
  {
    icon: Wrench,
    title: "Development",
    description: "We'll build your site in Framer based on your designs and stay connected on Slack."
  },
  {
    icon: Rocket,
    title: "Delivery",
    description: "After build completion, we'll hand you over your pixel perfect site and support you with going live."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Joubert Psychology",
    description: "A website providing accessible information about the services offered by Joubert Psychology while establishing credibility and trustworthiness with prospective clients",
    technologies: [
      "Next.js, React"
    ],
    imageUrl: "/joubert_psychology.png",
    link: "https://joubert-psychology-nextjs.vercel.app/"
  },
  {
    title: "John B. Scott Attorneys",
    description: "A mobile app designed to streamline and automate the client onboarding consultation process.",
    technologies: [
      "Next.js, React"
    ],
    imageUrl: "/jbsa.png",
    link: "https://play.google.com/store/apps/details?id=com.johnbscottattorneys.jbsaapp&hl=en"
  }
];


export const SKILLS: Skill[] = [
    {
      name: "Frontend Development",
      icon: Code,
      description: "Building responsive, performant user interfaces with modern frameworks",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Creating intuitive and beautiful user experiences",
      technologies: ["Figma"]
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      description: "Developing cross-platform mobile applications",
      technologies: ["Flutter", "Flutterflow", "iOS", "Android", "Mobile UI/UX"]
    },
    {
      name: "Backend Development",
      icon: Terminal,
      description: "Building scalable server-side applications",
      technologies: ["Node.js", "Django", "REST APIs"]
    },
    {
      name: "Database Design",
      icon: Database,
      description: "Designing and optimizing database structures",
      technologies: ["PostgreSQL", "MySQL", "Prisma"]
    },
    {
      name: "Cloud Services",
      icon: Cloud,
      description: "Deploying and managing cloud infrastructure",
      technologies: ["Vercel", "Docker", "CI/CD", "Serverless"]
    }
  ];
  
  export const PRICING_TIERS: PricingTier[] = [
    {
      name: "Basic Website",
      price: "R3,000",
      description: "Perfect for small businesses needing a professional web presence",
      features: [
        "5-7 pages custom website",
        "Mobile responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "2 rounds of revisions",
        "2 weeks delivery"
      ]
    },
    {
      name: "Advanced Platform",
      price: "R12,000",
      description: "Ideal for businesses needing advanced functionality",
      highlighted: true,
      features: [
        "10-15 pages custom website",
        "Advanced animations",
        "CMS integration",
        "Advanced SEO optimization",
        "Payment functionality",
        "3 rounds of revisions",
        "4 weeks delivery"
      ]
    },
    {
      name: "Enterprise Solution",
      price: "R30,000",
      description: "For large-scale applications with specific requirements",
      features: [
        "Custom pages & features",
        "Custom integrations",
        "High-performance optimization",
        "Advanced security features",
        "Unlimited revisions",
        "Custom timeline",
        "Priority support"
      ]
    }
  ];

  export const MOBILE_APP_TIERS: MobileAppTier[] = [
    {
      name: "Basic App",
      price: "R20,000",
      description: "Perfect for startups and small businesses",
      features: [
        "1 native mobile platform (iOS or Android)",
        "Basic UI design",
        "Fundamental features",
        "1 month delivery",
        "1 year support"
      ]
    },
    {
      name: "Advanced App",
      price: "R40,000",
      description: "Ideal for growing businesses",
      highlighted: true,
      features: [
        "Cross-platform (iOS and Android)",
        "Custom UI design",
        "Advanced features",
        "2 months delivery",
        "2 years support"
      ]
    },
    {
      name: "Enterprise App",
      price: "R80,000",
      description: "For large-scale, complex applications",
      features: [
        "Fully custom development",
        "Complex integrations",
        "Scalable architecture",
        "Custom timeline",
        "Dedicated support"
      ]
    }
  ];

  export const FAQ: FAQs[] = [
    {
      question: 'What is the typical turnaround time for a project?',
      answer: 'The turnaround time can vary depending on the project scope and complexity. For a basic website, the typical delivery time is 2-4 weeks. For more advanced projects, it can take 4-8 weeks.'
    },
    {
      question: 'Do you offer maintenance and support after the project is delivered?',
      answer: 'Yes, we provide maintenance and support services to ensure your website or application stays up-to-date and functioning properly. The duration and terms of the support can be discussed and agreed upon during the project planning phase.'
    },
    {
      question: "Can you integrate third-party services and APIs into the project?",
      answer: "Absolutely. We have extensive experience integrating various third-party services and APIs, such as CRMs, e-commerce platforms, analytics tools, and payment gateways. We'll work with you to ensure a seamless integration."
    },
    {
      question: 'Do you provide design services, or do you only handle the development?',
      answer: 'We offer both design and development services. Our team of designers and developers work closely together to create a cohesive and visually appealing solution that meets your requirements.'
    },
    {
      question: 'What is your approach to project management and communication?',
      answer: 'We believe in transparent and frequent communication throughout the project. We use agile methodologies to ensure smooth collaboration, with regular check-ins, progress updates, and opportunities for feedback and adjustments.'
    }
  ];