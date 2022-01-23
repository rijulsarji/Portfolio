import ProjectCard from "../Components/ProjectCard";
import "../CSS/Pages CSS/Projects.css";
import Bookzilla from "../Images/Project Logos/Bookzilla.png";
import ToDoList from "../Images/Project Logos/ToDoList.png";
import MoodyAI from "../Images/Project Logos/MoodyAI.png";
import Amanda from "../Images/Project Logos/Amanda.png";
import BMI from "../Images/Project Logos/BMI.png";
import Game from "../Images/Project Logos/2dGame.png";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import Slider from "react-slick";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

function Projects() {

    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
      if (inView) {
        animation.start({
          opacity: 1,
          transition: {
            duration: 1
          }
        });
      }

      if (!inView) {
        animation.start({
          opacity: 0
        });
      }
    });

    const projectArray = [
                <ProjectCard 
                    title="Bookzilla" 
                    image={Bookzilla} 
                    id="card1" 
                />,

                <ProjectCard
                    title="To Do List"
                    image={ToDoList}
                    id="card2"
                />,

                <ProjectCard
                    title="Moody AI"
                    image={MoodyAI}
                    id="card3"
                />,

                <ProjectCard
                    title="Amanda Voice Assistant"
                    image={Amanda}
                    id="card4"
                />,

                <ProjectCard
                    title="BMI Calculator"
                    image={BMI}
                    id="card5"
                />,

                <ProjectCard
                    title="2D Shooting Game"
                    image={Game}
                    id="card6"
                /> ]

      const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };

      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };

      const [imageIndex, setImageIndex] = useState(0);

      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 20,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: true,

        responsive: [{
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            centerPadding: 10
          }
        }],

        beforeChange: (current, next) => setImageIndex(next),
      };

    return (
      <div className="projectBody">
        <p className="projectHeading">Projects</p>
        <div ref={ref}
        // initial={{opacity: 0}}
          animate={animation}
        >
          <Slider {...settings} className="projectContainer">
            {projectArray.map((item, idx) => (
              <motion.div animate={animation} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <span>{item}</span>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    );
}

export default Projects;