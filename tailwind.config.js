module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  prefix: 'ffj-',
  theme: {
    darkMode: 'class',
    extend: {
      spacing: {
        128: '32rem'
      },
      screens: {
        xs: '1px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1536px'
      },
      extend: {
        colors: {
          primary: 'var(--primary-normal)',
          'primary-light': 'var(--primary-light)',
          'primary-dark': 'var(--primary-dark)'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html'
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    }
  }
};
