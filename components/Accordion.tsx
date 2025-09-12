import React, { useState } from 'react';
import type { AccordionItemProps } from '../types';

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="info-card rounded-lg overflow-hidden shadow-md shadow-black/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center text-left py-4 px-5 transition-colors duration-300 ${isOpen ? 'bg-teal-500/20 text-white' : 'bg-transparent text-slate-100 hover:bg-white/5'}`}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 bg-transparent text-slate-200 border-t border-white/20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;