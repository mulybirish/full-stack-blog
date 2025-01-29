/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add or override colors here
        primary: "#4a6c6f",
        secondary: "#846075",
      },
    },
  },
  plugins: [],
};
