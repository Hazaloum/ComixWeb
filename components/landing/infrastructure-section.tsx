"use client";

import { useEffect, useState, useRef } from "react";

const markets = [
  { country: "UAE", region: "Gulf", status: "Primary Hub" },
  { country: "Saudi Arabia", region: "Gulf", status: "Active" },
  { country: "Kuwait", region: "Lower Gulf", status: "Active" },
  { country: "Bahrain", region: "Lower Gulf", status: "Active" },
  { country: "Oman", region: "Lower Gulf", status: "Active" },
  { country: "Qatar", region: "Lower Gulf", status: "Active" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMarket, setActiveMarket] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMarket((prev) => (prev + 1) % markets.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Market Presence
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Regional
              <br />
              coverage.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Headquartered in the UAE with extensive presence across the GCC region. 
              Our network spans 6 markets with deep expertise in local regulatory requirements.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Markets covered</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years experience</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Products registered</div>
              </div>
            </div>
          </div>

          {/* Right: Market list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">GCC Network</span>
                <span className="flex items-center gap-2 text-xs font-mono text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  All markets active
                </span>
              </div>

              {/* Markets */}
              <div>
                {markets.map((market, index) => (
                  <div
                    key={market.country}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeMarket === index ? "bg-foreground/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span 
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          activeMarket === index ? "bg-foreground" : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{market.country}</div>
                        <div className="text-sm text-muted-foreground">{market.region}</div>
                      </div>
                    </div>
                    <span className={`font-mono text-sm ${market.status === "Primary Hub" ? "text-emerald-600" : "text-muted-foreground"}`}>
                      {market.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
