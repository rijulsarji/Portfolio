import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../CSS/Pages CSS/About.css";
import { useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import rijulsarji from "../Images/About Me Logos/rijulsarji.png";
import left from "../Images/About Me Logos/left.png";
import right from "../Images/About Me Logos/right.png";

function About() {
  document.title = "Rijul Sarji | About Me";

  useEffect(() => {
    window.scrollTo(0, 0);
    let img = document.getElementById("rijulsarji");
    let leftSide = document.getElementById("rightLImg");
    let rightSide = document.getElementById("leftRImg");
    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      img.style.opacity = value * 0.15 + "%";
      leftSide.style.top = value * 0.05 + "%";
      rightSide.style.top = value * 0.05 + "%";
    });
  }, []);

  return (
    <motion.div
      className="aboutBody"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to="/">
        <IoMdArrowBack color="#E6416B" className="homeLink" />
      </Link>

      <div className="leftDesign">
        <img src={left} alt="left" className="leftImg" id="leftLImg" />
        <img src={right} alt="right" className="rightImg" id="rightLImg" />
      </div>

      <div className="rightDesign">
        <img src={left} alt="left" className="leftImg" id="leftRImg" />
        <img src={right} alt="right" className="rightImg" id="rightRImg" />
      </div>

      <p id="introText" className="aboutText">
        RIJUL SARJI
      </p>
      <p className="aboutText">Scroll to know more...</p>
      <div className="rijulImgContainer">
        <img src={rijulsarji} id="rijulsarji" alt="rijulsarji" />
      </div>
      <div className="descContainer">
        <p className="aboutDesc">
          I am a Front End Developer with passion and dreams. I have led
          multiple teams in multiple hackathons to create and manage projects
          and have bagged the 2nd prize in one of them as well, and hence have
          ample experience in community and group projects. I am ready to face
          any and all hurdles and guide my team to the best possible way with
          the highest efficiency. Being a Web & App developer in both,
          bootstrapped and seed-funded startups, I have worked in both worlds of
          the new age. I have been working as a professional for almost half a
          year. I am active in the hackathon competitions of the world for over
          a year and created all my projects by clubbing multiple ideas. I also
          upload my work to dribbble and grab others' ideas to seek more angles
          of the same image. With continuous exposure to Figma, I also design my
          own logos, wireframes, designs and even help others look at the world
          from a different view. 
          <br />
          <br />
          Apart from work, I play Valorant, good enough
          to get some decent scores. English Rock and Punjabi songs are my
          favorite pastime for me. Horror movies give me the rush I need in
          life, and Family Guy gives me the humor. I sometimes do research in
          Web3 as well. Cars have always been the love of my life since I was a
          child, and hence I follow the car community as well. Apart from these,
          I am just a regular coffee-sipping, party mood, happy guy.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
