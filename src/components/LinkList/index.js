import React from 'react';
import PropTypes from 'prop-types';

import LinkListItem from 'app/components/LinkListItem';

import styles from './LinkList.module.scss';

const LinkList = ({ data }) => (
    <ul className={styles.root}>
        {data.map(([label, alias, to]) => (
            <li key={alias} className={styles.item}>
                <LinkListItem alias={alias} label={label} to={to} />
            </li>
        ))}
    </ul>
);

LinkList.propTypes = {};

LinkList.defaultProps = {};

export default LinkList;
