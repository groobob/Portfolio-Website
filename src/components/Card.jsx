import React from "react"
import { motion } from "framer-motion"

export default function Card(props)
{
    const randomFactor = Math.random() / 2;

    const styles = {
        backgroundImage: `url(images/${props.img})`
    }

    return (
        <motion.div 
            style={styles} 
            className="card"
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            exit={{ opacity: 0 }}
        >

        </motion.div>
    )
}