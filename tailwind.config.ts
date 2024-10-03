import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg3: "#D5E4E4",
        bg2: "#F1F8F6",
        bg2Hover:"#e0e6e4",
        primary: "#FF0000",
        sec800: "#066769",
        sec700: "#008080",
        sec600: "#00A8A5",
        dark1000: "#111111",
        dark900: "#383A3A",
        dark800: "#141313",
        dark700: "#262424",
        dark600: "#373434",
        grey1000: "#262626",
        grey900: "#333333",
        grey800: "#454545",
        grey700: "#4F4F4F",
        grey600: "#5D5D5D",
        grey500: "#888888",
        grey400: "#B0B0B0",
        grey300: "#D1D1D1 ",
        grey200: "#E7E7E7",
        grey100: "#F6F6F6",
        white200: "#E7E7E7",
        error: "#FF2323",
        mainBg: "#F8F4F3",
        noteGreen: "#008080",
        tableBorderGreen: "#D1E6E6",
        tableHeaderGreen: "#F1F8F6",


        accept: "#30A149",
        acceptLight: "#9CE8A2",
        dismiss: "#ff0000",
        dismissLight: "#F6B0AB",


        high:"#F6B0AB",
        highLight: "#FFF0F0",
        medLight: "#FFF5E2",
        lowLight: "#F6FFF7",


        canceled: "#F6B0AB",
        success:"#9CE8A2",
        pending: "#FFDC97",
        processing: "#4F4F4F",

        improve: "#41AC46",
        decline: "#B10303",

        successHover:"#8CCE91",

        disabledBorder: "#DFDDDD",
        deliInputBorder: "#B5B4B4",
        deliInputText: "#A4A3A3",
      },

    },
  },
  plugins: [],
};
export default config;
