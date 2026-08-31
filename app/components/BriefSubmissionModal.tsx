"use client";

import { useState, useEffect } from "react";
import { 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Printer, 
  Brain, 
  Globe, 
  Code2, 
  Layers, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import confetti from "canvas-confetti";

interface BriefSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialSpecs?: {
    category: string;
    complexity: string;
    timeline: string;
    budget: string;
    addons: string[];
  };
}

export default function BriefSubmissionModal({
  isOpen,
  onClose,
  initialCategory = "iot",
  initialSpecs
}: BriefSubmissionModalProps) {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState(initialCategory);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeline, setTimeline] = useState("Standard (10-14 Days)");
  const [budget, setBudget] = useState(initialSpecs ? initialSpecs.budget : "$1,500 - $3,000");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  useEffect(() => {
    if (initialCategory) setCategory(initialCategory);
    if (initialSpecs) {
      setBudget(initialSpecs.budget);
      setDescription(`Calculated Scope Specs:
- Domain: ${initialSpecs.category}
- Architecture Complexity: ${initialSpecs.complexity}
- Pace: ${initialSpecs.timeline}
- Selected Deliverables: ${initialSpecs.addons.join(", ")}`);
    }
  }, [initialCategory, initialSpecs]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedTicket = `CL-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedTicket);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }
    }, 1200);
  };

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#09090c] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden glass-panel">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-cyan-400 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          /* Submitted Success View */
          <div className="p-8 text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                PROJECT BRIEF REGISTERED
              </span>
              <h3 className="text-3xl font-extrabold text-white">
                Brief Locked In!
              </h3>
              <p className="text-zinc-300 text-sm max-w-md mx-auto">
                Our principal engineers are reviewing your specifications. An architecture blueprint and proposal will be sent to <strong className="text-cyan-300">{email}</strong> within 12 hours.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="p-4 rounded-md bg-[#060608] border border-zinc-800 max-w-xs mx-auto font-mono text-xs space-y-1">
              <div className="text-zinc-400">Reference Ticket ID</div>
              <div className="text-xl font-bold text-blue-400">{ticketId}</div>
              <div className="text-[10px] text-emerald-400">STATUS: QUEUED FOR SPEC REVIEW</div>
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Done &amp; Return to Page
            </button>
          </div>
        ) : (
          /* Multi-step Brief Form */
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Submit Your Tech Project Brief</h3>
                <p className="text-xs text-zinc-400">Web, Software, PCB Electronics, 3D Print, or AI/ML</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Domain Selector */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-300 font-bold uppercase">
                  Project Domain
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "iot", label: "IoT & PCB" },
                    { id: "3d", label: "3D Print" },
                    { id: "ml", label: "AI & ML" },
                    { id: "web", label: "Web Platform" },
                    { id: "software", label: "Backend API" },
                    { id: "turnkey", label: "Turnkey All" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCategory(item.id)}
                      className={`py-2 px-3 rounded-md text-xs font-mono font-semibold border transition-all ${
                        category === item.id
                          ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-900/30"
                          : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-zinc-300 font-bold uppercase block mb-1">
                    Project Title / Concept Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Smart Agritech LoRa Node with Waterproof Casing"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md bg-[#060608] border border-zinc-800 text-zinc-100 text-xs focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-300 font-bold uppercase block mb-1">
                    Detailed Scope &amp; Specifications
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe what you want built (features, microcontrollers needed, 3D printing requirements, target audience, expected APIs)..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md bg-[#060608] border border-zinc-800 text-zinc-100 text-xs focus:border-blue-500 focus:outline-none font-mono"
                  ></textarea>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-zinc-300 font-bold uppercase block mb-1">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md bg-[#060608] border border-zinc-800 text-zinc-100 text-xs focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-zinc-300 font-bold uppercase block mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md bg-[#060608] border border-zinc-800 text-zinc-100 text-xs focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-md bg-blue-600 hover:bg-blue-500 font-bold text-white text-xs uppercase tracking-wider shadow-md shadow-blue-900/30 transition-all text-center"
              >
                {isSubmitting ? "Transmitting Brief to Dev Mesh..." : "Submit Tech Brief & Lock SLA"}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
