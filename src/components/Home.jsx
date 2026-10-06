import Navbar from "./Navbar"

import Hero from "./Hero"
import About from "./About"
import Skill from "./Skill"
import Project from "./Project"
import Contact from "./Contact"
import Footer from "./Footer"

function Home (){
    return(
        <>
            <Navbar />
            <Hero />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Footer />
            
        </>
    )
}

export default Home