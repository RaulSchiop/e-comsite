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
        background: "#fbfbfe",
        Text:"#000000",
        primary:"#ff4400",
        secondary:"#BCBCBC",
        accent:"#ff2f00"

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