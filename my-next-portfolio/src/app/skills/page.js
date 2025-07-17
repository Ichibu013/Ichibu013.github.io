// app/skills/page.js

// (Optional) You can mark this as a client component if it uses client-side hooks or interactivity,
// but for a simple static page, it defaults to a Server Component, which is efficient.
// "use client";

import React from "react";

// Define metadata for this specific page (optional, but good for SEO)
export const metadata = {
  title: "My Skills - Ansh Sharma",
  description: "Detailed list of technical skills and expertise.",
};

export default function SkillsPage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>My Skills</h1>
      <p>
        This is the page where I list all my technical skills and proficiencies.
      </p>
      <ul>
        <li>SpringBoot</li>
        <li>Java</li>
        <li>Python</li>
        <li>MySQL & MongoDB</li>
        <li>Next.js</li>
        <li>HTML & CSS</li>
        <li>Git & GitHub</li>
      </ul>
    </main>
  );
}
