import React from "react"
import { motion } from "framer-motion"

export default function Navbar()
{
    return (
        <motion.nav 
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", delay: 5, duration: 2 }}
            viewport={{ once: true }}
        >
            <h3 className="navbar--name">Richard Zhang</h3>
            <h3 className="navbar--text"><a href="#about" className="navbar--link">About</a></h3>
            <h3 className="navbar--text"><a href="#projects" className="navbar--link">Projects</a></h3>
            <h3 className="navbar--text"><a href="#top" className="navbar--link">Commissions</a></h3>
            <h3 className="navbar--text"><a href="#contacts" className="navbar--link">Contacts</a></h3>
            {/* for later <img src="menu" alt="menu" /> */}
        </motion.nav>
    )
}