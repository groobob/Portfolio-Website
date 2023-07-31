import React from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function Commissions()
{
    return (
        <AnimatePresence>
            <motion.section 
                className="commissions" 
                id="commissions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5, delay: 5, ease: "easeOut" }}
            >
                <motion.h2 
                    className="commissions--header"
                    initial={{ opacity: 0, x: -200, y: 10}}
                    whileInView={{ opacity: 1, x: 0, y: 0}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    exit={{ opacity: 0, x: -20000 }}
                >Art Commissions</motion.h2>
                <motion.p 
                    className="commissions--text"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    exit={{ opacity: 0 }}
                >wip for the future!</motion.p>
            </motion.section>
        </AnimatePresence>
    )
}