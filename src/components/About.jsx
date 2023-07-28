import React from "react"
import { motion } from "framer-motion"

export default function About()
{
    return (
        <section className="about">
            <h2 className="about--header">Hi there! I'm Richard Zhang</h2>
            <div className="about--body">
                <p className="about--text">I'm currently just a high school student interested in computers and the arts. 
                    More specifically, I mainly enjoy computer science, web development, digital art, and animation.
                    In the future, I hope to make it into the University of Waterloo for computer science :)</p>
                {/*<img src="image of me here" alt="personal image" /> */}
            </div>
        </section>
    )
}