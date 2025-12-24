import { useState, useRef } from 'react';

interface AccordionItemProps {
    question: string;
    answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`border-b border-slate-100 transition-all duration-300 ${isOpen ? 'bg-slate-50/50 rounded-2xl' : ''}`}>
            <button
                className="w-full flex items-center justify-between py-6 px-4 text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-black transition-colors ${isOpen ? 'text-teal-600' : 'text-slate-900 group-hover:text-teal-600'}`}>
                    {question}
                </span>
                <span className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'bg-teal-600 border-teal-600 text-white rotate-180' : 'border-slate-200 text-slate-400 group-hover:border-teal-200 group-hover:text-teal-600'}`}>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                }}
            >
                <div className="px-4 pb-8 text-slate-600 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

interface AccordionProps {
    items: AccordionItemProps[];
}

const Accordion = ({ items }: AccordionProps) => {
    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <AccordionItem key={index} {...item} />
            ))}
        </div>
    );
};

export default Accordion;
