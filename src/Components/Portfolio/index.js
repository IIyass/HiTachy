import React, { useState } from 'react';
import { PortfolioContainer, PortfolioWrapper } from './style';
import PortfolioData from '../../Data/portfolio';
import Apple from '../../illustrations/Group10.svg';
import Google from '../../illustrations/icon.svg';
import Icon from '../../illustrations/Group3.svg';
import Modal from '../Modal'

const Portfolio = () => {
    const [open, setOpen] = useState(false);
    const [fullImage, setFullImage] = useState('');



    const handleFullIage = (full) => {
        setFullImage(full);
        setOpen(true);
        document.body.style.overflow = "hidden";
    }

    const handleCloseModal = () => {
        setFullImage('')
        setOpen(false);
        document.body.style.overflow = "scroll";
    }

    return <PortfolioWrapper>
        {open ? <Modal
            onClose={handleCloseModal}
            open={open}>
            <img id="full" alt="Waiting ..." src={fullImage}
            />
        </Modal>
            : null}
        <PortfolioContainer  >
            {PortfolioData.map(({ image, name, detail, apple, android, icon, full }) => {
                return <>
                    <div className="work" >
                        <img alt="img" src={image} onClick={() => handleFullIage(full)} />
                        <div className="footer">
                            <div>
                                <h2>{name}</h2>
                                <span>{detail}</span>
                            </div>
                            <ul>
                                <a href={apple}>  <li><img alt="ios" src={Apple} /></li></a>
                                <a href={android}>  <li><img alt="google" src={Google} /></li></a>
                                <a href={icon}>    <li><img alt="icon" src={Icon} /></li></a>
                            </ul>
                        </div>
                    </div>
                </>
            })}
        </PortfolioContainer>
    </PortfolioWrapper>

}
export default Portfolio