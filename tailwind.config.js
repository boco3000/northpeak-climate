/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    animation: {
      "footer-glow": "footerGlow 12s ease-in-out infinite",
    },
    keyframes: {
      footerGlow: {
        "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
        "50%": { opacity: "0.6", transform: "scale(1.05)" },
      },
    },
  },
},
  plugins: [],
};

export default config;
