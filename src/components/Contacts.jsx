import React from "react"
import { motion } from "framer-motion"

export default function Contacts()
{
    return (
        <motion.section 
            className="contacts" 
            id="contacts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, delay: 5, ease: "easeOut" }}
        >
            <h2 className="contacts--header">Get in Contact!</h2>
            <p className="contacts--text">If you would like reach out to me for any business inquiries or if you just wanna talk, here are my contacts!</p>
            <div className="contacts--container">
                <div className="contacts--box">
                    <h3 className="contacts--boxheader">Contacts</h3>
                    <div className="contacts--iconcontainer">
                        <a href="https://github.com/groobob" target="_blank" className="contacts--icons"><img src="images/icons/github.png"/></a>
                        <a href="https://www.linkedin.com/in/richard-zhang-52705b27b/" target="_blank" className="contacts--icons"><img src="images/icons/linkedin.png"/></a>
                    </div>
                    <p className="contacts--caption">business email: richard.zhangonca@gmail.com</p>
                </div>
                <div className="contacts--box">
                    <h3 className="contacts--boxheader">Socials</h3>
                    <div className="contacts--iconcontainer">
                    <a href="https://www.instagram.com/groobaer/" target="_blank" className="contacts--icons"><img className="contacts--icons"src="images/icons/instagram.png"/></a>
                    </div>
                    <p className="contacts--caption">discord: groobr</p>
                </div>
            </div>
        </motion.section>
    )
}