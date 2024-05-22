import { store } from '@/redux/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import AuthProvider from '@/services/AuthProvider';
import Applading from '../components/AppLoading';
import '../../public/assets/App.scss';
import Head from 'next/head';
 
function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <AuthProvider>
        <Head>
          <title>TODO WEB</title>
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
  loading: () => <Applading />,
});