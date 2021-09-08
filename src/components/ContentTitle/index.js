import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContentTitle.module.scss';

const ContentTitle = ({ children }) => <h1 className={styles.root}>{children}</h1>;

ContentTitle.propTypes = {};

ContentTitle.defaultProps = {};

export default ContentTitle;
