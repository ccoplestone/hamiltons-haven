import React from 'react';

import Container from 'app/components/Container';
import ContactForm from 'app/components/ContactForm';
import ContentTitle from 'app/components/ContentTitle';
import GoogleMap from 'app/components/GoogleMap';
import Hero from 'app/components/Hero';
import Scene from 'app/components/Scene';
import SecondaryBlock from 'app/components/SecondaryBlock';

const ContactPage = () => (
    <Scene
        meta="If you have a question for our team simply complete the contact form and we will get back to you as soon as possible."
        title="Get in Touch with Hamilton’s Haven"
    >
        <Hero />
        <Container>
            <ContentTitle>Contact</ContentTitle>
            <SecondaryBlock aside={<GoogleMap />} isSpaced>
                <ContactForm />
            </SecondaryBlock>
        </Container>
    </Scene>
);

export default ContactPage;
