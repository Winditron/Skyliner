import Layout from "../components/layouts/Layout";
/*Stylesheets */
import "../styles/sass/main.scss";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
