import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from 'app/components/Link';

import styles from './Logo.module.scss';

const Logo = ({ hasScrolled, isNavigationOpen }) => (
    <Link
        className={classNames(
            styles.root,
            hasScrolled && styles.rootHasScrolled,
            isNavigationOpen && styles.rootHasNavigation
        )}
        to="/"
    >
        Hamilton’s Haven, Parham, Antigua
    </Link>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
