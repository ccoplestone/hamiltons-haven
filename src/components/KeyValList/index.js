import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './KeyValList.module.scss';

const KeyValList = ({ data }) => (
    <dl className={styles.root}>
        {Object.entries(data).map(([key, value]) => (
            <Fragment key={key}>
                <dt>{key}</dt>
                <dd className={styles.def}>{value}</dd>
            </Fragment>
        ))}
    </dl>
);

KeyValList.propTypes = {};

KeyValList.defaultProps = {};

export default KeyValList;
