import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Banner from 'app/components/Banner';
import ContactAncillary from 'app/components/ContactAncillary';
import ContentInfo from 'app/components/ContentInfo';
import MobileNavigation from 'app/components/MobileNavigation';

const DEFAULT_META = 'Hamilton’s Haven is the most modern marine facility in Antigua.';

const fonts = 'Libre+Baskerville&family=Red+Hat+Display:wght@400;700';

const Scene = ({ children, meta, title }) => {
    const [isNavigationOpen, setNavigationOpen] = useState(false);

    const toggleNavigationOpen = () => setNavigationOpen(!isNavigationOpen);

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <link href="https://fonts.gstatic.com" rel="preconnect" />
                <link
                    href={`https://fonts.googleapis.com/css2?family=${fonts}&display=swap`}
                    rel="stylesheet"
                />
                <meta content={meta || DEFAULT_META} name="description" />
            </Head>
            <Banner isNavigationOpen={isNavigationOpen} onNavigationClick={toggleNavigationOpen} />
            {children}
            <ContactAncillary />
            <ContentInfo />
            <MobileNavigation isOpen={isNavigationOpen} onClick={toggleNavigationOpen} />
        </Fragment>
    );
};

Scene.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default Scene;
