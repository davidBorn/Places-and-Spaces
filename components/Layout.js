import React from "react";
import Head from "next/head";
import { prismicRepoName } from "../utils/prismicHelpers";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ isPreview, children, altLangs, lang, menu }) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            ></meta>
            <link rel="icon" href="/favicon.png" type="image/png" />
            <title>The Assisted Living Places and Spaces</title>
            <meta
                name="description"
                content="The Assisted Living Places and Spaces is a FREE referral Service specializing in helping families locate, evaluate, and select senior living homes, spaces and communities. This includes Assisted Living Communities, Independently Owned Assisted Living Homes/Spaces, Alzheimer's Care Places, Memory Care Spaces, Retirement Communities. CONTACT US Today: For a FREE Assessment & Consultation!"
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Signika:wght@300;400;600;700&display=swap"
                rel="stylesheet"
            ></link>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
                integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
                crossOrigin="anonymous"
                referrerpolicy="no-referrer"
            />

            <script
                async
                defer
                src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${prismicRepoName}`}
            />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;
