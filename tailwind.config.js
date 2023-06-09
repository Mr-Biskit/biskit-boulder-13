/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Heading"],
      },
      transform: ["hover", "focus", "active", "group-hover"],
      perspective: { none: "none", 1000: "1000px" },
    },
    variants: {
      extend: {
        backfaceVisibility: ["hover", "focus"],
      },
    },
  },
  plugins: [],
};
