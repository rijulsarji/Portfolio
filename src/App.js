import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div style={{overflow: "hidden"}}>
      {/* <Navbar /> */}
      <Home />
      <Experience />
      <Skills />
      <Projects />
    </div>
  )     
}

export default App;