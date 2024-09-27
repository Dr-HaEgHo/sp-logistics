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
        primary: "#FF0000",
        sec800: "#066769",
        sec700: "#008080",
        sec600: "#00A8A5",
        dark1000: "#111111",
        dark900: "#383A3A",
        dark800: "#141313",
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


        canceled: "#F6B0AB",
        success:"#9CE8A2",
        pending: "#FFDC97",
        processing: "#4F4F4F",

        disabledBorder: "#DFDDDD",
      },

    },
  },
  plugins: [],
};
export default config;
