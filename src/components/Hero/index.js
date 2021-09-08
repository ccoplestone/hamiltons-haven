import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Hero.module.scss';

const Hero = ({ isHome }) => {
    const image = require(`../../../public/images/img-header-${isHome ? 'large' : 'small'}.jpg`);

    return (
        <div
            className={classNames(styles.root, isHome ? styles.rootIsHome : null)}
            style={{ backgroundImage: `url(${image})` }}
        />
    );
};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
