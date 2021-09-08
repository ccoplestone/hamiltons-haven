import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import PropTypes from 'prop-types';

import env from 'app/../env';

import styles from './GoogleMap.module.scss';

const GoogleMap = () => {
    const canvas = useRef(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: env.GM_API_KEY,
            version: 'weekly',
        });

        let map;

        loader.load().then(() => {
            const { google } = window;
            map = new google.maps.Map(canvas.current, {
                center: { lat: 17.125505040286452, lng: -61.75607684620633 },
                zoom: 16,
            });
        });
    }, []);

    return <div ref={canvas} className={styles.root} />;
};

GoogleMap.propTypes = {};

GoogleMap.defaultProps = {};

export default GoogleMap;
