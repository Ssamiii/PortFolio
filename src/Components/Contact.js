import React from 'react'
import { Image } from 'react-bootstrap'
import "./Contact.css"
import instalogo from "./instalogo.png"
import gmaillogo from "./gmaillogo.png";
export const Contact = () => {
    return (
        <div className="container">
            <div className="liners">
                <p className="normal">
                    You can contact me on:
                </p>
                <h1>
                    <span className="socials">M</span>
                    <span className="socials">y</span>
                    <span>  </span>
                    <span className="socials">S</span>
                    <span className="socials">o</span>
                    <span className="socials">c</span>
                    <span className="socials">i</span>
                    <span className="socials">a</span>
                    <span className="socials">l</span>
                    <span className="socials">s</span>
                </h1>
            </div>
            <div className="accounts">
                <p><Image src={instalogo} className="instaLogo" roundedCircle /><span className="insta"> @goyalsamarth</span></p>
                <p><Image src={gmaillogo} className="gmailLogo" thumbnail /><span className="email">samarth.goyal1999@gmail.com</span></p>
            </div>
        </div>
    )
}
