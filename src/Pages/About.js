import {motion} from "framer-motion"
import { Link } from "react-router-dom";
import "../CSS/Pages CSS/About.css"
import {useEffect} from "react"
import {FaGithub, FaHome} from "react-icons/fa";
import rijulsarji from "../Images/rijulsarji.png";
import okay from "../Images/okay.png";
import left from "../Images/left.png";
import right from "../Images/right.png";

function About() {

    useEffect(() => {
        let img = document.getElementById("rijulsarji");
        let leftSide = document.getElementById("rightLImg");
        let rightSide = document.getElementById("leftRImg");
        window.addEventListener("scroll", function() {
            let value = window.scrollY;
            img.style.opacity = value * 0.15 + "%";
            leftSide.style.top = value * 0.05 + "%";
            rightSide.style.top = value * 0.05 + "%";
        })
    }, [])


    return (
      <motion.div
        className="aboutBody"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Link to="/">
          <FaHome color="#E6416B" className="homeLink" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis
            donec et odio pellentesque diam volutpat commodo. Pulvinar sapien et
            ligula ullamcorper. Nunc lobortis mattis aliquam faucibus. Magna ac
            placerat vestibulum lectus mauris ultrices. Eros in cursus turpis
            massa tincidunt dui ut ornare. Vulputate odio ut enim blandit
            volutpat maecenas volutpat blandit aliquam. Placerat duis ultricies
            lacus sed turpis tincidunt id. Augue interdum velit euismod in
            pellentesque massa. Augue lacus viverra vitae congue eu consequat ac
            felis. Egestas congue quisque egestas diam. Vitae congue eu
            consequat ac felis donec et odio pellentesque. Auctor eu augue ut
            lectus. Dui id ornare arcu odio ut sem nulla. Praesent tristique
            magna sit amet. Malesuada nunc vel risus commodo. Commodo sed
            egestas egestas fringilla phasellus faucibus scelerisque eleifend.
            Vel quam elementum pulvinar etiam non. Tincidunt augue interdum
            velit euismod in pellentesque. Diam ut venenatis tellus in metus
            vulputate eu scelerisque felis. Amet mattis vulputate enim nulla
            aliquet porttitor lacus luctus. Fames ac turpis egestas maecenas
            pharetra convallis posuere morbi leo. Etiam dignissim diam quis enim
            lobortis scelerisque fermentum. Nisi scelerisque eu ultrices vitae
            auctor eu augue. Tellus orci ac auctor augue mauris. Elit sed
            vulputate mi sit amet mauris. Non curabitur gravida arcu ac.
            Interdum velit laoreet id donec ultrices tincidunt arcu. Odio aenean
            sed adipiscing diam donec.
          </p>
        </div>
      </motion.div>
    );
}

export default About;