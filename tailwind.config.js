/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Lato',
    },
    container: {
      padding: {
        DEFAULT: '10px',
        // lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      colors: {
        body: '#e5e5e5',
        dark: '#0a0909',
        grey: {
          DEFAULT: '#777876',
          100: '#e4e4e3',
        },
        accent: {
          DEFAULT: '#008b8b',
          hover: '#ffffff',
        },
      },
      backgroundImage: {
        fue: "url('components/assets/fue-cv.jpg')",
        word: "url('components/assets/s1.png')",
        space: "url('components/assets/feature_bg2.jpg')",
        pattern: "url('components/assets/bg-sec.jpg')",
        about: "url('components/assets/body-bg-pattern.png')",
        tr: "url('components/assets/sv1.jpg')",
        hero: "url('components/assets/cover.jpg')",
        menu: "url('components/assets/cover.jpg')",
        testimonial: "url('assets/img/testimonial/bg.png')",
        newsletter: "url('components/assets/bg.png')",
        footer: "url('components/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
