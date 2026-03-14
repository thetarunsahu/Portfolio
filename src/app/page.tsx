"use client";

import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import { useRipple } from "@/hooks/useRipple";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ParticleCanvas = dynamic(() => import("@/components/ParticleCanvas"), {
    ssr: false,
});

export default function Home() {
    useRipple();
    useScrollReveal();

    return (
        <>
            <ParticleCanvas />
            <CustomCursor />
            <Navbar />
            <SocialBar />

            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Instagram />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
