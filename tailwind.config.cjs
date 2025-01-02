module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlayfairDisplay: ["Playfair Display", "sans-serif"],
      },
      inset: {
        "-110%": "-110%",
      },
      height: {
        customHeight: "calc(100% - 80px)",
      },
      lineHeight: {
        custom: "6.5rem",
      },
      width: {
        500: "500px",
        300:"300px"
      },
      spacing: {
        "18p": "18%",
      },
      // perspective: {
      //   '800': '800px',
      // },
      // rotate: {
      //   '-180y': 'rotateY(-180deg)',
      // },
      colors: {
        themeBgColor: "var(--yellow-theme-background-color)",
        themeMainColor: "var(--yellow-theme-main-color)",
        subTextColor: "var(--yellow-theme-sub-text-color)",
        navBgColor: "var(--yellow-theme-nav-background-color)",
      },
      backgroundImage:{
        'linear-gradient': 'linear-gradient(var(--color-start), var(--color-end))',
      },
      translate: {
        "-1/2": "-50%",
      },
      backfaceHidden: {
        "backface-visibility": "hidden",
      },

      animation: {
        typingEffect: "typingEffect 2.5s steps(30, end) ",
        spincube: "spincube 12s ease-in-out infinite",
        progressBar: "progressBar 2s linear "
      },
      keyframes: {
        typingEffect: {
          from: {
            width: "0",
          },
          to: {
            width: "100%",
          },
        },
        spincube: {
          "0%, 100%": {
            transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
          },
          "16%": { transform: "rotateY(-90deg) rotateZ(90deg)" },
          "33%": { transform: "rotateY(-90deg) rotateX(90deg)" },
          "50%": { transform: "rotateY(-180deg) rotateZ(90deg)" },
          "66%": { transform: "rotateY(-270deg) rotateX(90deg)" },
          "83%": { transform: "rotateX(90deg)" },
        },
        progressBar:{
          from: {
            width: "0",
          },
          to: {
            width: "100%",
          },
        }
      },
      transformOrigin: {
        cube: "50% 50% -100px" /* Updated to 100px to match half of 200px */,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".translate-z-phl": {
          transform:
            "translateZ(100px)" /* Updated to 100px to match half of 200px */,
        },
        ".translate-z-nhl": {
          transform:
            "translateZ(-100px)" /* Updated to -100px to match half of 200px */,
        },
        ".rotateY-90-translateZ-phl": {
          transform:
            "rotateY(90deg) translateZ(100px)" /* Updated to 100px to match half of 200px */,
        },
        ".rotateY-90-translateZ-nhl": {
          transform:
            "rotateY(90deg) translateZ(-100px)" /* Updated to -100px to match half of 200px */,
        },
        ".rotateX-90-translateZ-phl": {
          transform:
            "rotateX(90deg) translateZ(100px)" /* Updated to 100px to match half of 200px */,
        },
        ".rotateX-n90-translateZ-phl": {
          transform:
            "rotateX(-90deg) translateZ(100px)" /* Updated to 100px to match half of 200px */,
        },

        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".perspective-800": {
          perspective: "800px",
        },
        ".rotate-y-180": {
          transform: "rotateY(-180deg)",
        },
        ".rotate-y-0": {
          transform: "rotateY(0deg)",
        },
        ".transition-transform": {
          transition: "transform 0.4s linear",
        },
        ".rounded-tr-5xl": {
          "border-top-right-radius": " 6.5rem",
        },
        ".rounded-bl-5xl": {
          "border-bottom-left-radius": "6.5rem",
        },
        ".rotate-z-30": {
          transform: "rotateZ(30deg)",
        },
        '.stroke-gold': {
          stroke: '#ffd700',
        },
        '.stroke-width-10': {
          strokeWidth: '10',
        },
      });
    },
  ],
};
