import React from "react"
import { motion } from "framer-motion"

export default function Navbar()
{
    return (
        <nav className="navbar">
            {/* for later <img src="logo" alt="logo" /> */}
            <h3 className="navbar--name">Richard Zhang</h3>
            <h3 className="navbar--about">About</h3>
            <h3 className="navbar--projects">Projects</h3>
            <h3 className="navbar--commissions">Commissions</h3>
            <h3 className="navbar--contacts">Contacts</h3>
            {/* for later <img src="menu" alt="menu" /> */}
        </nav>
    )
}