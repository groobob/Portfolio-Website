import React from "react"
import { motion } from "framer-motion"

export default function About()
{
    return (
        <section className="about">
            <h2 className="about--header">Hi there! I'm Richard Zhang</h2>
            <div className="about--body">
                <p className="about--text">I'm currently just a high school student interested in computers and the arts. 
                    More specifically, game development in Unity, web development in React, digital art in Clip Studio Paint, and animation in Aseprite.
                    In the future, I hope to make it into the University of Waterloo for computer science :)</p>
                <p className="about--text">I like video games, music, and animation. 
                    If you would like to know some specifics on what I like, you can check it out <a className="about--link" href="https://docs.google.com/document/d/1mQjjlJGLDYcUABI0hCqKz8ewb_b8Yl7NF73MlYwbocU/edit?usp=sharing">here</a>! (little nerdy I know)</p>
                <p className="about--text">I hope to learn whatever I find cool and broaden my horizons when it comes to my skills. 
                    For now, my ambitions lie with Blender and FL Studio for music composition.</p>
                {/*<img src="image of me here" alt="personal image" /> */}
            </div>
        </section>
    )
}