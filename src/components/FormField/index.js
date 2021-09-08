import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import FormError from 'app/components/FormError';
import FormLabel from 'app/components/FormLabel';

import styles from './FormField.module.scss';

const FormField = ({ children, error, isRequired, label, name }) => {
    const addDataToChild = (child) =>
        cloneElement(child, { id: name, name, hasError: Boolean(error) });

    const childrenWithData = Children.map(children, addDataToChild);

    return (
        <div className={styles.root}>
            <FormLabel htmlFor={name} isRequired={isRequired}>
                {label}
            </FormLabel>
            {childrenWithData}
            {Boolean(error) && <FormError>{error}</FormError>}
        </div>
    );
};

FormField.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
};

FormField.defaultProps = {
    error: null,
};

export default FormField;
