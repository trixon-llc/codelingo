"use client";

import { useState, useEffect } from "react";
import { Cpu, Terminal, Layers, Printer, Brain, Code, Menu, X, ArrowRight, Zap, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenModal: (category?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060608]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 via-blue-600 to-orange-500 p-[1px] shadow-lg shadow-blue-900/40 group-hover:shadow-blue-600/50 transition-all">
              <div className="w-full h-full bg-[#09090c] rounded-[7px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-mono">
                Code<span className="text-blue-400">Lingo</span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                  Engine
                </span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider">
                Full-Spectrum Tech Forge
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-[#0c0c0f]/90 p-1.5 rounded-xl border border-zinc-800/80 backdrop-blur-md">
            <a
              href="#capabilities"
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-blue-400 hover:bg-zinc-800/60 rounded-lg transition-all flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              Capabilities
            </a>
            <a
              href="#telemetry"
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-blue-400 hover:bg-zinc-800/60 rounded-lg transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              Live Telemetry
            </a>
            <a
              href="#estimator"
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-blue-400 hover:bg-zinc-800/60 rounded-lg transition-all flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-orange-400" />
              Scope Calculator
            </a>
            <a
              href="#showcase"
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-blue-400 hover:bg-zinc-800/60 rounded-lg transition-all flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              Showcase
            </a>
            <a
              href="#pipeline"
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-blue-400 hover:bg-zinc-800/60 rounded-lg transition-all flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              Process
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Dev Mesh Active (1,420 Nodes)
            </div>

            <button
              onClick={() => onOpenModal()}
              className="px-4 py-2 rounded-md font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-900/30 active:scale-95"
            >
              Submit Tech Brief
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08080a]/95 backdrop-blur-xl border-b border-zinc-800 px-4 pt-4 pb-6 mt-2 space-y-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Global Mesh: ONLINE (1,420 Active Nodes)
          </div>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm text-zinc-200 hover:bg-blue-600/10 hover:text-blue-400"
          >
            Capabilities
          </a>
          <a
            href="#telemetry"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm text-zinc-200 hover:bg-blue-600/10 hover:text-blue-400"
          >
            Live Telemetry Simulator
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm text-zinc-200 hover:bg-blue-600/10 hover:text-blue-400"
          >
            Interactive Scope Calculator
          </a>
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm text-zinc-200 hover:bg-blue-600/10 hover:text-blue-400"
          >
            Portfolio Showcase
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="w-full mt-2 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 font-semibold text-white text-sm transition-all shadow-md shadow-blue-900/30"
          >
            Submit Tech Brief
          </button>
        </div>
      )}
    </header>
  );
}
