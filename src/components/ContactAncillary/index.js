import React from 'react';

import Button from 'app/components/Button';
import ContactDetails from 'app/components/ContactDetails';
import Container from 'app/components/Container';

import styles from './ContactAncillary.module.scss';

const ContactAncillary = () => {
    const image = require(`../../../public/images/img-contact-bg.jpg`);

    return (
        <aside className={styles.root} style={{ backgroundImage: `url(${image})` }}>
            <Container>
                <h2 className={styles.title}>Contact</h2>
                <p className={styles.action}>
                    <Button to="/contact" variant="bordered">
                        Click here to go to our contact page
                    </Button>
                </p>
                <ContactDetails />
            </Container>
        </aside>
    );
};

export default ContactAncillary;
