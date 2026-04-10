"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "I",
    title: "Patency Check & Audit",
    description: "We conduct thorough patency checks and dossier auditing to ensure regulatory compliance from the start.",
    timeline: "Initial Assessment",
  },
  {
    number: "II",
    title: "File Submission & Review",
    description: "Complete file checking, submission to regulatory authorities, and pharmacovigilance approval process.",
    timeline: "2-4 Months",
  },
  {
    number: "III",
    title: "Pricing & QCL Approval",
    description: "Navigate pricing approval, appeal processes, and Quality Control Laboratory approval seamlessly.",
    timeline: "2-3 Months",
  },
  {
    number: "IV",
    title: "Final Approval & Launch",
    description: "Receive final market authorization and launch your product with our commercialization support.",
    timeline: "1-2 Months",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            Regulatory Process
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            6-9 months.
            <br />
            <span className="text-background/50">From dossier to market.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl text-background/30">{step.number}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Progress indicator */}
                    {activeStep === index && (
                      <div className="mt-4 h-px bg-background/20 overflow-hidden">
                        <div 
                          className="h-full bg-background w-0"
                          style={{
                            animation: 'progress 5s linear forwards'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Timeline display */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-background/10 overflow-hidden">
              {/* Window header */}
              <div className="px-6 py-4 border-b border-background/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                </div>
                <span className="text-xs font-mono text-background/40">regulatory-timeline.md</span>
              </div>

              {/* Timeline content */}
              <div className="p-8 min-h-[280px]">
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div 
                      key={step.number}
                      className={`flex items-center gap-4 transition-all duration-500 ${
                        index <= activeStep ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                        index <= activeStep ? "bg-background border-background" : "border-background/30"
                      }`} />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{step.title}</div>
                        <div className="text-xs text-background/50">{step.timeline}</div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`absolute left-[23px] top-[28px] w-0.5 h-8 transition-colors duration-300 ${
                          index < activeStep ? "bg-background" : "bg-background/20"
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-background/10">
                  <div className="text-4xl font-display mb-2">6-9 months</div>
                  <div className="text-sm text-background/50">Average time to market authorization</div>
                </div>
              </div>

              {/* Status */}
              <div className="px-6 py-4 border-t border-background/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-background/40">Fast-track available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
