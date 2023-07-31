import React from "react"
import { motion } from "framer-motion"

export default function Commissions()
{
    return (
        <motion.section 
            className="commissions" 
            id="commissions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, delay: 4, ease: "easeOut" }}
        >
            <h2 className="commissions--header">Art Commissions</h2>
            <p className="commissions--text">Check out my Artistree page for prices or drop a few commissions here!</p>
            <p>link</p>
        </motion.section>
    )
}