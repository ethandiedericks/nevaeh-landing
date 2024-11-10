import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { FAQ } from '@/constants/data';

export const Faq = () => (
  <section className="w-full px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-[85rem]">
      <h2 className="mx-auto max-w-4xl text-center text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
        Frequently Asked {' '}
        <span className="font-serif italic text-gray-500">Questions</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-xl text-gray-400">
        Get answers to the most common questions about our services
      </p>

      <div className="mx-auto mt-12 max-w-2xl">
        <Accordion type="single" collapsible>
          {FAQ.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="flex w-full items-center justify-between rounded-xl bg-white/5 p-4 text-left text-white hover:bg-white/10">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="rounded-b-xl bg-white/5 p-4 text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);