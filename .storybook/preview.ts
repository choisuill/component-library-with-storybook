import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import GlobalStyles from '../src/styles/globals';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
// import '@fontsource/material-icons';

const decorators = [
  withThemeFromJSXProvider({
    themes: {
      theme,
    },
    defaultTheme: 'theme',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export { decorators };
export default preview;
