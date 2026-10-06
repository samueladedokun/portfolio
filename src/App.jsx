import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Project"
import Skill from "./components/Skill"
import Contact from "./components/Contact"

function App(){
  return(
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

    </BrowserRouter>
  )
}



export default App
