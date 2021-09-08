/* eslint-disable import/exports-last, react/jsx-props-no-spreading, react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ucwords } from 'app/utility';

import Link from 'app/components/Link';

import styles from './Button.module.scss';

const Button = ({ children, to, type, variant, isBlock, isDisabled, isNewWindow, onClick }) => {
    const rootClass = classNames(
        styles.root,
        variant ? styles[`root${ucwords(variant)}`] : null,
        isBlock ? styles.rootBlock : null,
        isNewWindow ? styles.rootNewWindow : null
    );

    if (to) {
        return (
            <Link className={rootClass} isNewWindow={isNewWindow} to={to} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={rootClass} disabled={isDisabled} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    to: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    isDisabled: false,
    to: null,
    type: 'button',
    onClick: () => null,
};

export default Button;
