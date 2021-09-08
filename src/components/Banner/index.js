import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Container from 'app/components/Container';
import Logo from 'app/components/Logo';
import PrimaryNavigation from 'app/components/PrimaryNavigation';

import styles from './Banner.module.scss';

const useAnimationFrame = (callback) => {
    const requestRef = useRef();
    const previousTimeRef = useRef();

    const animate = (time) => {
        if (typeof previousTimeRef.current !== 'undefined') {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);
};

const Banner = ({ isNavigationOpen, onNavigationClick }) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useAnimationFrame(() => {
        setHasScrolled((window.scrollY || window.pageYOffset) > 99);
    });

    return (
        <header
            className={classNames(
                styles.root,
                hasScrolled && styles.rootHasScrolled,
                isNavigationOpen && styles.rootHasNavigation
            )}
        >
            <div className={styles.container}>
                <Logo hasScrolled={hasScrolled} isNavigationOpen={isNavigationOpen} />
                <PrimaryNavigation />
                <button
                    className={classNames(styles.control, isNavigationOpen && styles.controlIsOpen)}
                    onClick={onNavigationClick}
                    type="button"
                >
                    {isNavigationOpen ? 'Close' : 'Open'} Menu
                </button>
            </div>
        </header>
    );
};

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
