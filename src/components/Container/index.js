import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.module.scss';

const Container = ({ children }) => <div className={styles.root}>{children}</div>;

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
