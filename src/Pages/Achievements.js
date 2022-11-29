import AchiCard from "../Components/AchievementCard";
import "../CSS/Pages CSS/Achievements.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Achievements() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  });

  return (
    <div className="achiBody">
      <p className="achiHeading">My Achievements</p>

      <div ref={ref}>
        <motion.div animate={animation} className="achiContainer">
          <AchiCard
            title="Hackathons"
            desc="Bagged 3rd prize in Mozohack Hackathon, 2nd prize in TechCrawler Hackathon and participated in six other hackathons as well."
          />

          <AchiCard
            title="HackerRank"
            desc="Awarded 5 Star in CPP, 3 Star in Problem Solving, 3 Star in C and 2 Star in Python."
          />

          <AchiCard
            title="Certifications"
            desc="Certified in Python by NIELIT & Data Structures by Coursera."
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Achievements;
