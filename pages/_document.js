import Document, { Html, Head, Main, NextScript } from "next/document";
import { createResolver } from "next-slicezone/resolver"; // import the function here

export default class extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        /* In development, generate an sm-resolver.js file
    that will map slices to components */
        if (process.env.NODE_ENV === "development") {
            await createResolver();
        }
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-9FX8XPG07R"
                    ></script>

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9FX8XPG07R', { page_path: window.location.pathname });
            `,
                        }}
                    />
                    <link
                        rel="icon"
                        href="/logos/favicon.png"
                        type="image/png"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
