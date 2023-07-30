import React from "react"
import { motion } from "framer-motion"
import Card from "./Card"
import projectsData from "../projectsData"

export default function Projects()
{

    const cardElements = projectsData.map(item => (
        <Card 
            key={item.id}
            {...item}
        />
    ))

    return (
        <section className="projects">
            <motion.h2 
                className="projects--header"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                exit={{ opacity: 0 }}
            >My Projects</motion.h2>
            <div className="projects--options"></div>
            <div className="projects--container">
                {cardElements}
            </div>
        </section>
    )
}