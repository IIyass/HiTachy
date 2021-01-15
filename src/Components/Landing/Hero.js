import React from 'react';
import { HeroWrapper } from './styles'
import { Wrapper } from '../../Common/Layout'
import union from '../../illustrations/Union.svg'
import Linkdin from '../../illustrations/in.svg';
import Dribble from '../../illustrations/dribbble.svg';
import Behance from '../../illustrations/Behance.svg';
import pattern from '../../illustrations/Pattern.svg'
import pattern2 from '../../illustrations/bluePattern.svg';
import pattern3 from '../../illustrations/redPattern.svg';
import pattern4 from '../../illustrations/finalPattern.svg';
import scroll from '../../illustrations/Scroll.svg';
import vector from '../../illustrations/Vector.svg';
import GlobalFonts from '../../fonts/fonts';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = (props) => {

    return <HeroWrapper as={Wrapper}>
        <GlobalFonts />
        <div id="container">
            <div id="socialTop">
                <img id="firstPattern" alt="pattern" src={pattern} />
                <a href="https://dribbble.com/">
                    <div className="imageContainer">
                        <img alt="dribble" src={Dribble} />
                    </div>
                </a>
                <a href="https://www.behance.net/">
                    <div className="imageContainer">
                        <img alt="Behance" src={Behance} />
                    </div>
                </a>
            </div>
            <h1>Let’s focus on your product</h1>
            <div>
                <div className="pattern">
                    <img alt="pattern" src={pattern3} />
                    <h2>Ul</h2>
                </div>
                <div className="pattern">
                    <img alt="union" id="union" src={union} />
                </div>
                <div className="pattern">
                    <img alt="pattern" id="pattern2" src={pattern2} />
                    <h4>UX</h4>
                </div>
            </div>
            <h3>DESIGN LAB</h3>
            <div id="socialBottom">
                <a href="https://www.linkedin.com/">
                    <div className="imageContainer">
                        <img alt="linkdin" id="linImage" src={Linkdin} />
                    </div>
                </a>
                <img alt="pattern" id="finalPattern" src={pattern4} />
            </div>
        </div>
        <AnchorLink href="#ourProject" id="scroll">
            <img src={scroll} alt="scroll" />
            <img alt="vector" id="vector" src={vector} />
        </AnchorLink>
    </HeroWrapper>
}
export default React.memo(Landing);