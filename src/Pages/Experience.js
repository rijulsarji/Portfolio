import "../CSS/Pages CSS/Experience.css";
import ExpCard from "../Components/ExperienceCard"
import Aaruush from "../Images/Aaruush.jpg"
import Alexa from "../Images/Alexa.png"
import GFG from "../Images/GFG.jpg"
import DS from "../Images/DS.jfif"
import { motion, useAnimation } from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

function Experience() {

  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect (() => {
    if(inView) {
      animation.start ({
        opacity: 1,
        transition: {
          duration: 1
        }
      })
    }

    if(!inView) {
      animation.start ({
        opacity: 0
      })
    }
  })

    return (
      <div className="expBody">
        <p className="expHeading">Experience</p>

        <div ref={ref}>
        <motion.div
          id="expContainer"
          animate={animation}
        >
          <ExpCard
            title="Design Scaling"
            profile="Web Developer Intern"
            period="December '21 to Present"
            achievement="Designed the Landing Page for the Product"
            logo={DS}
          />
          <ExpCard
            title="Alexa Developers 
                SRM"
            profile="Web Developer"
            period="October '21 to Present"
            logo={Alexa}
          />
          <ExpCard
            title="GeeksforGeeks SRM"
            profile="Technical Executive"
            period="September '21 to Present"
            achievement="Appointed as Project Lead"
            logo={GFG}
          />
          <ExpCard
            title="Aaruush SRM"
            profile="Web & App Developer"
            period="October '21 to Present"
            logo={Aaruush}
          />
        </motion.div>
        </div>
      </div>
    );
}

export default Experience;