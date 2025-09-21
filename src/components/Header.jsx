
import { ArrowDownToLine, MessageSquareMore } from 'lucide-react';
import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-4 bg-black w-full">
      <div className="flex items-center gap-3 md:px-4 py-2">
        <img src="/img.png" alt="Menu Icon" className="md:h-10 md:w-10 w-8 h-8" />
        <img src="/logo-maven.png" alt="Mavenmagnet Logo" className="md:h-12 md:w-36 h-8 w-24" />
      </div>

      <div className="hidden lg:flex flex-col items-center justify-center">
        <span className="text-lg font-semibold text-white text-center bg-[#232323] px-6 py-2 ">
          EV Category Exploration <br /> Global | 2022–2023
        </span>
      </div>

      <div className="hidden md:flex items-center gap-6 px-4">
        <MessageSquareMore className="h-6 w-6 text-white" />
        <div className="flex items-center gap-1">
          <ArrowDownToLine className="h-6 w-6 text-white" />
          <span className="text-white text-sm mb-1 ">Export to PowerPoint</span>
        </div>
        <span className="text-white text-sm mb-1">Tutorial</span>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-semibold">
          M
        </div>
      </div>

      <div className="md:hidden flex items-center px-4">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-12 left-0 right-0 bg-black flex flex-col gap-4 p-4 md:hidden z-10">
          <div className="w-8 h-8 right-0 rounded-full bg-white flex items-center justify-center text-black font-semibold">
            M
          </div>
          <span className="text-white text-base mb-1">Ask to AI</span>  
          <span className="text-white text-base mb-1">Export to PowerPoint</span> 
          <span className="text-white text-base mb-1">Tutorial</span>
        </div>
      )}
    </header>
  );
};

export default Header;
