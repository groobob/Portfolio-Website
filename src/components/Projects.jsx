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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
            >My Projects</motion.h2>
            <div className="projects--options"></div>
            <div className="projects--container">
                {cardElements}
            </div>
        </section>
    )
}