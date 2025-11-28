/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'header-height': '5rem', // 80px - header yüksekliği
        'header-spacer': '5rem', // 80px - header için padding
        'footer-height': 'auto', // Footer yüksekliği dinamik
      },
      padding: {
        'header-spacer': '5rem', // 80px - header için padding
      },
      minHeight: {
        'screen-content': 'calc(100vh - 5rem)', // Header yüksekliği çıkarılmış
      },
    },
  },
  plugins: [],
}

