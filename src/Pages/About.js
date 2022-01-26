import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../CSS/Pages CSS/About.css";
import { useEffect } from "react";
import {
  IoIosMail,
  IoLogoDribbble,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdArrowBack,
} from "react-icons/io";
import rijulsarji from "../Images/About Me Logos/rijulsarji.png";
import left from "../Images/About Me Logos/left.png";
import right from "../Images/About Me Logos/right.png";
import {
  SiDribbble,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
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
          I am a Front End Developer with passion and dreams. I have led teams
          in multiple hackathons to create and manage projects and bagged the
          2nd prize in one of them as well. Therefore, I have ample experience
          in community and group projects. I am ready to face any and all
          hurdles and guide my team through the most efficient way. Being a Web
          & App developer in both bootstrapped and seed-funded startups, I have
          worked in these worlds of the new age. I have been working as a
          professional for almost half a year while also being active in
          hackathon competitions of the world for over a year and creating a lot
          of projects by clubbing multiple ideas. I also upload my work to
          dribbble and understand others' ideas to seek a better perspective of
          the same image. With continuous exposure to Figma, I also design my
          own logos, wireframes, and designs. I even help others look at the
          world from a different view.
          <br />
          <br />
          Apart from work, I play Valorant, good enough to get some decent
          scores. English Rock and Punjabi songs are my favorite pastime. Horror
          movies give me the rush I need in life, and Family Guy gives me the
          humor. I sometimes research in Web3 as well. Since childhood, Cars
          have been the love of my life. Consequently, I follow the car
          community as well. Apart from these, I am just a regular
          coffee-sipping, happy guy.
        </p>
      </div>
      <div className="socialMediaDiv">
        <a
          href="https://www.linkedin.com/in/rijul-sarji/"
          target="_blank"
          id="linkedin"
        >
          <SiLinkedin className="socialMedia" />
        </a>
        <a 
          href="https://github.com/rijulsarji" 
          target="_blank" 
          id="github">
          <SiGithub className="socialMedia" />
        </a>
        <a 
          href="https://dribbble.com/rijulsarji" 
          target="_blank" 
          id="dribbble">
          <SiDribbble className="socialMedia" />
        </a>
        <a 
          href="https://twitter.com/rijul_sarji" 
          target="_blank" 
          id="twitter">
          <SiTwitter className="socialMedia" />
        </a>
        <a
          href="https://instagram.com/rijul_sarji"
          target="_blank"
          id="instagram"
        >
          <SiInstagram className="socialMedia" />
        </a>
        <a 
          href="mailto:rijulsarji@gmail.com" 
          target="_blank" 
          id="mail">
          <SiGmail className="socialMedia" />
        </a>
      </div>
    </motion.div>
  );
}

export default About;
