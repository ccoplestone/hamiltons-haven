import React from 'react';

import Container from 'app/components/Container';
import ContentTitle from 'app/components/ContentTitle';
import Hero from 'app/components/Hero';
import Scene from 'app/components/Scene';
import SecondaryBlock from 'app/components/SecondaryBlock';

const ServicesPage = () => (
    <Scene
        meta="At Hamilton’s Haven we offer a wide range of services including a hurricane proof storage area alongside Travel Lifts, Marine Cranes, Fuel Deliveries and a full workshop"
        title="Hamilton’s Haven Services"
    >
        <Hero />
        <Container>
            <ContentTitle>Services</ContentTitle>
            <SecondaryBlock
                imageAlts={['Hamilton’s Haven Aerial Photo', 'Hamilton’s Haven Boat Storage']}
                images={['img-services-1', 'img-services-2']}
                isSpaced
                isWide
            >
                <ul>
                    <li>Large Area of Clean Concrete Hard Standing.</li>
                    <li>Secure Yacht Stands with Fixed Tie Downs.</li>
                    <li>150 Ton Marine Travel Lift with 32&#39; Width and 40&#39; Lift Height.</li>
                    <li>18 Ton Mobile Crane.</li>
                    <li>
                        200&#39; by 120&#39; Storage Shed/Workshop (built to Cat 4 specs) to enable
                        specialized work to be completed in all weathers.
                    </li>
                    <li>
                        Sea Wall with several 100 feet of Stern-to and Alongside Dockage (shallow
                        draft only until dredged).
                    </li>
                    <li>Electrical Supply at Voltages 120 / 240 / 480 (3 phase).</li>
                    <li>Water Supplied.</li>
                    <li>Fuel Deliveries Arranged</li>
                    <li>Budget Marine Chandlery.</li>
                    <li>
                        Highly Professional Painting, Engineering, GRP and Steel Work are offered on
                        site.
                    </li>
                    <li>Approved Outside Contractors welcome.</li>
                    <li>Crew welcome to carry out their own projects.</li>
                    <li>High Level of 24 Hour Security.</li>
                    <li>Good Quality, Clean Shower & Toilet Facilities.</li>
                    <li>Container Storage.</li>
                    <li>
                        All Year Round Secure, Covered Storage for Cars, Tenders, Sails and
                        Trailers.
                    </li>
                </ul>
                <p>
                    Antigua Marine Services is based at Hamilton’s Haven having been well
                    established in Antigua at premises adjacent to Shell Beach Marina for many
                    years. The company offers many of the services provided on the site.
                </p>
            </SecondaryBlock>
        </Container>
    </Scene>
);

export default ServicesPage;
