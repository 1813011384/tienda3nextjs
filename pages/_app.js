import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import "../styles/globals.css";
import Head from 'next/head.js';
import { store, persistor } from '../redux/store.js';
import { Provider } from 'react-redux';
import Script from 'next/script'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      
      <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"/>
      </div>

      </PersistGate>
    </Provider>

  );
}
