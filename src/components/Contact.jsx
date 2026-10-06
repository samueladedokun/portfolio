function Contact (){
    return(
        <section id="contact" className="bg-slate-950 text-center text-white py-16 px-4">
            <h1 className="text-3xl sm:text-4xl font-semibold text-cyan-400">
                Contact Me
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mt-4">
                Have a project in mind or want to work together? Feel free to reach out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">

                <a 
                    href="mailto:samueladedokun061@gmail.com" 
                    className="bg-cyan-400 text-slate-950 font-bold rounded-lg py-3 px-8 hover:bg-cyan-500"
                >
                    Email Me
                </a>

                <a 
                    href="https://wa.me/2347079334740" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-950 text-cyan-400 font-bold rounded-lg py-3 px-8 border border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                    WhatsApp
                </a>

            </div>
        </section>
    )
}

export default Contact