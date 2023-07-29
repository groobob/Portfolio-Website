import React from "react"
import { motion } from "framer-motion"

export default function Card(props)
{
    const styles = {
        backgroundImage: `url(images/${props.img})`
    }

    return (
        <motion.div 
            style={styles} 
            className="card"
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1.1 }}
        >

        </motion.div>
    )
}