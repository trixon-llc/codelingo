"use client";

import { Terminal, Cpu, ShieldCheck, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040406] text-zinc-400 text-xs border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 font-mono font-bold">
                CL
              </div>
              <span className="text-lg font-bold text-white font-mono">
                Code<span className="text-cyan-400">Lingo</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs max-w-sm leading-relaxed">
              The premier all-spectrum engineering engine. We turn technical briefs into verified websites, low-level software, custom PCB hardware, SLA 3D prints, and Edge AI models.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Global Dev Mesh: 1,420 Active Nodes</span>
            </div>
          </div>

          {/* Column 1: Capabilities */}
          <div className="space-y-3">
            <h4 className="text-zinc-200 font-bold font-mono text-xs uppercase">Capabilities</h4>
            <ul className="space-y-2">
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">IoT &amp; PCB Circuit Design</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">SLA 3D Printing &amp; CAD</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Edge AI &amp; PyTorch Models</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Next.js Web Applications</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Rust Microservice Architecture</a></li>
            </ul>
          </div>

          {/* Column 2: Tools & Calculators */}
          <div className="space-y-3">
            <h4 className="text-zinc-200 font-bold font-mono text-xs uppercase">Tools &amp; Demos</h4>
            <ul className="space-y-2">
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">Scope &amp; Budget Calculator</a></li>
              <li><a href="#telemetry" className="hover:text-cyan-400 transition-colors">PCB Logic Telemetry Simulator</a></li>
              <li><a href="#telemetry" className="hover:text-cyan-400 transition-colors">3D Layer G-Code Slicer</a></li>
              <li><a href="#showcase" className="hover:text-cyan-400 transition-colors">Project Portfolio Showcase</a></li>
              <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">4-Phase Execution Pipeline</a></li>
            </ul>
          </div>

          {/* Column 3: Guarantees */}
          <div className="space-y-3">
            <h4 className="text-zinc-200 font-bold font-mono text-xs uppercase">Guarantees</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-1.5 text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% IP &amp; Source Ownership</span>
              </li>
              <li><span>Mutual NDA Standard</span></li>
              <li><span>±0.05mm CAD Tolerances</span></li>
              <li><span>Zero-Defect Code SLA</span></li>
            </ul>
          </div>

        </div>

        {/* Tech Stack Badges */}
        <div className="pt-8 border-t border-zinc-900 flex flex-wrap gap-2 justify-center font-mono text-[10px] text-zinc-400">
          <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">ESP32-S3</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">KiCad PCB</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">SLA UV Resin</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">Next.js 16</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">React 19</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">PyTorch INT8</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">NVIDIA TensorRT</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">Rust Tokio</span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">FreeRTOS</span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} CodeLingo Inc. All rights reserved. Built for extreme technical execution.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all flex items-center gap-1 font-mono text-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
