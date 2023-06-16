// TODO move to theme directory

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      common: { white: "#ffffff", black: "#000000" },
      gray: {
        DEFAULT: "#A2ABB3",
        50: "#EEF0F1",
        100: "#E6E8EA",
        200: "#D5D9DD",
        300: "#C4C9CF",
        400: "#B3BAC1", // primary
        500: "#A2ABB3",
        600: "#848F9A",
        700: "#67737E",
        800: "#4E575F",
        900: "#353B41",
        950: "#282D31",
      },
      primary: {
        DEFAULT: "#007173",
        50: "#009FA1",
        100: "#009A9C",
        200: "#009092",
        300: "#008587",
        400: "#007B7D",
        500: "#007173", // primary
        600: "#005D5F",
        700: "#00494A",
        800: "#003536",
        900: "#002121",
        950: "#001717",
      },
      purple: {
        DEFAULT: "#40367A",
        50: "#9F97D1",
        100: "#9289CB",
        200: "#786CBE",
        300: "#5E50B2",
        400: "#4F4396",
        500: "#40367A", // primary
        600: "#372E68",
        700: "#2D2657",
        800: "#241F45",
        900: "#1B1733",
        950: "#110e2d",
      },
    },
    fontFamily: {
      body: [`var(--ibm-plex)`],
      heading: ["var(--darker-grotesque)"],
      mono: ["var(--plex-mono)"],
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    boxShadow: {
      xs: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      sm: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
      md: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      lg: "0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)",
      xl: "0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)",
      "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.25)",
      "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.2)",
    },
    extend: {
      screens: {
        xs: "375px",
      },
      fontSize: {
        "8xl": ["6rem", ".8"],
        "7xl": ["4.5rem", ".8"],
        "6xl": ["3.75rem", ".8"],
        "5xl": ["3rem", ".8"],
        "4xl": ["2.25rem", "1.25"],
        "3xl": ["1.975rem", "1.25"],
        xl: ["1.25rem", "1.85"],
        lg: ["1.125rem", "1.75"],
      },
      animation: {
        draw: "draw 1s ease-in 700ms forwards",
      },
      flex: {
        full: "0 0 100%",
        "1/2": "0 0 50%",
        "1/3": "0 0 33%",
      },
      gradientColorStopPositions: {
        5: "5%",
      },
      scale: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
