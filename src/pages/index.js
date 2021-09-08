import React from 'react';

import HomeBlock from 'app/components/HomeBlock';
import Hero from 'app/components/Hero';
import Link from 'app/components/Link';
import Scene from 'app/components/Scene';

const HomePage = () => (
    <Scene
        meta="A modern marina located in Parham in Antigua offering storage, cleaning and a repair workshop."
        title="Welcome to Hamilton’s Haven"
    >
        <Hero isHome />
        <HomeBlock image="img-home-1" imageAlt="150 Ton Marine Travel Lift" title="About Us">
            <p>
                Hamilton’s Haven is the most modern marine facility in Antigua. Originally built
                as a private boatyard for a wealthy yacht owner, the dock, yard and ancillary
                buildings were constructed regardless of cost.
            </p>
            <p>
                In 2011 the facility became available for public use and the boat storage shed and a
                large portion of the yard came under the control of Hamilton’s Haven Services.
                Since that time, Hamilton’s Haven Services have expanded the facilities and there
                are moves to bring other marine businesses onto the site including a chandlery.
            </p>

            <p>Expansion of berthing facilities is also planned.</p>
        </HomeBlock>
        <HomeBlock image="img-home-2" imageAlt="Boat in Dry Dock" title="Location" isReverse>
            <p>
                Situated on the north of Antigua, Hamilton’s Haven is close to the international
                airport and the city of St. John&#39;s where shopping, supermarkets, banks and all
                the normal services usually available in a capital city can be found. There are some
                local shopping facilities and a fish market in nearby Parham, formerly Antigua’s
                primary port.
            </p>
            <p>
                Entry by sea is simple. There is a channel marked by on each side by two red balls
                just off Maiden Island and is easy to find but should only be used daylight
                conditions unless very familiar with the channel.
            </p>
        </HomeBlock>
        <HomeBlock
            image="img-home-3"
            imageAlt="Level 4 Hurricane Storage Facility"
            title="Services"
        >
            <p>
                The yard has a large capacity for storage ashore on a concrete base with welded
                stands and tie downs to satisfy insurance company requirement during the hurricane
                season.
            </p>

            <p>
                Undercover storage also available up to 50 foot mast height in our boat storage
                shed.
            </p>

            <p>
                Pressure washing, hull scraping, water supply and repair services. Dockage, slipway
                launching facilities and tender storage. Workshops and store rooms available short
                term leases. 150 tonne travel lift, 30 ft beam.
            </p>

            <p>
                For all services, 50% advance deposit. All charges in US$. For the rates for all our
                services <Link to="/rates">see our Rates page</Link>.
            </p>
        </HomeBlock>
    </Scene>
);

export default HomePage;
