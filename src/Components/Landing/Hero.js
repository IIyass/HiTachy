import React from 'react';
import { HeroWrapper } from './styles'
import { Wrapper } from '../../Common/Layout'
import union from '../../illustrations/Union.svg'
import Linkdin from '../../illustrations/in.svg';
import Dribble from '../../illustrations/dribbble.svg';
import Behance from '../../illustrations/Behance.svg';
const Landing = (props) => {
    return <HeroWrapper as={Wrapper}>
        <div id="container">
            <div id="socialTop">
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
                <h2>UI</h2>
                <img alt="union" src={union} />
                <h4>UX</h4>
            </div>
            <h3>DESIGN LAB</h3>
            <div id="socialBottom">
                <a href="https://www.linkedin.com/">
                    <div className="imageContainer">
                        <img alt="linkdin" id="linImage" src={Linkdin} />
                    </div>
                </a>
            </div>
        </div>
    </HeroWrapper>
}
export default React.memo(Landing);