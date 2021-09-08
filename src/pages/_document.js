import React from 'react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

import GoogleTagManager from 'app/components/GoogleTagManager';

class Document extends NextDocument {
    /* eslint-disable class-methods-use-this */
    render() {
        return (
            <Html lang="en">
                <Head>
                    <GoogleTagManager />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
    /* eslint-enable class-methods-use-this */
}

export default Document;
