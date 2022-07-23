import React from "react";
import Head from "next/head";
import Footer from "../base/Footer";
import Navigation from "../base/Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Skyliner</title>
      </Head>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
