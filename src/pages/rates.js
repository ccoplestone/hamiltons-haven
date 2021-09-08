/* eslint-disable max-lines-per-function */

import React from 'react';

import AlertBlock from 'app/components/AlertBlock';
import ContactBlock from 'app/components/ContactBlock';
import Container from 'app/components/Container';
import Content from 'app/components/Content';
import ContentTitle from 'app/components/ContentTitle';
import DataTable from 'app/components/DataTable';
import Hero from 'app/components/Hero';
import KeyValList from 'app/components/KeyValList';
import Link from 'app/components/Link';
import RateTagline from 'app/components/RateTagline';
import Scene from 'app/components/Scene';
import SecondaryBlock from 'app/components/SecondaryBlock';

import { extraRates, haulRates, storageExtraRates, storageRates } from 'app/config';

const RatesPage = () => (
    <Scene
        meta="Find full details on rates and services at Hamilton’s Haven Parham Antigua."
        title="Hamilton’s Haven Rates and Services"
    >
        <Hero />
        <Container>
            <ContentTitle>Rates</ContentTitle>
            <ContactBlock />
            <SecondaryBlock imageAlts={['Haul and Launch travel lift']} images={['img-rates-1']}>
                <DataTable columns={['Haul and Launch travel lift per foot']} data={haulRates} />
            </SecondaryBlock>
            <hr />
            <SecondaryBlock aside={<KeyValList data={storageExtraRates} />}>
                <DataTable
                    asterisk="* or daily rates apply"
                    columns={['Storage', 'Daily', 'Monthly pre-paid *']}
                    data={storageRates}
                />
            </SecondaryBlock>
            <hr />
            <AlertBlock>
                <p>
                    <strong>
                        HAUL OR LAUNCH AFTER 5PM, OR ON SATURDAYS,
                        <br />
                        INCURS AN EXTRA FEE OF $150.00 plus 25%
                        <br />
                        SUNDAY AND/OR PUBLIC HOLIDAYS INCURS AN EXTRA FEE OF $150.00 plus 50%
                    </strong>
                </p>
                <p>ALL VESSELS ASHORE MUST HAVE THIRD PARTY INSURANCE</p>
            </AlertBlock>
            <SecondaryBlock
                aside={
                    <Content>
                        <ul>
                            <li>Over 75 Tons Add 20%</li>
                            <li>Multi hulls add 25%</li>
                            <li>Mast Storage $1.25 per ft incl. 4 x 4 pallet storage of rigging</li>
                            <li>
                                Storage area/work shop rooms available for rent short term and
                                monthly
                            </li>
                            <li>Travel lift capacity 150 tons</li>
                            <li>Water $0.20 per gallon</li>
                            <li>Electricity $20.00 per day or metered @ 0.80kw</li>
                            <li>Forklift per hour @ $80</li>
                            <li>Mechanical Work per hour @ $60.00</li>
                            <li>Fibre Glass work per hour @ $45.00</li>
                        </ul>
                        <ul>
                            <li>Max draft 14&#39;</li>
                            <li>Max beam 30’</li>
                            <li>
                                Accounts overdue in excess of 15 days will incur late fees of 15%
                                per month
                            </li>
                            <li>15% ABST applies to all boats not in transit</li>
                            <li>
                                All Repair jobs & Bookings for Hurricane season require a 50%
                                deposit in advance
                            </li>
                            <li>
                                All prices in $US (UNITED STATES DOLLARS) exchange rate $2.6882 to
                                EC$ (EASTERN CARIBBEAN&nbsp;$)
                            </li>
                            <li>
                                <Link
                                    to="/resources/North Sound Marina Vessel Form 2020.pdf"
                                    isNewWindow
                                >
                                    CLICK HERE FOR VESSEL HAUL OUT FORM
                                </Link>
                            </li>
                        </ul>
                    </Content>
                }
            >
                <DataTable data={extraRates} />
            </SecondaryBlock>
            <RateTagline />
        </Container>
    </Scene>
);

export default RatesPage;
