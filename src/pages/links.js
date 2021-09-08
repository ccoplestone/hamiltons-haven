import React from 'react';

import Container from 'app/components/Container';
import ContentTitle from 'app/components/ContentTitle';
import Hero from 'app/components/Hero';
import LinkList from 'app/components/LinkList';
import Scene from 'app/components/Scene';

import { antiguaLinks, barbudaLinks } from 'app/config';

const ContactPage = () => (
    <Scene
        meta="We have put together a collection of useful links to help you when in Antigua."
        title="Hamilton’s Haven Links"
    >
        <Hero />
        <Container>
            <ContentTitle>Links</ContentTitle>
            <LinkList data={antiguaLinks} />
            <ContentTitle>Barbuda</ContentTitle>
            <LinkList data={barbudaLinks} />
        </Container>
    </Scene>
);

export default ContactPage;
