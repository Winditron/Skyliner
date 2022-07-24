import Layout from "../components/layouts/Layout";
import store from "../redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

/*Stylesheets */
import "../styles/sass/main.scss";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
