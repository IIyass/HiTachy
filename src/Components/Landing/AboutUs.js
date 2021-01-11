import React from 'react';
import { AboutContainer, AboutWrapper } from './styles'
import { Wrapper } from '../../Common/Layout'
import avatar from '../../illustrations/Photo.svg'

const AboutUs = () => {
    return <AboutWrapper >
        <AboutContainer as={Wrapper}>
            <h1>About Us</h1>
            <h2>We are a Digital Agency Lab.</h2>
            <span>Still moving from the First day with Fascinating.</span>

            <p className="firstType">
                Since Nov 2012, I Mr. Sandeep Dave happening my up-to-the-minute Career
                as Freelancer to Design Digital Product for Web & Mobile. I have always trust in Continuous
                research to help us customer requirements, We can create the product in such a way,
                where the end user can understand easily and experience the difference.
                Our intellectual team show a desire to put all the way effort with Client as Partner
                with joint understanding. I can say with Honored about our work experience with many
                Companies in past few years to produce various type of innovative Products.
                Those smooth completion of task always facilitated our Developer’s
                mindset to prove our self in Innovative Design and Development process.
            </p>

            <div className="footer">
                <div className="service">
                    <h3>Technology</h3>
                    <h3>Design</h3>
                    <p>  Figma, Sketch, Adobe’s Software,</p>
                    <h3>
                        Development (Web + Mobile)
                     </h3>
                    <p>
                        (Php) (CorePhp) (Wordpress) (Umbraco) (asp.net) (Angular) (Node.Js) (React Native)
                        Native Development for Mobile.
                </p>
                </div>

                <div className="profil">
                    <img src={avatar} alt="avatar" />
                    <h4>Sandip Dave</h4>
                    <p>Founder & CEO of iN-TouchLab</p>
                </div>
            </div>
        </AboutContainer>
    </AboutWrapper>
}
export default AboutUs;