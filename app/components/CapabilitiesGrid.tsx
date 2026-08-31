"use client";

import { useState } from "react";
import { 
  Globe, 
  Cpu, 
  Printer, 
  Brain, 
  Layers, 
  Workflow, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Code, 
  Settings,
  HardDrive,
  Activity
} from "lucide-react";

interface CapabilitiesGridProps {
  onOpenModal: (category?: string) => void;
}

const CAPABILITIES = [
  {
    id: "iot",
    title: "IoT & Embedded Hardware Systems",
    icon: Cpu,
    color: "from-blue-600 to-blue-800",
    glowColor: "border-blue-500/40",
    badge: "Hardware + Firmware",
    description: "Custom PCB circuit schematic & board design, component sourcing, SMT prototyping, and bare-metal/RTOS C++ embedded firmware.",
    specs: [
      "KiCad & Altium 4–8 Layer PCB Layouts",
      "ESP32-S3, STM32, Nordic nRF52, Raspberry Pi RP2040",
      "LoRaWAN, BLE 5.3, Zigbee & Cellular Mesh",
      "Bare-metal C++, FreeRTOS & Embedded Linux"
    ],
    sampleCode: `// ESP32-S3 Sensor Telemetry Loop
void TaskTelemetry(void *pvParameters) {
  for(;;) {
    float temp = read_precision_thermocouple();
    lora_mesh_broadcast(TEMP_TOPIC, &temp, sizeof(temp));
    vTaskDelay(pdMS_TO_TICKS(500));
  }
}`
  },
  {
    id: "3d",
    title: "3D Printing & Industrial Prototyping",
    icon: Printer,
    color: "from-emerald-500 to-teal-600",
    glowColor: "border-emerald-500/40",
    badge: "SLA / SLS / CAD",
    description: "Precision CAD enclosure modeling, high-resolution SLA resin prints, carbon-fiber FDM, and mechanical assemblies with brass heat-set inserts.",
    specs: [
      "Precision CAD/CAM modeling (±0.05mm tolerance)",
      "High-Temp Engineering SLA & Tough Carbon Fiber FDM",
      "IP67 Waterproof Enclosure & Gasket Integration",
      "Brass Heat-Set Threaded Inserts & Fastener Hardware"
    ],
    sampleCode: `; CodeLingo SLA Precision Slice Profile
[Layer Config]
Thickness = 0.025mm
Exposure_Time = 2.4s
Polymer_Density = High-Tough SLA 85D
Thermal_Expansion_Comp = 100.2%`
  },
  {
    id: "ml",
    title: "Machine Learning & Edge AI Models",
    icon: Brain,
    color: "from-orange-500 to-amber-600",
    glowColor: "border-orange-500/40",
    badge: "PyTorch & TensorRT",
    description: "Custom computer vision, object detection, LLM fine-tuning, and low-latency INT8 quantization deployed to NVIDIA Jetson & Edge TPUs.",
    specs: [
      "Custom Object Detection & Segmentation (YOLOv8/v10)",
      "TensorRT, ONNX Runtime & Edge TPU Quantization",
      "Custom LLM Fine-Tuning & Vector RAG Backends",
      "Embedded Real-time Signal Processing & Neural Filtering"
    ],
    sampleCode: `# PyTorch INT8 Edge Export
import torch, torch.quantization
model = CustomVisionNet().eval()
quant_model = torch.quantization.quantize_dynamic(
    model, {torch.nn.Linear}, dtype=torch.qint8
)
torch.onnx.export(quant_model, "edge_model.onnx")`
  },
  {
    id: "web",
    title: "Web Platforms & Next.js Ecosystems",
    icon: Globe,
    color: "from-amber-500 to-orange-600",
    glowColor: "border-amber-500/40",
    badge: "Frontend & Full-stack",
    description: "Modern, ultra-fast web applications, interactive 3D canvas viewers, real-time telemetry dashboards, and high-converting landing experiences.",
    specs: [
      "Next.js 16 App Router, React 19, TypeScript",
      "Interactive 3D Three.js / WebGL Visualizers",
      "Real-time WebSockets & Server-Sent Events",
      "Enterprise PWA & Sub-second Page Load Times"
    ],
    sampleCode: `// WebGL Realtime Telemetry Hook
export function useBoardStream(deviceIp: string) {
  const [data, setData] = useState<TelemetryPacket | null>(null);
  useEffect(() => {
    const ws = new WebSocket(\`wss://\${deviceIp}/stream\`);
    ws.onmessage = (e) => setData(JSON.parse(e.data));
    return () => ws.close();
  }, [deviceIp]);
  return data;
}`
  },
  {
    id: "software",
    title: "Deep Software Architecture & APIs",
    icon: HardDrive,
    color: "from-blue-600 to-cyan-600",
    glowColor: "border-blue-500/40",
    badge: "Rust / Go / Distributed",
    description: "Ultra-scalable microservices, high-frequency data pipelines, database engines, and cross-platform desktop/mobile companion apps.",
    specs: [
      "Rust & Go High-Performance Backend Microservices",
      "PostgreSQL, Redis, ClickHouse & Vector Databases",
      "gRPC, GraphQL & RESTful API Infrastructure",
      "Tauri / Electron Cross-Platform Desktop Control Panels"
    ],
    sampleCode: `// Rust High-Frequency Message Router
pub async function route_telemetry(packet: Bytes) -> Result<(), EngineError> {
    let frame = HardwareFrame::decode(packet)?;
    TOKIO_CHANNEL.send(frame).await?;
    Ok(())
}`
  },
  {
    id: "turnkey",
    title: "Turnkey Product Realization",
    icon: Workflow,
    color: "from-blue-700 to-indigo-800",
    glowColor: "border-blue-500/40",
    badge: "Full Hardware + Software",
    description: "Have a product idea? We handle everything: circuit design, PCB fabrication, 3D enclosure printing, C++ firmware, cloud backend, and mobile UI.",
    specs: [
      "End-to-End Single Point of Engineering Delivery",
      "Complete Gerber, CAD STL, C++ and Web Repositories",
      "Functional Physical Prototype Shipped to Your Door",
      "100% Intellectual Property & Source Code Transfer"
    ],
    sampleCode: `// CodeLingo Turnkey Manifest
{
  "project_type": "Hybrid IoT System",
  "hardware": ["PCB v2.1", "SLA Case"],
  "firmware": "C++ RTOS",
  "cloud": "AWS Serverless",
  "frontend": "Next.js Dashboard",
  "ip_owner": "CLIENT"
}`
  }
];

export default function CapabilitiesGrid({ onOpenModal }: CapabilitiesGridProps) {
  const [selectedCapability, setSelectedCapability] = useState<string>("iot");

  const activeCap = CAPABILITIES.find((c) => c.id === selectedCapability) || CAPABILITIES[0];

  return (
    <section id="capabilities" className="py-24 relative bg-[#060608] border-t border-zinc-900">
      
      {/* Background Orbs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ALL-SPECTRUM CAPABILITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Can You Place On <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-amber-400 bg-clip-text text-transparent">
              CodeLingo&apos;s Engineering Desk?
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Unlike standard software agencies, CodeLingo spans both <strong className="text-zinc-200">physical hardware</strong> and <strong className="text-zinc-200">digital software</strong>. Every tech domain is executed under one roof.
          </p>
        </div>

        {/* Grid of Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            const isSelected = selectedCapability === cap.id;
            return (
              <div
                key={cap.id}
                onClick={() => setSelectedCapability(cap.id)}
                className={`group relative p-6 rounded-xl cursor-pointer transition-all duration-300 glass-card ${
                  isSelected ? `border ${cap.glowColor} bg-[#0e0e12] shadow-xl shadow-black/60` : "hover:border-zinc-700"
                }`}
              >
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cap.color} p-[1px] shadow-lg`}>
                    <div className="w-full h-full bg-[#08080b] rounded-[7px] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800">
                    {cap.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {cap.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {cap.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                {/* Card CTA */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenModal(cap.id);
                  }}
                  className="w-full py-2 px-3.5 rounded-md bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white transition-all text-center"
                >
                  Submit Brief for {cap.badge}
                </button>
              </div>
            );
          })}
        </div>

        {/* Selected Capability Deep-Dive Inspector Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#09090c] border border-zinc-800 glass-panel shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/30">
                <Activity className="w-3.5 h-3.5" />
                <span>INSPECTOR: {activeCap.title.toUpperCase()}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Engineered for Extreme Reliability &amp; Speed
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Whether you need a standalone PCB layout or a full hardware-software ecosystem, CodeLingo executes with military-grade precision. 
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-md bg-zinc-900 border border-zinc-800">
                  <div className="text-xs text-zinc-400">Ownership</div>
                  <div className="text-sm font-bold text-white font-mono">100% IP Transfer</div>
                </div>
                <div className="p-3.5 rounded-md bg-zinc-900 border border-zinc-800">
                  <div className="text-xs text-zinc-400">Deliverables</div>
                  <div className="text-sm font-bold text-blue-400 font-mono">Raw Files + Physical</div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenModal(activeCap.id)}
                  className="px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 font-bold text-white text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-900/30"
                >
                  Build My {activeCap.badge} Project
                </button>
              </div>
            </div>

            {/* Code / Config Preview */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#050507] border border-zinc-800 overflow-hidden font-mono text-xs shadow-inner">
                <div className="px-4 py-2 bg-[#08080b] border-b border-zinc-800 flex items-center justify-between text-zinc-400">
                  <span className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-cyan-400" />
                    <span>codelingo_{activeCap.id}_spec.config</span>
                  </span>
                  <span className="text-[10px] text-emerald-400">PASSED SLA AUDIT</span>
                </div>
                <pre className="p-4 text-zinc-300 overflow-x-auto leading-relaxed">
                  <code>{activeCap.sampleCode}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
