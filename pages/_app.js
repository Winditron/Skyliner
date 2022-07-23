import Layout from "../components/layouts/Layout";
import store from "../redux/store";
import { Provider } from "react-redux";

/*Stylesheets */
import "../styles/sass/main.scss";
import "aos/dist/aos.css";
console.log(process.env.PUBLIC_URL);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
