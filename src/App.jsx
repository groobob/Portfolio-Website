import React from "react"
import { motion } from "framer-motion"
import About from "./components/About"
import Commissions from "./components/Commissions"
import Contacts from "./components/Contacts"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Commissions />
      <Contacts />
    </div>
  )
}

export default App
