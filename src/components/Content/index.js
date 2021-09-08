import React from 'react';
import PropTypes from 'prop-types';

import styles from './Content.module.scss';

const Content = ({ children }) => <div className={styles.root}>{children}</div>;

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
