import React from "react"
import { motion } from "framer-motion"

export default function Card(props)
{
    const [show, setShow] = React.useState(false)

    const randomFactor = Math.random() / 2;

    const styles = {
        backgroundImage: show ? `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(images/${props.img})` : `url(images/${props.img})`
    }

    let scaleMultiplier = 1;

    return (
        <motion.div 
            style={styles} 
            className="card"
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", ease: "easeOut", scale: { duration: 0.15 }, y: { duration: 0.5 + randomFactor} }}
            exit={{ opacity: 0 }}
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
        >
            <div className="card--container">
                {show && <motion.h3 
                    className="card--header" 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", duration: 0.3, ease: "easeIn"}}
                >{props.name}</motion.h3>}
                {show && <motion.p 
                    className="card--description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", duration: 0.4, ease: "easeIn", delay: 0.3}}>{props.description}</motion.p>}
                {show && <motion.a 
                    className="card--link" 
                    href={`${props.url}`} 
                    target="_blank"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", duration: 0.5, ease: "easeIn", delay: 1}}>Check it out</motion.a>}
            </div>
        </motion.div>
    )
}