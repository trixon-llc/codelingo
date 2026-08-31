"use client";

import { 
  FileCode, 
  Cpu, 
  CheckCircle2, 
  Package, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";

interface ExecutionPipelineProps {
  onOpenModal: () => void;
}

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "Brief & Architectural Blueprint",
    icon: FileCode,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10 border-cyan-500/30",
    description: "Submit your project requirements. Our principal engineers create complete system architecture blueprints spanning circuit schematics, CAD models, and API schemas within 24 hours."
  },
  {
    step: "02",
    title: "Parallel Multi-Discipline Engineering",
    icon: Cpu,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10 border-orange-500/30",
    description: "Hardware layout engineers design the PCB, CAD technicians render SLA 3D enclosures, firmware devs code C++, and full-stack devs build web/API layers concurrently."
  },
  {
    step: "03",
    title: "Rigorous SLA & Hardware Audit",
    icon: CheckCircle2,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10 border-emerald-500/30",
    description: "Thermal imaging of manufactured PCBs, mechanical stress testing of 3D prints, security static code analysis, and edge AI latency benchmarking."
  },
  {
    step: "04",
    title: "Physical & Digital Turnkey Delivery",
    icon: Package,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10 border-amber-500/30",
    description: "Receive full physical hardware prototypes via express courier, raw Git repositories, KiCad Gerber files, CAD STL models, and 100% Intellectual Property deeds."
  }
];

export default function ExecutionPipeline({ onOpenModal }: ExecutionPipelineProps) {
  return (
    <section id="pipeline" className="py-24 relative bg-[#060608] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-blue-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE 4-PHASE EXECUTION ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How CodeLingo Executes <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-orange-400 bg-clip-text text-transparent">
              From Concept to Handover
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Our synchronous engineering pipeline guarantees zero delay between hardware fabrication, C++ firmware, and web software deployment.
          </p>
        </div>

        {/* 4 Pipeline Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PIPELINE_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="p-6 rounded-xl bg-[#09090c] border border-zinc-800 glass-card relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-zinc-700">{step.step}</span>
                    <div className={`p-2 rounded-lg border ${step.bgColor}`}>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#09090c] border border-zinc-800 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Ready to Put CodeLingo to the Test?</h3>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
            Submit your brief today. If your project isn&apos;t delivered on time and engineered to spec, we stand behind our Zero-Defect Guarantee.
          </p>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-900/30"
          >
            Submit Brief Now
          </button>
        </div>

      </div>
    </section>
  );
}
