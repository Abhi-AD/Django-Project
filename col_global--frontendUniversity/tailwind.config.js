import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sevillana: ['Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
}
