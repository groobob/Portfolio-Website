import React from "react"
import { motion } from "framer-motion"

export default function Contacts()
{
    return (
        <section className="contacts">
            <h2 className="contacts--header">Get in Contact!</h2>
            <p className="contacts--text">If you would like reach out to me for any business inquiries or even would just like to chat, here are my socials. Maybe we could play around of Tetris ;)</p>
            <div className="contacts--container">
                <div className="contacts--box">
                    <h3 className="contacts--boxheader">Contacts</h3>
                    <img src="some icons for stuff like linkedin or github" alt="github & linkedin pictures" />
                    <p>links emails and stuff</p>
                </div>
                <div className="contacts--box">
                    <h3 className="contacts--boxheader">Socials</h3>
                    <img src="bunch of social media icons" alt="social media icons" />
                </div>
            </div>
        </section>
    )
}