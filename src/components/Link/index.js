import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = ({ children, className, isNewWindow, onClick, style, to }) => {
    const newWindowProps = isNewWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    const props = { ...newWindowProps, className, onClick, style };

    if (
        to &&
        typeof to === 'string' &&
        (to.match(/^http/u) || to.match(/^mailto:/u) || to.match(/^tel:/u))
    ) {
        return (
            <a href={to} {...props}>
                {children}
            </a>
        );
    }

    return (
        <NextLink href={to}>
            <a {...props}>{children}</a>
        </NextLink>
    );
};

Link.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    isNewWindow: PropTypes.bool,
    style: PropTypes.shape({}),
    onClick: PropTypes.func,
};

Link.defaultProps = {
    className: null,
    isNewWindow: false,
    onClick: () => null,
    style: null,
};

export default Link;
