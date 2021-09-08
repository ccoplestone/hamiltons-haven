import React from 'react';
import PropTypes from 'prop-types';

import Link from 'app/components/Link';

import styles from './LinkListItem.module.scss';

const LinkListItem = ({ alias, label, to }) => {
    const image = require(`../../../public/images/logo-${alias}.png`);

    return (
        <Link
            className={styles.root}
            style={{ backgroundImage: `url(${image})` }}
            to={to}
            isNewWindow
        >
            {label}
        </Link>
    );
};

LinkListItem.propTypes = {};

LinkListItem.defaultProps = {};

export default LinkListItem;
