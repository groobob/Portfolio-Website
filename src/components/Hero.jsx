import React from "react"
import { motion } from "framer-motion"

export default function Hero()
{
    return (
        <motion.div 
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, delay: 1.5, ease: "easeOut" }}
        >
            <motion.h1
                
            >Welcome to</motion.h1>
            <h2>my website</h2>
        </motion.div>
    )
}