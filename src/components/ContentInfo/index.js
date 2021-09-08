import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContentInfo.module.scss';

const ContentInfo = () => (
    <footer className={styles.root}>&copy; Copyright 2021 Hamilton’s Haven</footer>
);

ContentInfo.propTypes = {};

ContentInfo.defaultProps = {};

export default ContentInfo;
