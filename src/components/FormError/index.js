import React from 'react';
import PropTypes from 'prop-types';

import styles from './FormError.module.scss';

const FormError = ({ children }) => <span className={styles.root}>{children}</span>;

FormError.propTypes = {};

FormError.defaultProps = {};

export default FormError;
