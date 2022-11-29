import "../CSS/Pages CSS/Skills.css";
import SkillCard from "../Components/SkillCard";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.2,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  });

  return (
    <div className="skillBody">
      <p className="skillHeading">My Skills</p>

      <div ref={ref}>
        <motion.div className="skillContainer" animate={animation}>
          <SkillCard
            title="App Development"
            array={[
              "React Native",
              "Flutter",
              "Android Studio",
              "Software Development Kits (SDKs)",
            ]}
            key={1}
          />
          <SkillCard
            title="Full Stack Development"
            array={[
              "ReactJS",
              "NextJS",
              "Tailwind CSS",
              "FramerMotion",
              "JavaScript",
              "NodeJS",
              "ExpressJS",
              "MongoDB",
              "SQL",
              "AWS",
              "Sanity",
            ]}
            key={2}
          />
          <SkillCard
            title="Designing"
            array={[
              "Figma",
              "Adobe Illustrator",
              "Color Theory",
              "Web Typography",
              "Responsive Design",
              "WordPress",
            ]}
            key={3}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
