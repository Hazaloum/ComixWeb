"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import { ComixLogo } from "./comix-logo";

const footerLinks = {
  Services: [
    { name: "Regulatory Solutions", href: "#services" },
    { name: "Market Access", href: "#services" },
    { name: "Commercialization", href: "#services" },
    { name: "Distribution", href: "#services" },
  ],
  "Therapy Areas": [
    { name: "CNS", href: "#therapy-areas" },
    { name: "Cardiovascular", href: "#therapy-areas" },
    { name: "Pulmonology", href: "#therapy-areas" },
    { name: "Women&apos;s Health", href: "#therapy-areas" },
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Our Partners", href: "#partners" },
    { name: "Quality Assurance", href: "#quality" },
    { name: "Contact", href: "#contact" },
  ],
  Markets: [
    { name: "UAE", href: "#" },
    { name: "Saudi Arabia", href: "#" },
    { name: "Kuwait", href: "#" },
    { name: "Lower Gulf", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Email", href: "mailto:info@comixpharma.com" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-block mb-6">
                <ComixLogo className="text-foreground" size="default" />
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Your gateway to the Middle East healthcare market. Development, registration, 
                and distribution of pharmaceuticals across the GCC region.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2025 COMIX Pharmaceuticals. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              UAE | GCC Markets
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
