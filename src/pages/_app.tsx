import '@/app/styles/globals.css';
import Head from 'next/head';
import NextApp, { AppContext, AppProps as NextAppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { SessionProvider } from 'next-auth/react';
import createEmotionCache from '@/shared/lib/createEmotionCache';
import { withProviders } from '@/app/providers';
import { Layout } from '@/widgets/layout';
import { getToken } from 'next-auth/jwt';
import { api } from '@/shared/api/base';

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

App.getInitialProps = async (context: AppContext) => {
  const pageProps = await NextApp.getInitialProps(context);

  if (!api.defaults.headers.common.Authorization) {
    // @ts-ignore
    const token = await getToken({ req: context.ctx.req });

    api.defaults.headers.common.Authorization = `Bearer ${token?.accessToken}`;
  }

  return pageProps;
};

export default withProviders(App);
