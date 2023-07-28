import React from "react"
import { motion } from "framer-motion"
import Card from "./Card"
import projectsData from "../projectsData"

export default function Projects()
{

    const cardElements = projectsData.map(item => (
        <Card 
            key={item.id}
            info={item}
        />
    ))

    return (
        <section className="projects">
            <h2 className="projects--header">My Projects</h2>
            <div className="projects--options"></div>
            <div className="projects--container">
                {cardElements}
            </div>
        </section>
    )
}