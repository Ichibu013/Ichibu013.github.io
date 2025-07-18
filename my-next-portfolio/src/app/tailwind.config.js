/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Your main HTML file
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For App Router pages, layouts, etc.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Pages Router (if you're still using it or a mix)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Your components directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // General source directory (e.g., if components are in src/components)
  ],
  theme: {
    extend: {
      // Custom box-shadow for the SkillCard, as discussed previously.
      // This allows you to use `shadow-skill-card` in your components.
      boxShadow: {
        "skill-card":
          "0 10px 15px -3px rgb(3 76 133 / 48%), 0 4px 6px -4px rgb(0 188 212 / 37%)",
      },
      colors: {
        "skill-card-bg": "rgb(1 19 33 / 39%)",
      },
      opacity: {
        39: "0.39", // Ensure this is defined for bg-opacity-39 to work
      },
    },
  },
  // Add Tailwind CSS plugins here.
  // For example, if you need the forms plugin:
  // plugins: [require('@tailwindcss/forms')],
  plugins: [],
};
