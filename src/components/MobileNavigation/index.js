import React, { useMemo } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Link from 'app/components/Link';

import { navigation } from '../PrimaryNavigation';

import styles from './MobileNavigation.module.scss';

const MobileNavigation = ({ isOpen, onClick }) => {
    const router = useRouter();

    return (
        <ul className={classNames(styles.root, isOpen && styles.rootIsOpen)}>
            {Object.entries(navigation).map(([alias, label]) => (
                <li key={alias} className={styles.item}>
                    <Link
                        className={classNames(
                            styles.link,
                            router.route === alias && styles.linkIsActive
                        )}
                        onClick={() => router.route === alias && onClick()}
                        to={alias}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

MobileNavigation.propTypes = {};

MobileNavigation.defaultProps = {};

export default MobileNavigation;
