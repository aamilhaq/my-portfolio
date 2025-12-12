module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-cream': '#efeee6',
        'brand-ink': '#111827',
        'accent': '#6366f1'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'system-ui', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
