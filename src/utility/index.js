import classNames from 'classnames';

export const ucwords = (str, force = false) => {
    const string = force ? str.toLowerCase(str || '') : str || '';
    return string.replace(/^(.)|\s+(.)/gu, ($1) => $1.toUpperCase());
};

export const applyReverseClass = (styles, className, isReverse) =>
    classNames(styles[className], isReverse ? styles[`${className}Reverse`] : null);
