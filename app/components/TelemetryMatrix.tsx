"use client";

import { useState, useEffect } from "react";
import { 
  Activity, 
  Cpu, 
  Printer, 
  Brain, 
  Zap, 
  Radio, 
  Sliders, 
  BarChart3, 
  Server, 
  RefreshCw,
  Terminal
} from "lucide-react";

export default function TelemetryMatrix() {
  const [activeTab, setActiveTab] = useState<"pcb" | "slicer" | "ai" | "api">("pcb");

  // PCB state
  const [frequency, setFrequency] = useState(160); // MHz
  const [voltage, setVoltage] = useState(3.3);

  // Slicer state
  const [currentLayer, setCurrentLayer] = useState(420);
  const totalLayers = 850;

  // AI state
  const [batchSize, setBatchSize] = useState(64);
  const [quantPrecision, setQuantPrecision] = useState("INT8");

  // Simulated live wave ticks
  const [wavePoints, setWavePoints] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWavePoints(Array.from({ length: 24 }, () => Math.floor(Math.random() * 40) + 10));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetry" className="py-24 relative bg-[#060608] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-yellow-400 text-xs font-mono">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>LIVE TELEMETRY SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See How CodeLingo Engineers <br />
            <span className="bg-gradient-to-r from-yellow-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              Hardware, CAD &amp; Code Live
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Interact with our simulated engineering telemetry panels to experience our low-level micro-controller logic, SLA slicer diagnostics, and neural model benchmarks.
          </p>
        </div>

        {/* Telemetry Window Container */}
        <div className="rounded-2xl bg-[#09090c] border border-zinc-800 shadow-2xl glass-panel overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="p-4 bg-[#060608] border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            
            {/* Tab Switches */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setActiveTab("pcb")}
                className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono transition-all ${
                  activeTab === "pcb"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-900/30"
                    : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-zinc-200"
                }`}
              >
                <span>PCB Logic Analyzer</span>
              </button>

              <button
                onClick={() => setActiveTab("slicer")}
                className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono transition-all ${
                  activeTab === "slicer"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/30"
                    : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-zinc-200"
                }`}
              >
                <span>3D SLA G-Code Slicer</span>
              </button>

              <button
                onClick={() => setActiveTab("ai")}
                className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono transition-all ${
                  activeTab === "ai"
                    ? "bg-orange-600 text-white shadow-md shadow-orange-900/30"
                    : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-zinc-200"
                }`}
              >
                <span>Edge AI Quantization</span>
              </button>

              <button
                onClick={() => setActiveTab("api")}
                className={`px-3.5 py-1.5 rounded-md text-xs font-bold font-mono transition-all ${
                  activeTab === "api"
                    ? "bg-amber-600 text-white shadow-md shadow-amber-900/30"
                    : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-zinc-200"
                }`}
              >
                <span>Rust Microservice Mesh</span>
              </button>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-md border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>TELEMETRY ONLINE</span>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* PCB Analyzer View */}
            {activeTab === "pcb" && (
              <>
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">ESP32-S3 Dual-Core Clock</span>
                    <h3 className="text-2xl font-bold text-white">Logic Waveform &amp; Bus Telemetry</h3>
                    <p className="text-zinc-300 text-xs sm:text-sm">
                      Simulate clock speeds and I2C/SPI bus voltages on custom manufactured 4-layer PCB boards.
                    </p>
                  </div>

                  {/* Interactive Controls */}
                  <div className="space-y-4 bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                        <span>CPU Clock Speed</span>
                        <span className="text-blue-400 font-bold">{frequency} MHz</span>
                      </div>
                      <input
                        type="range"
                        min="80"
                        max="240"
                        step="20"
                        value={frequency}
                        onChange={(e) => setFrequency(Number(e.target.value))}
                        className="w-full accent-blue-500 bg-zinc-800 rounded cursor-pointer h-2"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                        <span>Logic Voltage Rail</span>
                        <span className="text-blue-400 font-bold">{voltage}V DC</span>
                      </div>
                      <input
                        type="range"
                        min="1.8"
                        max="5.0"
                        step="0.1"
                        value={voltage}
                        onChange={(e) => setVoltage(Number(e.target.value))}
                        className="w-full accent-blue-500 bg-zinc-800 rounded cursor-pointer h-2"
                      />
                    </div>
                  </div>

                  {/* Metric Chips */}
                  <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">Bus Speed</div>
                      <div className="text-blue-300 font-bold">400 kHz I2C</div>
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">JTAG Debug</div>
                      <div className="text-emerald-400 font-bold">ACTIVE</div>
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">Current Draw</div>
                      <div className="text-yellow-400 font-bold">{(frequency * 0.45).toFixed(1)} mA</div>
                    </div>
                  </div>
                </div>

                {/* Right Visualizer Box */}
                <div className="lg:col-span-6 bg-[#050507] p-6 rounded-xl border border-zinc-800 font-mono space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-3">
                    <span className="text-blue-400">CH1: CLK_PIN (GPIO 14)</span>
                    <span>100 MSa/s</span>
                  </div>

                  {/* Animated Waveform Display */}
                  <div className="h-40 flex items-end justify-between gap-1 bg-[#08080b] p-3 rounded-lg border border-zinc-800">
                    {wavePoints.map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-gradient-to-t from-blue-700 to-blue-500 rounded-t transition-all duration-300"
                        style={{ height: `${(h / 50) * 100}%` }}
                      ></div>
                    ))}
                  </div>

                  <div className="text-[11px] text-zinc-400 flex items-center justify-between">
                    <span>Protocol: SPI 20MHz</span>
                    <span className="text-emerald-400">NO BUS CONFLICTS</span>
                  </div>
                </div>
              </>
            )}

            {/* Slicer View */}
            {activeTab === "slicer" && (
              <>
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">SLA UV Poly-Cure Slicer</span>
                    <h3 className="text-2xl font-bold text-white">Layer Height &amp; Print Precision</h3>
                    <p className="text-zinc-300 text-xs sm:text-sm">
                      Inspect slice heights down to 25 microns for IP68 waterproof mechanical enclosures.
                    </p>
                  </div>

                  <div className="space-y-4 bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1 text-zinc-300">
                        <span>Current Slice Layer</span>
                        <span className="text-emerald-400 font-bold">Layer {currentLayer} / {totalLayers}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max={totalLayers}
                        value={currentLayer}
                        onChange={(e) => setCurrentLayer(Number(e.target.value))}
                        className="w-full accent-emerald-400 bg-zinc-800 rounded cursor-pointer h-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">Layer Height</div>
                      <div className="text-emerald-400 font-bold">0.025 mm</div>
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">Resin Temp</div>
                      <div className="text-yellow-400 font-bold">32.4 °C</div>
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">Cure UV</div>
                      <div className="text-amber-400 font-bold">405 nm</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-[#050507] p-6 rounded-xl border border-zinc-800 font-mono space-y-4">
                  <div className="flex justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-3">
                    <span className="text-emerald-400">CAD Mesh: watertight_shell_v3.stl</span>
                    <span>SLA Polymer 85D</span>
                  </div>

                  {/* Simulated Slice Box */}
                  <div className="relative h-40 bg-[#08080b] rounded-lg border border-zinc-800 overflow-hidden flex items-center justify-center">
                    <div 
                      className="absolute inset-0 bg-emerald-500/10 transition-all duration-300"
                      style={{ height: `${(currentLayer / totalLayers) * 100}%` }}
                    ></div>
                    <div className="relative z-10 text-center space-y-1">
                      <div className="text-lg font-bold text-emerald-400">
                        {((currentLayer / totalLayers) * 100).toFixed(1)}% Sliced
                      </div>
                      <div className="text-[10px] text-zinc-400">Estimated Print Time: 3h 42m</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* AI Quantization View */}
            {activeTab === "ai" && (
              <>
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">NVIDIA TensorRT / Edge TPU</span>
                    <h3 className="text-2xl font-bold text-white">Neural Loss &amp; Inference Bench</h3>
                    <p className="text-zinc-300 text-xs sm:text-sm">
                      Benchmark custom computer vision models with real-time hardware inference latency.
                    </p>
                  </div>

                  <div className="space-y-4 bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                    <div className="flex gap-4">
                      <button
                        onClick={() => setQuantPrecision("FP16")}
                        className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold border ${
                          quantPrecision === "FP16" ? "bg-orange-500/30 border-orange-400 text-white" : "border-zinc-800 text-zinc-400"
                        }`}
                      >
                        FP16 Half-Precision
                      </button>
                      <button
                        onClick={() => setQuantPrecision("INT8")}
                        className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold border ${
                          quantPrecision === "INT8" ? "bg-orange-500/30 border-orange-400 text-white" : "border-zinc-800 text-zinc-400"
                        }`}
                      >
                        INT8 Edge TPU
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">Latency</div>
                      <div className="text-orange-300 font-bold">{quantPrecision === "INT8" ? "3.8 ms" : "7.2 ms"}</div>
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">Throughput</div>
                      <div className="text-blue-400 font-bold">{quantPrecision === "INT8" ? "260 FPS" : "138 FPS"}</div>
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">Accuracy</div>
                      <div className="text-emerald-400 font-bold">99.2% mAP</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-[#050507] p-6 rounded-xl border border-zinc-800 font-mono space-y-4">
                  <div className="flex justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-3">
                    <span className="text-orange-400">YOLOv8 Object Detector</span>
                    <span>Target: Jetson Orin Nano</span>
                  </div>

                  <div className="h-40 bg-[#08080b] rounded-lg border border-zinc-800 p-4 flex flex-col justify-between">
                    <div className="text-xs text-zinc-300">Model Quantization Matrix:</div>
                    <div className="space-y-2 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Backbone Layers:</span>
                        <span className="text-blue-400">224 Layers Quantized</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">VRAM Footprint:</span>
                        <span className="text-emerald-400">420 MB / 4096 MB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Status:</span>
                        <span className="text-orange-300 font-bold">READY FOR DEPLOYMENT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* API Microservices View */}
            {activeTab === "api" && (
              <>
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Rust Tokio Async Runtime</span>
                    <h3 className="text-2xl font-bold text-white">Distributed API Throughput</h3>
                    <p className="text-zinc-300 text-xs sm:text-sm">
                      Benchmark high-concurrency microservices with sub-millisecond p99 latency.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">Requests / sec</div>
                      <div className="text-amber-400 font-bold">142,500 RPS</div>
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">p99 Latency</div>
                      <div className="text-emerald-400 font-bold">0.8 ms</div>
                    </div>
                    <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-zinc-400 text-[10px]">Active Mesh Nodes</div>
                      <div className="text-cyan-400 font-bold">1,420</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-[#050507] p-6 rounded-xl border border-zinc-800 font-mono space-y-4">
                  <div className="flex justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-3">
                    <span className="text-amber-400">gRPC Tokio Cluster</span>
                    <span>Zero Memory Leak Guarantee</span>
                  </div>

                  <div className="h-40 bg-[#08080b] rounded-lg border border-zinc-800 p-4 flex flex-col justify-center items-center text-center space-y-2">
                    <Server className="w-8 h-8 text-amber-400 animate-bounce" />
                    <div className="text-sm font-bold text-white">Global Edge Mesh Operating Normally</div>
                    <div className="text-[10px] text-zinc-400">100% Uptime Across 12 Geographic Regions</div>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
