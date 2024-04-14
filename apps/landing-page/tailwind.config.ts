import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { createPlugin } from 'windy-radix-palette';

const colors = createPlugin();

export default <Partial<Config>>{
  darkMode: 'class',
  plugins: [colors.plugin],
  safeList: ['items-end', 'items-start', 'rounded-br-none', 'rounded-bl-none'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        display: ['Cal Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  }
};
