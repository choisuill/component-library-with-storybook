import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import GlobalStyles from '@/styles/globals';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyles />
    </RecoilRoot>
  );
}
