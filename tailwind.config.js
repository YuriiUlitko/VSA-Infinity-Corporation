export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        pine: { DEFAULT: '#244E38', dark: '#1B3C2B' },
        graphite: '#1A1A1A',
        ink: '#111111',
        body: '#4A4A4A',
        muted: '#6B6F6C',
        sage: '#EDF4F0',
        alabaster: '#F9FAF9',
        line: '#E5E7EB',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
