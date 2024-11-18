/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        Text:"#ffffff",
        primary:"#ff4300",
        secondary:"#424242",
        accent:"#FF2F00",
        headerBg:"#1E1C1C",
        secondarytext:"#5f5959",
       cardBackground: "#000000"


      },
    },
  },
  plugins: [],
};

// --text: #000000;
// --background: #fbfbfe;
// --primary: #ff4400;
// --secondary: #BCBCBC;
// --accent: #ff2f00;