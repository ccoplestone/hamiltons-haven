import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import Link from 'app/components/Link';

import styles from './PrimaryNavigation.module.scss';

export const navigation = {
    '/': 'Home',
    '/services': 'Services',
    '/rates': 'Rates',
    '/contact': 'Contact',
    '/links': 'Links',
};

const PrimaryNavigation = () => {
    const router = useRouter();

    return (
        <nav className={styles.root}>
            <ul className={styles.list}>
                {Object.entries(navigation).map(([alias, label]) => (
                    <li key={alias} className={styles.item}>
                        <Link
                            className={classNames(
                                styles.link,
                                router.route === alias && styles.linkIsActive
                            )}
                            to={alias}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PrimaryNavigation;
