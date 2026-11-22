// Tailwind CSS Custom Configuration & Palette
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        roast: {
          950: '#110C0B',
          900: '#17110F',
          850: '#1E1613',
          800: '#251B18',
          700: '#352722',
          600: '#4B3831',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FFF8EE',
          200: '#F6E9D7',
          300: '#E5D1B5',
        },
        ink: {
          900: '#2B1B15',
          800: '#3F2920',
          700: '#5B3E31',
          600: '#785646',
        },
        pyro: {
          500: '#E85234',
          600: '#D94325',
          700: '#B93419',
        },
        goldwarm: {
          300: '#FAD776',
          400: '#F5C142',
          500: '#F29F3D',
          600: '#D68222',
        }
      }
    }
  }
};
