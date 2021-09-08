import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import gtm from 'app/utility/gtm';

import 'app/styles/layout.scss';

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtm.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return <Component {...pageProps} />;
};

export default App;
