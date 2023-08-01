import React from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function About()
{
    return (
        <motion.section 
            className="about"
            id="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, delay: 3, ease: "easeOut" }}
        >
            <AnimatePresence>
                <motion.h2 
                    className="about--header"
                    initial={{ opacity: 0, x: -200, y: 10}}
                    whileInView={{ opacity: 1, x: 0, y: 0}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    exit={{ opacity: 0, x: -20000 }}
                >Hi there! I'm Richard Zhang</motion.h2>
            <div className="about--container">
                <div className="about--body">
                    <motion.p 
                        className="about--text"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        exit={{ opacity: 0 }}
                    >I'm currently just a high school student interested in computers and the arts. 
                    More specifically, game development in Unity, web development in React, digital art in Clip Studio Paint, and animation in Aseprite.
                    In the future, I hope to make it into the University of Waterloo for computer science :)</motion.p>
                    <motion.p 
                        className="about--text"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        exit={{ opacity: 0 }}
                    >I like video games, music, and animation. 
                    If you would like to know some specifics on what I like, you can check it out <a className="about--link" href="https://docs.google.com/document/d/1mQjjlJGLDYcUABI0hCqKz8ewb_b8Yl7NF73MlYwbocU/edit?usp=sharing" target="_blank">here</a>! (little nerdy I know)</motion.p>
                    <motion.p 
                        className="about--text"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        exit={{ opacity: 0 }}
                    >I hope to learn whatever I find cool and broaden my horizons when it comes to my skills. 
                    For now, my ambitions lie with Blender and FL Studio for music composition.</motion.p>
                </div>
                <motion.img 
                src="images/other/portrait.png"
                className="about--portrait"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.25 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                exit={{ opacity: 0 }}
                />
            </div>
            </AnimatePresence>
        </motion.section>
    )
}