module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: 
      {
        purple: "#4D6EE4",
        black: "#171725",
        "black-accent": "#1D2335",
        "dark-grey": "#696974",
        "line-dark": "#EAEAEA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:
      {
        Poppins_re:['Poppins_regular','sans-serif'],
        Poppins_md:['Popins_medium','sans-serif'],
        Poppins_sb:['Poppins_semi_bold','sans-serif'],
        Poppins_bl:['Poppins_black','sans-serif'],
 
      },
    },
  },
  plugins: [],
};
