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
            transition={{ duration: 5, delay: 6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.h2 
                className="contacts--header"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
            >Get in Contact!</motion.h2>
            <motion.p 
                className="contacts--text"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >If you would like reach out to me for any business inquiries or if you just wanna talk, here are my contacts!</motion.p>
            <div className="contacts--container">
                <div className="contacts--box">
                    <motion.h3 
                        className="contacts--boxheader"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >Contacts</motion.h3>
                    <div className="contacts--iconcontainer">
                        <motion.a 
                            href="https://github.com/groobob" 
                            target="_blank" 
                            className="contacts--icons"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 2.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        ><img src="images/icons/github.png"/></motion.a>
                        <motion.a 
                            href="https://www.linkedin.com/in/richard-zhang-52705b27b/" 
                            target="_blank" 
                            className="contacts--icons"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 2.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        ><img src="images/icons/linkedin.png"/></motion.a>
                    </div>
                    <motion.p 
                        className="contacts--caption"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >business email: richard.zhangonca@gmail.com</motion.p>
                </div>
                <div className="contacts--box">
                    <motion.h3 
                        className="contacts--boxheader"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >Socials</motion.h3>
                    <div className="contacts--iconcontainer">
                    <motion.a 
                        href="https://www.instagram.com/groobaer/" 
                        target="_blank" 
                        className="contacts--icons"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    ><img className="contacts--icons"src="images/icons/instagram.png"/></motion.a>
                    </div>
                    <motion.p 
                        className="contacts--caption"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 2.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >discord: groobr</motion.p>
                </div>
            </div>
        </motion.section>
    )
}