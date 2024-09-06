/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      '3xs': '22.5rem', // 360px
      '2xs': '25rem', // 400px
      xs: '30rem', // 480px
      sm: '40rem', // 640px
      md: '48rem', // 768px
      lg: '64rem', // 1024px
      xl: '80rem', // 1280px
      '2xl': '96rem', // 1536px
    },
    gridArea: {
      '1/1': '1/1',
    },
    extend: {
      fontFamily: {
        serif: ['"Abril Fatface"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'grid-area': (value) => ({
            gridArea: value,
          }),
        },
        { values: theme('gridArea') },
      );
    }),
    function ({ addComponents, theme }) {
      addComponents({
        '.wrapper': {
          'padding-left': theme('spacing.4'),
          'padding-right': theme('spacing.4'),
          margin: '0 auto',
          'max-width': '80rem',
        },
      });
    },
  ],
};
