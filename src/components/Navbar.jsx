import React from "react"
import { motion } from "framer-motion"

export default function Navbar()
{
    return (
        <nav className="navbar">
            {/* for later <img src="logo" alt="logo" /> */}
            <h3 className="navbar--name">Richard Zhang</h3>
            <h3 className="navbar--text"><a href="#about" className="navbar--link">About</a></h3>
            <h3 className="navbar--text"><a href="#projects" className="navbar--link">Projects</a></h3>
            <h3 className="navbar--text"><a href="#top" className="navbar--link">Commissions</a></h3>
            <h3 className="navbar--text"><a href="#contacts" className="navbar--link">Contacts</a></h3>
            {/* for later <img src="menu" alt="menu" /> */}
        </nav>
    )
}