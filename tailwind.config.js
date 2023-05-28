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
      common: { white: "#ffffff", black: "#000000" },
      gray: {
        default: "#A2ABB3",
        50: "#EEF0F1",
        100: "#E6E8EA",
        200: "#D5D9DD",
        300: "#C4C9CF",
        400: "#B3BAC1", // brand color
        500: "#A2ABB3",
        600: "#848F9A",
        700: "#67737E",
        800: "#4E575F",
        900: "#353B41",
        950: "#282D31",
      },
      primary: {
        default: "#007173",
        50: "#2CEDFF",
        100: "#17EDFF",
        200: "#00DFED",
        300: "#00BBC5",
        400: "#00979C",
        500: "#007173", // primary
        600: "#005E5F",
        700: "#004A49",
        800: "#003634",
        900: "#002120",
        950: "#001716",
      },
      purple: {
        default: "#40367A",
        50: "#D3CFEA",
        100: "#C6C1E4",
        200: "#ACA5D7",
        300: "#9289CB",
        400: "#786CBE",
        500: "#5E50B2",
        600: "#4F4396",
        700: "#40367A", // brand color
        800: "#2C2553",
        900: "#17142C", // background
        950: "#0D0B19",
      },
    },
    fontFamily: {
      body: ["var(--ibm-plex)"],
      heading: ["var(--darker-grotesque)"],
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
    screens: {
      xs: "375px",
      sm: "576px",
      md: "704px",
      lg: "912px",
      xl: "1280px",
    },
    boxShadow: {
      xs: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      sm: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
      md: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      lg: "0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)",
      xl: "0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)",
      xxl: "0px 24px 48px -12px rgba(16, 24, 40, 0.25)",
      xxxl: "0px 32px 64px -12px rgba(16, 24, 40, 0.2)",
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
