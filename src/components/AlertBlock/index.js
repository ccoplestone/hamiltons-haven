import React from 'react';
import PropTypes from 'prop-types';

import styles from './AlertBlock.module.scss';

const AlertBlock = ({ children }) => <aside className={styles.root}>{children}</aside>;

AlertBlock.propTypes = {};

AlertBlock.defaultProps = {};

export default AlertBlock;
