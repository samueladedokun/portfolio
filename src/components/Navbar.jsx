import { useState } from "react"

function Navbar (){
    const [active, setActive] = useState("home")

    return(
        <nav className="w-full py-4 px-3 sm:px-10 border-b bg-slate-950 text-white sticky top-0 z-50">
            <div className="flex gap-4 sm:gap-8 font-bold items-center justify-center text-sm sm:text-base">

                <a
                    href="/"
                    onClick={() => setActive("home")}
                    className={active === "home" ? "text-cyan-400" : "hover:text-cyan-400"}
                >
                    Home
                </a>

                <a
                    href="#about"
                    onClick={() => setActive("about")}
                    className={active === "about" ? "text-cyan-400" : "hover:text-cyan-400"}
                >
                    About
                </a>

                <a
                    href="#skills"
                    onClick={() => setActive("skills")}
                    className={active === "skills" ? "text-cyan-400" : "hover:text-cyan-400"}
                >
                    Skills
                </a>

                <a
                    href="#projects"
                    onClick={() => setActive("projects")}
                    className={active === "projects" ? "text-cyan-400" : "hover:text-cyan-400"}
                >
                    Projects
                </a>

                <a
                    href="#contact"
                    onClick={() => setActive("contact")}
                    className={active === "contact" ? "text-cyan-400" : "hover:text-cyan-400"}
                >
                    Contact
                </a>

            </div>
        </nav>
    )
}

export default Navbar