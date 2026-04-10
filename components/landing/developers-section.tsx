"use client";

import { useState, useEffect, useRef } from "react";

const demandCreationTactics = [
  {
    label: "Product Differentiation",
    items: [
      "Face to Face Detailing",
      "Virtual meetings",
      "Key customer exposure to product key messages",
      "Group meetings and presentations",
    ],
  },
  {
    label: "Brand Awareness",
    items: [
      "Build up brand interest and advocates",
      "Partnerships with institutions",
      "Key account activities",
      "Digital presence campaigns",
    ],
  },
  {
    label: "Share of Voice",
    items: [
      "Maximize coverage and availability",
      "Participate in scientific events",
      "Sponsor major conferences",
      "Strategic media placements",
    ],
  },
  {
    label: "Education",
    items: [
      "Continuous scientific support for HCPs",
      "Sharing brand scientific data",
      "Continuous Medical Education (CME)",
      "Digital learning campaigns",
    ],
  },
];

const capabilities = [
  { 
    title: "Market Assessment", 
    description: "Deep market analysis and penetration strategy."
  },
  { 
    title: "KOL Engagement", 
    description: "Key opinion leader identification and partnerships."
  },
  { 
    title: "Tender Management", 
    description: "Complete tender process handling and submissions."
  },
  { 
    title: "Pricing Strategy", 
    description: "Competitive pricing assessment and benchmarking."
  },
];

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Demand Creation
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Strategic marketing.
              <br />
              <span className="text-muted-foreground">Measurable results.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Comprehensive demand creation tactics designed to build brand awareness, 
              engage healthcare professionals, and drive market adoption.
            </p>
            
            {/* Capabilities */}
            <div className="grid grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Tactics display */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Tabs */}
              <div className="flex items-center border-b border-foreground/10 overflow-x-auto">
                {demandCreationTactics.map((tactic, idx) => (
                  <button
                    key={tactic.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 lg:px-6 py-4 text-xs lg:text-sm font-mono transition-colors relative whitespace-nowrap ${
                      activeTab === idx
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tactic.label}
                    {activeTab === idx && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Content */}
              <div className="p-8 bg-foreground/[0.01] min-h-[280px]">
                <ul className="space-y-4">
                  {demandCreationTactics[activeTab].items.map((item, index) => (
                    <li 
                      key={item}
                      className="flex items-start gap-3 tactic-item"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Links */}
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a href="#contact" className="text-foreground hover:underline underline-offset-4">
                Discuss your strategy
              </a>
              <span className="text-foreground/20">|</span>
              <a href="#services" className="text-muted-foreground hover:text-foreground">
                View all services
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .tactic-item {
          opacity: 0;
          transform: translateX(-8px);
          animation: tacticReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes tacticReveal {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
