import React from 'react';
import PropTypes from 'prop-types';

import Button from 'app/components/Button';

const FormSubmit = ({ children, isDisabled }) => (
    <Button type="submit" isDisabled={isDisabled}>
        {children}
    </Button>
);

FormSubmit.propTypes = {};

FormSubmit.defaultProps = {};

export default FormSubmit;
