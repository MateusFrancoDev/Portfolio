/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem"
      },
    },
    fontFamily: {
      sans: ["DM Sans", "sans-ui", "sans-serif"],
      serif: ["DM Serif Text", "Georgia", "serif"],
    },
    extend: {
      keyframes: {
        slideIn: {
          '0%': {
            opacity: 0,
            transform: "translateX(-20px)"
          },
          '100%': {
            opacity: 1,
            transform: "translateX(0)"
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        ["slide-in"]: "slideIn .4s ease-in-out forwards",
        ["fade-in"]: "fadeIn .4s ease-in-out forwards"

      },
      colors: {
      azul: {
        200:"#004AAD",
        300:"#043C86",
        400:"#669EE9",
        700:"#C0DBFF",
        800:"#042D64",
        900:"#032552",
        950:"#021836",
      }, 
    },
    },
  },
  plugins: [plugin(({addUtilities}) => {
    function animationDelay() {
      const delays = {};
      for(let i = 0; i <= 12; i++) {
        delays[`.animate-${i}`] = {
          'animation-delay' : `${i * 100}ms`,
        }
      }
      return delays;
    }

    addUtilities(animationDelay());
  })],
};

