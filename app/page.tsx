"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CapabilitiesGrid from "./components/CapabilitiesGrid";
import TelemetryMatrix from "./components/TelemetryMatrix";
import ProjectEstimator from "./components/ProjectEstimator";
import ShowcasePortfolio from "./components/ShowcasePortfolio";
import ExecutionPipeline from "./components/ExecutionPipeline";
import BriefSubmissionModal from "./components/BriefSubmissionModal";
import Footer from "./components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<string | undefined>(undefined);
  const [modalSpecs, setModalSpecs] = useState<
    | {
        category: string;
        complexity: string;
        timeline: string;
        budget: string;
        addons: string[];
      }
    | undefined
  >(undefined);

  const handleOpenModal = (category?: string) => {
    setModalCategory(category);
    setModalSpecs(undefined);
    setModalOpen(true);
  };

  const handleOpenModalWithSpecs = (specs: {
    category: string;
    complexity: string;
    timeline: string;
    budget: string;
    addons: string[];
  }) => {
    setModalCategory(undefined);
    setModalSpecs(specs);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#03050c] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. Capabilities Matrix */}
        <CapabilitiesGrid onOpenModal={handleOpenModal} />

        {/* 3. Live Telemetry Simulator */}
        <TelemetryMatrix />

        {/* 4. Scope & Cost Calculator */}
        <ProjectEstimator onOpenModalWithSpecs={handleOpenModalWithSpecs} />

        {/* 5. Showcase & Portfolio */}
        <ShowcasePortfolio onOpenModal={handleOpenModal} />

        {/* 6. 4-Phase Execution Pipeline */}
        <ExecutionPipeline onOpenModal={() => handleOpenModal()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Brief Submission Modal */}
      <BriefSubmissionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCategory={modalCategory}
        initialSpecs={modalSpecs}
      />
    </div>
  );
}
