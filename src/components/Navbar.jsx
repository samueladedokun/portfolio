function Navbar (){

    return(
        <nav className="w-full py-4 px-3 sm:px-10 border-b bg-slate-950 text-white sticky top-0 z-50">
            <div className="flex gap-4 sm:gap-8 font-bold items-center justify-center text-sm sm:text-base">

                <a
                    href="/"
                >
                    Home
                </a>

                <a
                    href="#about"
                >
                    About
                </a>

                <a
                    href="#skills"
                >
                    Skills
                </a>

                <a
                    href="#projects"
                >
                    Projects
                </a>

                <a
                    href="#contact"
                >
                    Contact
                </a>

            </div>
        </nav>
    )
}

export default Navbar