function Project (){  
    return(  
        <section id="projects" className="bg-slate-900 text-center text-white py-16 px-4">  
            <h1 className="text-3xl sm:text-4xl font-semibold text-cyan-400">
                My Projects
            </h1>
  
            <div className="flex flex-col items-center mt-12">  
  
                <div className="bg-slate-800 border border-cyan-400 w-full max-w-md rounded-lg p-5 sm:p-6">  
  
                    <h1 className="text-cyan-400 text-2xl font-bold">Dripzone</h1>  
  
                    <p className="text-gray-300 mt-3 text-base sm:text-lg">
                        Dripzone is a modern clothing e-commerce website designed to showcase and sell   
                        fashion products through a clean and user-friendly interface.  
                    </p>  
                      
                    <div className="flex flex-wrap gap-3 mt-4 justify-center">  
                        <span className="bg-slate-950 text-cyan-300 border border-cyan-300 rounded px-3 py-1">
                            HTML
                        </span>
                        <span className="bg-slate-950 text-cyan-300 border border-cyan-300 rounded px-3 py-1">
                            CSS
                        </span>
                        <span className="bg-slate-950 text-cyan-300 border border-cyan-300 rounded px-3 py-1">
                            JavaScript
                        </span>
                    </div>  
  
                    <div className="flex flex-col sm:flex-row gap-3 mt-5 justify-center">  
                        <a  
                            href="https://dripzone-pink.vercel.app/"  
                            target="_blank"  
                            rel="noopener noreferrer" 
                            className="bg-cyan-400 text-slate-950 font-bold rounded-lg py-3 px-8 hover:bg-cyan-500"
                        > 
                            Live Demo 
                        </a> 
 
                        <a  
                            href="https://github.com/samueladedokun/dripzone"  
                            target="_blank"  
                            rel="noopener noreferrer" 
                            className="bg-slate-950 text-cyan-400 font-bold rounded-lg py-3 px-8 border border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                        > 
                            GitHub 
                        </a> 
                    </div>  
                </div>  
            </div>  
        </section>  
    )  
}  
  
export default Project