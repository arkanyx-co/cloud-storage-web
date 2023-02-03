import '@/app/styles/globals.css';
import Head from 'next/head';
import { AppProps as NextAppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { SessionProvider } from 'next-auth/react';
import createEmotionCache from '@/shared/lib/createEmotionCache';
import { Layout } from '@/shared/ui/Layout';
import { withProviders } from '@/app/providers';

const clientSideEmotionCache = createEmotionCache();

export interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline enableColorScheme />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  </SessionProvider>
);

export default withProviders(App);
