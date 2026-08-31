"use client";

import { useState } from "react";
import { 
  Calculator, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Printer, 
  Brain, 
  Globe, 
  Code2, 
  Check, 
  ArrowRight, 
  Sparkles,
  Layers
} from "lucide-react";

interface ProjectEstimatorProps {
  onOpenModalWithSpecs: (specs: { category: string; complexity: string; timeline: string; budget: string; addons: string[] }) => void;
}

const CATEGORIES = [
  { id: "web", name: "Web & SaaS", icon: Globe, basePrice: 850, baseDays: 5 },
  { id: "software", name: "Backend & APIs", icon: Code2, basePrice: 1200, baseDays: 7 },
  { id: "iot", name: "IoT & PCB Hardware", icon: Cpu, basePrice: 1600, baseDays: 10 },
  { id: "3d", name: "3D Print & CAD", icon: Printer, basePrice: 450, baseDays: 3 },
  { id: "ml", name: "Machine Learning / AI", icon: Brain, basePrice: 1900, baseDays: 8 },
  { id: "turnkey", name: "Full Turnkey Hardware+Software", icon: Layers, basePrice: 3400, baseDays: 14 }
];

const COMPLEXITY_LEVELS = [
  { id: "mvp", name: "Proof of Concept / Prototype", multiplier: 1.0, label: "Fast proof-of-concept prototype" },
  { id: "pro", name: "Production Grade System", multiplier: 1.6, label: "Full production build with testing" },
  { id: "enterprise", name: "Industrial / Enterprise Heavy Duty", multiplier: 2.4, label: "Redundant, military/industrial SLA" }
];

const TIMELINES = [
  { id: "standard", name: "Standard Delivery (10-14 Days)", multiplier: 1.0, icon: Clock },
  { id: "express", name: "Express Sprint (5-7 Days)", multiplier: 1.35, icon: Zap },
  { id: "rush", name: "Ultra-Rush 72h Sprint", multiplier: 1.8, icon: Sparkles }
];

const ADDONS = [
  { id: "gerber", name: "KiCad PCB Gerber + BOM Files", price: 250, domainLimit: ["iot", "turnkey"] },
  { id: "cad", name: "CAD Step / STL 3D Files", price: 200, domainLimit: ["3d", "iot", "turnkey"] },
  { id: "ip", name: "100% IP & Patent Ownership Deed", price: 0, defaultSelected: true },
  { id: "cloud", name: "Production Cloud / Edge Deployment", price: 350, domainLimit: ["web", "software", "ml", "turnkey"] },
  { id: "video", name: "Hardware Assembly & Video Walkthrough", price: 180 }
];

export default function ProjectEstimator({ onOpenModalWithSpecs }: ProjectEstimatorProps) {
  const [selectedCat, setSelectedCat] = useState("iot");
  const [selectedComplexity, setSelectedComplexity] = useState("pro");
  const [selectedTimeline, setSelectedTimeline] = useState("express");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["ip", "gerber", "video"]);

  const catObj = CATEGORIES.find((c) => c.id === selectedCat) || CATEGORIES[0];
  const compObj = COMPLEXITY_LEVELS.find((c) => c.id === selectedComplexity) || COMPLEXITY_LEVELS[1];
  const timeObj = TIMELINES.find((t) => t.id === selectedTimeline) || TIMELINES[1];

  // Calculate pricing
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const addon = ADDONS.find((a) => a.id === addonId);
    return acc + (addon ? addon.price : 0);
  }, 0);

  const estimatedPrice = Math.round((catObj.basePrice * compObj.multiplier * timeObj.multiplier) + addonsTotal);
  
  // Calculate delivery days
  const estimatedDays = Math.max(2, Math.round(catObj.baseDays / timeObj.multiplier));

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleLockIn = () => {
    onOpenModalWithSpecs({
      category: catObj.name,
      complexity: compObj.name,
      timeline: timeObj.name,
      budget: `$${estimatedPrice.toLocaleString()}`,
      addons: selectedAddons.map((id) => ADDONS.find((a) => a.id === id)?.name || id)
    });
  };

  return (
    <section id="estimator" className="py-24 relative bg-[#060608] border-t border-zinc-900 cyber-grid-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-blue-300 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5 text-blue-400" />
            <span>INTERACTIVE SCOPE &amp; COST CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Instant Engineering <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-orange-400 bg-clip-text text-transparent">
              Estimator &amp; Scope Configurator
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Configure your technical requirements, complexity level, and delivery timeline for an instant ballpark quote and engineering breakdown.
          </p>
        </div>

        {/* Main Estimator Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-8 space-y-8 glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-[#09090c]">
            
            {/* Step 1: Select Category */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-[10px]">1</span>
                <span>Select Tech Domain</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCat === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCat(cat.id)}
                      className={`p-3.5 rounded-md text-left border transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-900/30"
                          : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold">{cat.name}</div>
                        <div className={`text-[10px] font-mono ${isSelected ? "text-blue-100" : "text-zinc-400"}`}>From ${cat.basePrice}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Complexity */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px]">2</span>
                <span>Select Architecture Complexity</span>
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {COMPLEXITY_LEVELS.map((comp) => {
                  const isSelected = selectedComplexity === comp.id;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => setSelectedComplexity(comp.id)}
                      className={`p-3.5 rounded-md text-left border transition-all ${
                        isSelected
                          ? "bg-orange-600 text-white shadow-md shadow-orange-900/30"
                          : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                      }`}
                    >
                      <div className="text-xs font-bold mb-1">{comp.name}</div>
                      <div className={`text-[10px] ${isSelected ? "text-orange-100" : "text-zinc-400"}`}>{comp.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">3</span>
                <span>Select Delivery Pace</span>
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {TIMELINES.map((time) => {
                  const isSelected = selectedTimeline === time.id;
                  return (
                    <button
                      key={time.id}
                      onClick={() => setSelectedTimeline(time.id)}
                      className={`p-3.5 rounded-md text-left border transition-all ${
                        isSelected
                          ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/30"
                          : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                      }`}
                    >
                      <div className="text-xs font-bold">{time.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Deliverables & Addons */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px]">4</span>
                <span>Included Deliverables &amp; Add-ons</span>
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-md border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-zinc-900 border-blue-500/50 text-white"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? "bg-blue-600 border-blue-400 text-white" : "border-zinc-700"}`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono text-blue-400">
                        {addon.price === 0 ? "INCLUDED" : `+$${addon.price}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Sticky Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#09090c] border border-zinc-800 glass-card shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-xs font-mono text-zinc-400">Project Scope Estimate</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  SLAs GUARANTEED
                </span>
              </div>

              {/* Price & Turnaround Box */}
              <div className="space-y-2">
                <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">Estimated Investment</div>
                <div className="text-4xl font-extrabold text-white font-mono flex items-baseline gap-2">
                  <span>${estimatedPrice.toLocaleString()}</span>
                  <span className="text-xs font-normal text-zinc-400">USD</span>
                </div>
                <div className="text-xs text-blue-300 font-mono flex items-center gap-1.5 pt-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Estimated Delivery: ~{estimatedDays} Days</span>
                </div>
              </div>

              {/* Line item breakdown */}
              <div className="space-y-2 pt-2 text-xs border-t border-zinc-800 text-zinc-300 font-mono">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Domain Base ({catObj.name})</span>
                  <span>${catObj.basePrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Architecture Tier ({compObj.name.split(' ')[0]})</span>
                  <span>x{compObj.multiplier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Pace ({timeObj.name.split(' ')[0]})</span>
                  <span>x{timeObj.multiplier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Deliverables Add-ons</span>
                  <span>+${addonsTotal}</span>
                </div>
              </div>

              {/* Guarantee badges */}
              <div className="p-3 rounded-md bg-[#060608] border border-zinc-800 text-[11px] text-zinc-400 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Full IP Transfer Included</span>
                </div>
                <div>Includes CAD step files, KiCad gerbers, and raw code repos.</div>
              </div>

              {/* Lock-In Button */}
              <button
                onClick={handleLockIn}
                className="w-full py-3.5 rounded-md bg-blue-600 hover:bg-blue-500 font-bold text-white text-xs uppercase tracking-wider shadow-md shadow-blue-900/30 transition-all text-center"
              >
                Lock In Brief &amp; Get Quote
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
