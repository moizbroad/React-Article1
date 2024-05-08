// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { min: "320px", max: "575px" },

      sm: { min: "576px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "991px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "992px", max: "1200px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1201px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // "2xl": { min: "1921px" },
      // => @media (min-width: 1536px) { ... }
      xxl: { min: "1501px" },
    },
    extend: {},
  },
  plugins: [],
};
