import { createElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './TextInput.module.scss';

const TextInput = ({ component, id, name, value, hasError, onBlur, onChange, type }) =>
    createElement(component, {
        className: classNames(styles.root, hasError ? styles.rootError : null),
        id,
        name,
        value,
        onBlur,
        onChange,
        type,
    });

TextInput.propTypes = {
    component: PropTypes.string,
    type: PropTypes.string,
};

TextInput.defaultProps = {
    component: 'input',
    type: 'text',
};

export default TextInput;
