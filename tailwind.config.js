/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
 theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        'excelso-dark': '#060805', // warna custom
        'excelso-societe': '#0F8391',
        'excelso-gray': '#F3F5F5',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Arial', 'sans-serif'],
          abhaya: ['Abhaya Libre'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // mobile
        md: '3rem',   
        lg: '2rem',      // desktop
      },
      screens: {
        // sm: "100%",   // mobile full width
        // md: "768px",  
        // lg: "1280px", // desktop modern
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};