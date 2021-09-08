import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './FormLabel.module.scss';

const FormLabel = ({ children, htmlFor, isRequired }) => (
    <label
        className={classNames(styles.root, isRequired && styles.rootIsRequired)}
        htmlFor={htmlFor}
    >
        {children}
    </label>
);

FormLabel.propTypes = {};

FormLabel.defaultProps = {};

export default FormLabel;
