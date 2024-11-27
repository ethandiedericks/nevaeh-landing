import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { FAQ } from '@/constants/data';
import { Sparkles } from 'lucide-react';

export const Faq = () => (
  <section className="relative w-full px-4 py-24 sm:px-6 lg:px-8">
    {/* Background gradient */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent blur-3xl" />

    {/* Content container */}
    <div className="relative mx-auto max-w-[85rem]">
    <h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Frequently Asked{' '}
        <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-xl text-gray-400">
        Get answers to the most common questions about our services
      </p>

      <div className="mx-auto mt-12 max-w-2xl">
        <Accordion type="single" collapsible>
          {FAQ.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="flex items-center justify-between w-full rounded-xl bg-gradient-to-r from-violet-600/10 to-purple-900/10 p-4 text-left text-white hover:from-violet-600/20 hover:to-purple-900/20">
                <Sparkles className="mr-2 h-5 w-5 text-violet-400" />
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 text-gray-400 bg-violet-900/10 rounded-b-xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
