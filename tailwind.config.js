/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0) translateX(0)' },
            '50%': { transform: 'translateY(-20px) translateX(10px)' },
          },
          blob: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
          },
        },
        animation: {
          float: 'float 6s ease-in-out infinite',
          blob: 'blob 8s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  };
  