"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Regulatory Solutions",
    description: "Complete regulatory dossier compilation, submission, and lifecycle maintenance. From patency checks to final approval in 6-9 months.",
    visual: "regulatory",
  },
  {
    number: "02",
    title: "Market Access",
    description: "Strategic market assessment, penetration planning, pricing benchmarks, and tender management to maximize your product reach.",
    visual: "market",
  },
  {
    number: "03",
    title: "Commercialization",
    description: "End-to-end marketing solutions including customer mapping, KOL engagement, and brand awareness campaigns.",
    visual: "commercial",
  },
  {
    number: "04",
    title: "Distribution Network",
    description: "Extensive partnerships with major regional distributors providing the best access and distribution capabilities across the GCC.",
    visual: "distribution",
  },
];

function RegulatoryVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="regGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* Document stack */}
      <rect x="50" y="30" width="100" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="55" y="25" width="100" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <rect x="60" y="20" width="100" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      
      {/* Lines on document */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="65"
          y={50 + i * 15}
          width={60 - i * 8}
          height="6"
          rx="2"
          fill="currentColor"
          opacity="0.2"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.6;0.2"
            dur="2s"
            begin={`${i * 0.2}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
      
      {/* Checkmark */}
      <circle cx="130" cy="110" r="15" fill="url(#regGradient)" opacity="0.2">
        <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M 122 110 L 128 116 L 140 104" fill="none" stroke="url(#regGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="stroke-dasharray" values="0 30;30 0" dur="1.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function MarketVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="marketGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* Chart background */}
      <rect x="30" y="20" width="140" height="110" rx="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      
      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="30" y1={45 + i * 25} x2="170" y2={45 + i * 25} stroke="currentColor" strokeWidth="1" opacity="0.1" />
      ))}
      
      {/* Rising bars */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={45 + i * 25}
          y={130 - (30 + i * 18)}
          width="15"
          height={30 + i * 18}
          fill="url(#marketGradient)"
          opacity="0.6"
        >
          <animate
            attributeName="height"
            values={`0;${30 + i * 18}`}
            dur="1.5s"
            begin={`${i * 0.15}s`}
            fill="freeze"
          />
          <animate
            attributeName="y"
            values={`130;${130 - (30 + i * 18)}`}
            dur="1.5s"
            begin={`${i * 0.15}s`}
            fill="freeze"
          />
        </rect>
      ))}
      
      {/* Trend arrow */}
      <path d="M 40 115 Q 100 90 160 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite" />
      </path>
      <polygon points="155,35 165,42 157,47" fill="currentColor" />
    </svg>
  );
}

function CommercialVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="commGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* Central hub */}
      <circle cx="100" cy="80" r="20" fill="url(#commGradient)" opacity="0.3">
        <animate attributeName="r" values="20;24;20" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="80" r="12" fill="currentColor" />
      
      {/* Orbiting elements - people/partners */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        const radius = 50;
        return (
          <g key={i}>
            <line
              x1="100"
              y1="80"
              x2={100 + Math.cos(angle) * radius}
              y2={80 + Math.sin(angle) * radius}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
            />
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="8"
              fill="none"
              stroke="url(#commGradient)"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="8;10;8"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="4"
              fill="currentColor"
              opacity="0.5"
            />
          </g>
        );
      })}
      
      {/* Pulse rings */}
      <circle cx="100" cy="80" r="30" fill="none" stroke="url(#commGradient)" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="25;55" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function DistributionVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="distGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* Source point */}
      <circle cx="40" cy="80" r="12" fill="url(#distGradient)" opacity="0.8">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Distribution paths */}
      {[0, 1, 2].map((i) => {
        const endY = 40 + i * 40;
        return (
          <g key={i}>
            <path
              d={`M 52 80 Q 100 ${80 + (endY - 80) * 0.3} 140 ${endY}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.3"
            />
            {/* Moving dot */}
            <circle r="4" fill="url(#distGradient)">
              <animateMotion
                dur={`${1.5 + i * 0.3}s`}
                repeatCount="indefinite"
                path={`M 52 80 Q 100 ${80 + (endY - 80) * 0.3} 140 ${endY}`}
              />
            </circle>
            {/* Destination */}
            <rect
              x="145"
              y={endY - 10}
              width="20"
              height="20"
              rx="3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="2s"
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        );
      })}
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "regulatory":
      return <RegulatoryVisual />;
    case "market":
      return <MarketVisual />;
    case "commercial":
      return <CommercialVisual />;
    case "distribution":
      return <DistributionVisual />;
    default:
      return <RegulatoryVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Our Services
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            End-to-end solutions.
            <br />
            <span className="text-muted-foreground">From molecule to market.</span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
