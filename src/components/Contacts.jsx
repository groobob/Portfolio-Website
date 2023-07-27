import React from "react"
import { motion } from "framer-motion"

export default function Contacts()
{
    return (
        <section className="contacts">
            <h2 className="contacts--header">Get in Contact!</h2>
            <div className="contacts--container">
                <div className="contacts--contactscontainer">
                    <h3 className="contacts--contacts">Contacts</h3>
                    <img src="some icons for stuff like linkedin or github" alt="github & linkedin pictures" />
                    <p>links emails and stuff</p>
                </div>
                <div className="contacts--socialscontainer">
                    <h3 className="contacts--socials">Socials</h3>
                    <img src="bunch of social media icons" alt="social media icons" />
                </div>
            </div>
        </section>
    )
}