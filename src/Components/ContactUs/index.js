import React from 'react';
import { ContactUsHeaderWrapper, ContactUsFooterWrapper } from './style';
import Group4 from '../../illustrations/Group4.svg';
import Budget from './budget.json';
import Service from './service.json';

const ContactUs = () => {
    return (
        <>
            <ContactUsHeaderWrapper>
                <div id="container" >
                    <form>
                        <h1> Discover What Service can do for you</h1>
                        <p> Let’s Talk</p>
                        <select   >
                            {Service.map((e) => {
                                return <option>{e.label}</option>
                            })}
                        </select>
                        <select   >
                            {Budget.map((e) => {
                                return <option>{e.label}</option>
                            })}
                        </select>
                        <div className="row">
                            <input placeholder="Full Name" />
                            <input placeholder="Email" />
                        </div>
                        <textarea rows="3" placeholder="Product Description" />
                        <button id="file"  > Attach File</button>
                        <button id="submit"  > Send a Request</button>
                    </form>
                    <div id="image">
                        <img src={Group4} alt="img" />
                    </div>
                </div>
            </ContactUsHeaderWrapper>
            <ContactUsFooterWrapper>
                <div id="Footercontainer" >
                    <h1>Contact Us</h1>
                    <ul>
                        <li><h2>Mobile</h2> <h2>+91 (942) 900 0062</h2></li>
                        <li><h2>Email</h2> <h2>help@in-touchlab.com</h2></li>
                        <li><h2>Skype</h2> <h2>mokshasd</h2></li>
                    </ul>
                </div>
            </ContactUsFooterWrapper>
        </>
    )
}


export default ContactUs;