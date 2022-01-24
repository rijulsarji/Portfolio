import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Achievements from "./Pages/Achievements";
import {motion} from "framer-motion"
import BottomCard from "./Components/BottomCard";

function HomeRoute() {
  return (
    <motion.div style={{overflow: "hidden"}}  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      {/* <Navbar /> */}
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <BottomCard />
    </motion.div>
  )     
}

export default HomeRoute;