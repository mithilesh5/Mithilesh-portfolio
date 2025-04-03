import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Your Name</h1>
        <p className="text-xl mt-2">DevOps Engineer | Cloud Enthusiast</p>
      </section>
      
      {/* About Me */}
      <section className="px-10 py-10">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-lg">I am a DevOps Engineer with expertise in cloud computing, automation, and infrastructure management.</p>
      </section>

      {/* Projects */}
      <section className="px-10 py-10">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">Project 1</h3>
              <p className="mt-2">Brief description of the project.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="mt-2">Brief description of the project.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-10 py-10">
        <h2 className="text-3xl font-semibold">Certifications</h2>
        <ul className="mt-4 list-disc pl-5 text-lg">
          <li>AWS Certified Solutions Architect</li>
          <li>Docker & Kubernetes Expert</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="px-10 py-10 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a href="#" className="hover:text-blue-400"><FaGithub /></a>
          <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-400"><FaEnvelope /></a>
        </div>
      </section>
    </div>
  );
}
