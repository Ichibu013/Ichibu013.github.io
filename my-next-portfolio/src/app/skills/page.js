// "use client";

import React from "react";
import SkillCard from "../components/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPython,
//   faJava as fabJava, // Renamed to avoid potential conflicts if using other Java icons
//   faHtml5, // Added for HTML icon
//   faCss3Alt, // Added for CSS icon
//   faJs, // Added for JavaScript icon
//   faReact, // Added for React icon
//   faGitAlt, // Added for Git icon
//   faFigma, // Added for Figma icon
//   faNodeJs, // Added for Node.js icon
//   faCloud, // Added for Cloud icon
// } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase, // Used for SQL
  faSquareBinary, // Used for the section title
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

// Define metadata for this specific page (optional, but good for SEO)
export const metadata = {
  title: "My Skills - Ansh Sharma",
  description: "Detailed list of technical skills and expertise.",
};

export default function SkillsPage() {
  // Define your skills data
  const skills = [
    {
      name: "Java",
      // Using an image path directly. Ensure 'java-24.png' is in your public/images/ folder.
      // Corrected path to be relative to the public directory
      icon: "/images/icons8-java-96.png",
      proficiency: 85,
      colorClass: "bg-orange-500",
    },
    {
      name: "Python",
      icon: "/images/icons8-python-96.png",
      proficiency: 70,
      colorClass: "bg-blue-400",
    },
    {
      name: "SQL",
      // Passing FontAwesomeIcon component directly as 'icon'
      icon: "/images/icons8-sql-96.png",
      proficiency: 75,
      colorClass: "bg-blue-600",
    },
    {
      name: "HTML",
      icon: "/images/icons8-html5-100.png",
      proficiency: 65,
      colorClass: "bg-red-500",
    },
    {
      name: "CSS",
      icon: "/images/icons8-css-100.png",
      proficiency: 40,
      colorClass: "bg-blue-800",
    },
    {
      name: "JavaScript",
      icon: "/images/icons8-javascript-96.png",
      proficiency: 40,
      colorClass: "bg-yellow-200",
    },
    {
      name: "React.js",
      icon: "/images/icons8-react-96.png",
      proficiency: 40,
      colorClass: "bg-cyan-400",
    },
    {
      name: "GitHub",
      icon: "/images/icons8-github-96.png",
      proficiency: 50,
      colorClass: "bg-gray-400",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10"
      // 
    >
      <style>
        {`
        .progress-bar-container {
            width: 100%;
            background-color: #33334d; /* Darker bar background */
            border-radius: 9999px; /* Fully rounded */
            height: 8px; /* Slimmer bar */
            overflow: hidden;
        }
        .progress-bar-fill {
            height: 100%;
            border-radius: 9999px; /* Fully rounded */
        }
        `}
      </style>

      {/* Main Content Section */}
      <main className="container mx-auto p-6 lg:p-10 w-full max-w-5xl">
        {/* Skills Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faSquareBinary}
              className="w-8 h-8 mr-3 text-blue-400"
            />
            Languages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={index} // Using index as key, consider a unique ID for real apps
                name={skill.name}
                icon={skill.icon}
                proficiency={skill.proficiency}
                colorClass={skill.colorClass}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
