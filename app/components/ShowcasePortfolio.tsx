"use client";

import { useState } from "react";
import { 
  Sparkles, 
  ExternalLink, 
  Cpu, 
  Printer, 
  Brain, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Code 
} from "lucide-react";

interface ShowcasePortfolioProps {
  onOpenModal: (category?: string) => void;
}

const PROJECTS = [
  {
    id: "agritech",
    title: "Smart Agritech Sensor Mesh Node",
    category: "IoT + 3D Print + Web App",
    imageBg: "from-cyan-900/40 to-emerald-950/60",
    glowColor: "border-cyan-500/40",
    badge: "Hybrid Hardware/Software",
    summary: "Long-range solar-powered soil moisture and temperature node with 15km LoRa mesh connectivity and IP68 resin enclosure.",
    delivered: ["Custom 4-Layer PCB Schematic", "SLA Waterproof Enclosure", "ESP32 C++ Firmware", "Next.js Fleet Dashboard"],
    metrics: "15km Range | 2-Yr Battery | 14-Day Delivery",
    codeSnippet: `// Soil Telemetry Packet
struct SoilNodePacket {
  uint32_t node_id;
  float moisture_vwc;
  float soil_temp_c;
  uint16_t battery_mv;
};`
  },
  {
    id: "drone",
    title: "Autonomous Drone Vision Module",
    category: "AI/ML + Embedded Electronics",
    imageBg: "from-orange-950/40 to-blue-950/60",
    glowColor: "border-orange-500/40",
    badge: "Edge AI + CAD Shell",
    summary: "High-speed computer vision gimbal unit running real-time YOLOv8 object tracking at 120 FPS directly on hardware.",
    delivered: ["NVIDIA Jetson Orin Carrier PCB", "3D Carbon-Fiber Shell", "TensorRT INT8 Quantized Model", "Python SDK"],
    metrics: "120 FPS Vision | 4.1ms Latency | Zero Heat Throttling",
    codeSnippet: `# Edge Inference Loop
results = jetson_engine.infer(frame_raw)
for obj in results.detections:
    pid_gimbal.track(obj.centroid_x, obj.centroid_y)`
  },
  {
    id: "hft",
    title: "High-Frequency Order Engine",
    category: "Software & WebGL Dashboard",
    imageBg: "from-amber-900/40 to-red-950/60",
    glowColor: "border-amber-500/40",
    badge: "Rust + Next.js 16",
    summary: "Ultra low-latency financial order matching system capable of processing 250,000 requests per second with real-time 3D WebGL charts.",
    delivered: ["Tokio Async Rust Microservice", "PostgreSQL + Redis Cache", "Next.js 16 WebGL Dashboard", "WebSocket API"],
    metrics: "0.8ms p99 Latency | 250k RPS | 100% Uptime",
    codeSnippet: `pub async function process_fill(order: Order) -> Result<FillReport> {
    let matched = BOOK.lock().await.match_order(order)?;
    BROADCAST.send(matched.clone())?;
    Ok(matched)
}`
  },
  {
    id: "bionic",
    title: "Bionic Prosthetic Hand Prototype",
    category: "3D Printing + Embedded Hardware",
    imageBg: "from-blue-900/40 to-indigo-950/60",
    glowColor: "border-blue-500/40",
    badge: "Medical CAD + C++ RTOS",
    summary: "Multi-material SLA printed prosthetic hand powered by EMG muscle sensors and micro-servo motors running custom gesture firmware.",
    delivered: ["Anatomical CAD 3D Assemblies", "Custom EMG Sensor PCB", "Micro-servo Control Firmware", "Calibration Desktop App"],
    metrics: "12 Gesture Modes | 0.05mm CAD Fit | 350g Weight",
    codeSnippet: `// EMG Muscle Signal Filter
void ProcessEMG() {
  uint16_t emg_val = analogRead(EMG_PIN);
  if (emg_val > GESTURE_THRESHOLD) {
    servo_grip_close();
  }
}`
  }
];

export default function ShowcasePortfolio({ onOpenModal }: ShowcasePortfolioProps) {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  return (
    <section id="showcase" className="py-24 relative bg-[#060608] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERED BY CODELINGO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Proof of Excellence: <br />
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
              Turnkey Projects Delivered
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Explore recent physical hardware builds, machine learning models, and deep software platforms engineered from concept to physical delivery.
          </p>
        </div>

        {/* Project Selector Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {PROJECTS.map((proj) => {
            const isSelected = activeProject.id === proj.id;
            return (
              <div
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 glass-card flex flex-col justify-between ${
                  isSelected ? `border ${proj.glowColor} bg-[#09090c] shadow-xl shadow-black/60` : "hover:border-zinc-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 text-blue-300 border border-zinc-800">
                      {proj.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{proj.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">{proj.summary}</p>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-semibold">{proj.metrics}</span>
                  <span className="text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect Specs <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Project Detailed View Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#09090c] border border-zinc-800 glass-panel shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs font-mono text-blue-400">{activeProject.category}</span>
              <h3 className="text-2xl font-bold text-white">{activeProject.title}</h3>
            </div>
            <button
              onClick={() => onOpenModal(activeProject.id)}
              className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 font-bold text-white text-xs shadow-md shadow-blue-900/30 transition-all text-center"
            >
              Build Similar Project
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Deliverables Checklist */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold font-mono text-zinc-300 uppercase tracking-wider">
                Full-Stack Deliverables Provided to Client:
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {activeProject.delivered.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#050507] border border-zinc-800 font-mono text-xs overflow-hidden">
                <div className="px-4 py-2 bg-[#08080b] border-b border-zinc-800 text-zinc-400 text-[11px] flex justify-between">
                  <span>Hardware &amp; Software Artifact Snippet</span>
                  <span className="text-cyan-400">VERIFIED CODE</span>
                </div>
                <pre className="p-4 text-zinc-300 overflow-x-auto leading-relaxed">
                  <code>{activeProject.codeSnippet}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
