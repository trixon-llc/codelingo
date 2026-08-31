"use client";

import { useState, useEffect } from "react";
import { 
  Cpu, 
  Code2, 
  Printer, 
  Brain, 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Play, 
  Layers, 
  Radio, 
  ShieldAlert,
  Zap
} from "lucide-react";

interface HeroProps {
  onOpenModal: (category?: string) => void;
}

const HERO_DOMAINS = [
  {
    id: "iot",
    label: "IoT & Hardware",
    icon: Cpu,
    color: "cyan",
    badge: "PCB + Firmware",
    title: "ESP32-S3 Telemetry Gateway & Custom PCB",
    lines: [
      "// CodeLingo Embedded Hardware Matrix",
      "#include <WiFi.h>",
      "#include <Adafruit_MQTT.h>",
      "void setup() {",
      "  Serial.begin(115200);",
      "  init_custom_pcb_registers(); // ESP32 + STM32 RTOS",
      "  calibrate_lora_mesh(915.0); // 15km Range active",
      "}",
      "// Status: 4-Layer KiCad Board Fabricated | SMT Placed"
    ],
    metrics: { metric1: "4-Layer PCB", metric2: "ESP32-S3 + LoRa", metric3: "15km Range" }
  },
  {
    id: "3d",
    label: "3D Printing & Enclosures",
    icon: Printer,
    color: "emerald",
    badge: "SLA / CAD Prototyping",
    title: "Carbon-Fiber Reinforced Waterproof Enclosure",
    lines: [
      "; CodeLingo Industrial CAD/CAM G-Code Engine",
      "M104 S240 ; Set SLA Polymer Temperature",
      "G28 ; Home All Axes (Accuracy: 0.025mm)",
      "G1 Z0.150 F1200 ; Layer height calibration",
      "; Slicing IP68 Enclosure with Threaded Brass Inserts...",
      "; Mesh Integrity: 100% Solid | Tolerance: ±0.05mm",
      "// Status: SLA SLA Resin Cured | Ready for SMT Mounting"
    ],
    metrics: { metric1: "±0.05mm Precision", metric2: "IP68 SLA Plastic", metric3: "24h Prototyping" }
  },
  {
    id: "ml",
    label: "Machine Learning & AI",
    icon: Brain,
    color: "orange",
    badge: "Edge AI / Custom Models",
    title: "YOLOv8 Real-time Vision Model for Micro-Robotics",
    lines: [
      "# PyTorch Edge Quantization Pipeline",
      "import torch, tensorrt as trt",
      "model = load_custom_yolo('codelingo_vision_v4.pt')",
      "engine = trt_convert(model, precision='FP16')",
      "print(f'[AI Node] Latency: 4.2ms @ 120 FPS on Jetson Orin')",
      "// Accuracy: 99.4% mAP | Edge TPU Quantized",
      "// Status: Neural Network Deployed to Embedded Hardware"
    ],
    metrics: { metric1: "4.2ms Inference", metric2: "TensorRT Quantized", metric3: "99.4% mAP" }
  },
  {
    id: "web",
    label: "Web & Enterprise SaaS",
    icon: Code2,
    color: "amber",
    badge: "Next.js 16 + WebGL",
    title: "High-Frequency Dashboard & WebGL 3D Viewer",
    lines: [
      "// Next.js 16 App Router + WebAssembly Core",
      "import { Canvas } from '@react-three/fiber';",
      "export default function MissionControl() {",
      "  const telemtry = useWebSocket('wss://mesh.codelingo.tech');",
      "  return <TelemetryMesh data={telemtry} fps={120} />;",
      "}",
      "// Status: Edge-rendered globally in 18ms"
    ],
    metrics: { metric1: "120 FPS WebGL", metric2: "Next.js 16 Edge", metric3: "18ms Latency" }
  }
];

export default function Hero({ onOpenModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);

  const activeDomain = HERO_DOMAINS[activeTab];

  // Animated line counter effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLineIndex((prev) => (prev + 1) % activeDomain.lines.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [activeDomain]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-grid">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-600/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-blue-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>THE ALL-SPECTRUM TECH FORGE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              You Bring The Vision. <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-amber-400 bg-clip-text text-transparent drop-shadow-sm">
                CodeLingo Engineers <br />The Entire Spectrum.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
              From <span className="text-blue-400 font-semibold">custom PCB circuit design</span> &amp; embedded C++ firmware, to <span className="text-emerald-300 font-semibold">SLA 3D printed enclosures</span>, high-scale web platforms, and <span className="text-orange-400 font-semibold">Edge AI Machine Learning</span>. Submit your brief — our elite engineering mesh builds it flawlessly.
            </p>

            {/* Tech Domain Pills */}
            <div className="w-full flex flex-wrap gap-2 pt-2">
              {HERO_DOMAINS.map((domain, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setActiveTab(index)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold font-mono transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-900/30"
                        : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:bg-zinc-800"
                    }`}
                  >
                    <span>{domain.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenModal(activeDomain.id)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/40 transition-all duration-200 active:scale-95"
              >
                <span>Deploy Your Project Brief</span>
              </button>

              <a
                href="#estimator"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md font-semibold text-xs text-zinc-200 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-all"
              >
                <span>Calculate Scope &amp; Price</span>
              </a>
            </div>

            {/* Micro Metrics Banner */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-zinc-800/80 w-full max-w-xl">
              <div>
                <div className="text-xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-zinc-400">IP &amp; Source Owned</div>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-400 font-mono">±0.05mm</div>
                <div className="text-xs text-zinc-400">CAD/3D Precision</div>
              </div>
              <div>
                <div className="text-xl font-bold text-orange-400 font-mono">Turnkey</div>
                <div className="text-xs text-zinc-400">Hardware + Software</div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Simulated Cyber-Terminal */}
          <div className="lg:col-span-5 relative">
            
            {/* Terminal Window */}
            <div className="relative rounded-xl bg-[#0a0a0d] border border-zinc-800 shadow-2xl overflow-hidden glass-panel">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#060608] border-b border-zinc-800">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-zinc-400">
                    codelingo-forge-engine v4.8
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600/10 text-blue-400 border border-blue-600/20">
                    {activeDomain.badge}
                  </span>
                </div>
              </div>

              {/* Terminal Title Banner */}
              <div className="px-4 py-2.5 bg-[#0d0d12] border-b border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-300 font-mono flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                  {activeDomain.title}
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  Target SLA: 7 Days
                </span>
              </div>

              {/* Code/Telemetry Output Box */}
              <div className="p-4 font-mono text-xs space-y-2 min-h-[250px] bg-[#070709] text-zinc-300 overflow-x-auto">
                {activeDomain.lines.map((line, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-300 flex items-start gap-2 ${
                      idx === terminalLineIndex
                        ? "text-blue-300 font-bold bg-blue-600/10 -mx-2 px-2 py-0.5 rounded border-l-2 border-blue-500"
                        : line.startsWith("//") || line.startsWith(";") || line.startsWith("#")
                        ? "text-zinc-500 italic"
                        : line.includes("Status:")
                        ? "text-emerald-400 font-semibold"
                        : "text-zinc-300"
                    }`}
                  >
                    <span className="text-zinc-600 select-none w-5 text-right font-mono">
                      {idx + 1}
                    </span>
                    <span>{line}</span>
                  </div>
                ))}

                {/* Simulated compiling status bar */}
                <div className="pt-3 border-t border-zinc-800">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1.5">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <Terminal className="w-3.5 h-3.5" />
                      Build Pipeline Execution...
                    </span>
                    <span className="text-emerald-400 font-bold">100% VERIFIED</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-400 rounded-full w-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Terminal Footer Metrics */}
              <div className="px-4 py-3 bg-[#060608] border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-blue-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{activeDomain.metrics.metric1}</span>
                </div>
                <div className="text-zinc-400">{activeDomain.metrics.metric2}</div>
                <div className="text-orange-400">{activeDomain.metrics.metric3}</div>
              </div>

            </div>

            {/* Floating Decorative Badges */}
            <div className="absolute -bottom-5 -left-5 bg-[#0c0c0f] border border-zinc-800 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float hidden sm:flex">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Hardware + Software</div>
                <div className="text-[10px] text-zinc-400">Full In-House Synthesis</div>
              </div>
            </div>

            <div className="absolute -top-5 -right-5 bg-[#0c0c0f] border border-zinc-800 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float hidden sm:flex" style={{ animationDelay: '2s' }}>
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-400/40 flex items-center justify-center">
                <Brain className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Machine Learning</div>
                <div className="text-[10px] text-orange-300">PyTorch &amp; Edge TPU</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
