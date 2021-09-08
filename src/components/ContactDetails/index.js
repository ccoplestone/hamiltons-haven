import React from 'react';

import Link from 'app/components/Link';

import { contact } from 'app/config';

import styles from './ContactDetails.module.scss';

const ContactDetails = () => (
    <dl className={styles.root}>
        <div className={styles.group}>
            <dt className={styles.term}>E-mail us at</dt>
            <dd className={styles.def}>
                <Link to={`mailto:${contact.email}`}>{contact.email}</Link>
            </dd>
        </div>
        <div className={styles.group}>
            <dt className={styles.term}>Telephone</dt>
            <dd className={styles.def}>
                <Link to={`tel:${contact.phone}`}>{contact.phone}</Link>
            </dd>
        </div>
        <div className={styles.group}>
            <dt className={styles.term}>Mobile</dt>
            <dd className={styles.def}>
                <Link to={`tel:${contact.mobile}`}>{contact.mobile}</Link>
            </dd>
        </div>
    </dl>
);

export default ContactDetails;
