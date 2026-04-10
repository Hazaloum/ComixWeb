"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

const countries = [
  "UAE",
  "Saudi Arabia",
  "Kuwait",
  "Bahrain",
  "Qatar",
  "Oman",
  "Other",
];

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`,
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
              {/* Left — form */}
              <div className="flex-1 w-full">
                <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                  <span className="w-8 h-px bg-foreground/30" />
                  Get in Touch
                </span>
                <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-10 leading-[0.95]">
                  Ready to enter
                  <br />
                  the Middle East?
                </h2>

                {status === "success" ? (
                  <div className="flex flex-col items-start gap-4 py-8">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                    <p className="text-xl font-display">Message received.</p>
                    <p className="text-muted-foreground">
                      We'll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                          Company
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                          Market of Interest
                        </label>
                        <select
                          value={form.country}
                          onChange={(e) => setForm({ ...form, country: e.target.value })}
                          className="w-full bg-background border border-foreground/20 px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                        >
                          <option value="">Select a market</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-transparent border border-foreground/20 px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                        placeholder="Tell us about your product and what you're looking to achieve..."
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-500">
                        Something went wrong. Please email us directly at y.mahmoud@comixpharma.com
                      </p>
                    )}

                    <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={status === "loading"}
                        className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group disabled:opacity-50"
                      >
                        {status === "loading" ? "Sending..." : "Send Enquiry"}
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <a
                        href="/comix-profile.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          type="button"
                          size="lg"
                          variant="outline"
                          className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                        >
                          Download Profile
                        </Button>
                      </a>
                    </div>

                    <p className="text-xs font-mono text-muted-foreground">
                      UAE-based · GCC-wide coverage · Response within 24h
                    </p>
                  </form>
                )}
              </div>

              {/* Right — animation */}
              <div className="hidden lg:flex items-center justify-center w-[440px] h-[440px] shrink-0 -mr-16 self-center">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
