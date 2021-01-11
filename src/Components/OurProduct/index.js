import React from 'react';
import { OurProductContainer, OurProductWrapper } from './style'
import Apple from '../../illustrations/Group10.svg'
import Google from '../../illustrations/icon.svg'
import Icon from '../../illustrations/Group3.svg'
import Evo from './Evo'

const OurProduct = () => {
    return <OurProductWrapper>
        <OurProductContainer >
            <div className="Top">
                <div className="hero">
                    <h1>Back to Portfolio</h1>
                    <h1> EVO Roadrunners</h1>
                    <ul>
                        <li><img alt="ios" src={Apple} /></li>
                        <li><img alt="google" src={Google} /></li>
                        <li><img alt="icon" src={Icon} /></li>
                    </ul>
                </div>
                <div className="GridWrapper">
                    <div className="OneGrid">
                        <h2>Client</h2>
                        <span>Evo Roadrunners (Chris/Mark)</span>
                    </div>
                    <div className="TwoGrid">
                        <h2>Industry</h2>
                        <span>Taxi Industries</span>
                    </div>
                    <div className="TreeGrid">
                        <h2>Platform</h2>
                        <span>Mobile</span>
                    </div>
                    <div className="FoorGrid">
                        <h2>Services</h2>
                        <span>Design Development</span>
                    </div>
                    <div className="FiveGrid">
                        <h2>Tools</h2>
                        <span>Sketchapps Adobe Illustrator</span>
                    </div>
                    <div className="SixGrid">
                        <h2>Technology</h2>
                        <span>Android & iOS Native</span>
                    </div>
                </div>
            </div>
            <Evo />
        </OurProductContainer>
    </OurProductWrapper>
}
export default OurProduct;