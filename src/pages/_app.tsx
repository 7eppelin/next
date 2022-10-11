import React from "react";
import type { AppProps } from "next/app";

import { Layout } from "../components";
import { GlobalStyle } from "../global-style";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <GlobalStyle />
        </>
    );
};

export default App;
