import React from 'react';
import { EvoContainer } from './style'
import Hand from '../../illustrations/Bitmap.svg'
import Group2 from '../../illustrations/Group2.svg'
import Phone1 from '../../illustrations/phone1.svg'
import Phone2 from '../../illustrations/phone2.svg'
import Phone3 from '../../illustrations/phone3.svg'
import Phone5 from '../../illustrations/phone4.svg'
import Phone4 from '../../illustrations/phone5.svg'
import Phone6 from '../../illustrations/phone6.svg'
import Phone7 from '../../illustrations/phone8.svg'
import Phone8 from '../../illustrations/phone8.svg'
import Phone9 from '../../illustrations/phone9.svg'
import evo from '../../illustrations/evo.svg'
const Evo = () => {
    return <EvoContainer>
        <div className="hand">
            <img alt="Hand" src={Hand} />
            <img alt="HaGroup2nd" src={Group2} />
        </div>

        <div className="firstSliderBar">
            <img alt="Phone1" src={Phone1} />
            <img alt="Phone2" src={Phone2} />
            <img alt="Phone3" src={Phone3} />
            <img src={evo} id="logo" alt="evo" />
        </div>

        <div className="secondSliderBar">
            <img alt="Phone4" src={Phone4} />
            <img alt="Phone5" src={Phone5} />
            <img alt="Phone6" src={Phone6} />
        </div>


        <div className="thirdSliderBar">
            <img alt="Phone7" src={Phone7} />
            <img alt="Phone8" src={Phone8} />
            <img alt="Phone9" src={Phone9} />
        </div>
    </EvoContainer>
}

export default Evo;