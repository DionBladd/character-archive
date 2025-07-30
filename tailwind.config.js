module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        shine: 'shine 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
