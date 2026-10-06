function Hero() {
    return (
        <div className="bg-slate-950 py-20 px-4 text-white flex flex-col items-center text-center">

            <p className="text-3xl sm:text-5xl font-bold max-w-5xl leading-tight">
                Hello, I'm Samuel. I'm{" "}
                <span className="text-cyan-400">
                    frontend developer
                </span>{" "}
                and I enjoy building clean, interactive websites & web applications.
                My focus is React and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <button className="bg-cyan-400 text-slate-950 font-bold rounded-lg py-3 px-8 hover:bg-cyan-700">
                    View My Projects
                </button>

                <button className="bg-slate-950 text-cyan-400 font-bold rounded-lg py-3 px-8 border border-cyan-400 hover:bg-cyan-400 hover:text-slate-950">
                    Contact Me
                </button>

            </div>

        </div>
    )
}

export default Hero