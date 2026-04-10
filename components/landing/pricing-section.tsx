"use client";

import { ArrowRight, Check } from "lucide-react";

const services = [
  {
    name: "Regulatory",
    description: "Complete regulatory pathway support",
    features: [
      "Patency check and assessment",
      "Dossier auditing and compilation",
      "File submission and follow-up",
      "Pharmacovigilance approval",
      "Pricing approval and appeals",
      "QCL approval management",
    ],
    cta: "Discuss regulatory needs",
    highlight: false,
  },
  {
    name: "Market Access",
    description: "Strategic market entry and growth",
    features: [
      "Market assessment and analysis",
      "Penetration strategy development",
      "Business model recommendations",
      "Customer mapping",
      "KOL engagement programs",
      "Tender management",
      "Pricing assessment and benchmark",
    ],
    cta: "Plan market entry",
    highlight: true,
  },
  {
    name: "Commercialization",
    description: "Full marketing and sales support",
    features: [
      "Brand awareness campaigns",
      "Demand creation programs",
      "Medical education (CME)",
      "Digital marketing campaigns",
      "Scientific event sponsorship",
      "HCP engagement activities",
      "Supply chain management",
      "Distribution partnerships",
    ],
    cta: "Launch your product",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="contact" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Our Solutions
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Comprehensive
            <br />
            <span className="text-stroke">services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            From regulatory submissions to market launch, we provide end-to-end solutions 
            tailored to your needs.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {services.map((service, idx) => (
            <div
              key={service.name}
              className={`relative p-8 lg:p-12 bg-background ${
                service.highlight ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
              }`}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Most Requested
                </span>
              )}

              {/* Service Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  service.highlight
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {service.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All services can be customized to your specific requirements.{" "}
          <a href="#contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Contact us to discuss your needs
          </a>
        </p>
      </div>
    </section>
  );
}
