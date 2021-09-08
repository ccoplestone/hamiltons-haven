/* eslint-disable react/no-danger */

import React, { Fragment } from 'react';

import env from 'app/../env';

const GoogleTagManager = () => {
    if (!env.GTM_KEY) {
        return null;
    }

    return (
        <Fragment>
            <script src={`https://www.googletagmanager.com/gtag/js?id=${env.GTM_KEY}`} async />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${env.GTM_KEY}');`,
                }}
            />
        </Fragment>
    );
};

export default GoogleTagManager;
