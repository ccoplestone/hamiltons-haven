import React from 'react';
import PropTypes from 'prop-types';

import Button from 'app/components/Button';
import ContactDetails from 'app/components/ContactDetails';
import Link from 'app/components/Link';

import styles from './ContactBlock.module.scss';

const ContactBlock = () => {
    const image = require(`../../../public/images/img-contact-bg.jpg`);

    return (
        <aside className={styles.root} style={{ backgroundImage: `url(${image})` }}>
            <ContactDetails />
            <p className={styles.actions}>
                <Button to="/contact" variant="bordered">
                    Click here to go to our contact page
                </Button>
            </p>
            <p className={styles.altActions}>
                <Link to="/resources/North Sound Marina Vessel Form 2020.pdf" isNewWindow>
                    Click here for vessel haul our form
                </Link>
            </p>
        </aside>
    );
};

ContactBlock.propTypes = {};

ContactBlock.defaultProps = {};

export default ContactBlock;
