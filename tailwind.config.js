/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        std: ["13px", "18px"],
        mbl: ["8px", "12px"],
      },
      fontFamily: {
        heading: ["Heading"],
        std: ["Base"],
        sig: ["Signature"],
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
