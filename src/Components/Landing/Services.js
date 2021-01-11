import React from 'react';
import { ServiceWrapper } from './styles'
import { Wrapper } from '../../Common/Layout'
import Group82 from '../../illustrations/Group82.svg'
import phone from '../../illustrations/Mobile.svg'
import tablet from '../../illustrations/Web.svg'

const Service = (props) => {
    return <ServiceWrapper as={Wrapper}>
        <h1>Our Services</h1>
        <img src={Group82} alt="img" />
        <div className="list">
            <ul>
                <li>Brainstorm</li>
                <li>Process</li>
                <li>Wireframe</li>
                <li>Prototype</li>
                <li>Hi Fidelity Design</li>
            </ul>
            <div className="text">
                <p>We create world-class digital products,<br />
                As a full-service of Ui and UX design agency,
                we work closely with our clients to define,
                design and develop client thought into real time across all platforms.
                </p>
                <div>
                    <img src={phone} alt="phone" />
                    <img src={tablet} alt="tablet" />
                </div>
            </div>
        </div>
    </ServiceWrapper>
}
export default Service;