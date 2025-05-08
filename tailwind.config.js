export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'teal': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#005f6b',
          600: '#004c56',
          700: '#003842',
          800: '#00252d',
          900: '#001219',
        },
        'coral': {
          50: '#fff1f0',
          100: '#ffe4e0',
          200: '#ffccc5',
          300: '#ffa69e',
          400: '#ff7262',
          500: '#ff4d38',
          600: '#ed3419',
          700: '#c82c13',
          800: '#a12614',
          900: '#842618',
        },
        'sunset': {
          50: '#fff5f2',
          100: '#ffe6df',
          200: '#ffc7b8',
          300: '#ffa391',
          400: '#ff7e5f',
          500: '#ff6b47',
          600: '#ed5a37',
          700: '#d94d2e',
          800: '#c54027',
          900: '#b23421',
        },
        'amber': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontWeight: {
        'light': '300',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    }
  }
}