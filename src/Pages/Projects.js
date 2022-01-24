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
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
    import SwiperCore, {
      EffectCoverflow,Mousewheel,Pagination
    } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

function Projects() {

    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
      if (inView) {
        animation.start({
          opacity: 1,
          transition: {
            duration: 0.75,
            type: "tween"
          },
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
                    desc="A book library consisting books from all around the world using Google Books API. This app is made using react-native."
                    link="https://www.github.com/rijulsarji/Bookzilla"
                />,

                <ProjectCard
                    title="To Do List"
                    image={ToDoList}
                    id="card2"
                    desc="A to do list website to write down all your tasks for the day and check them out as soon as you complete those tasks."
                    link="https://www.github.com/rijulsarji/To-do-list"
                />,

                <ProjectCard
                    title="Moody AI"
                    image={MoodyAI}
                    id="card3"
                    desc="A python software made to recognise the users mind using speech recognition and playing songs according to the user's mood."
                    link="https://www.github.com/rijulsarji/Hackathon-Moody-AI"
                />,

                <ProjectCard
                    title="Amanda Voice Assistant"
                    image={Amanda}
                    id="card4"
                    desc="A full fledged voice assistant using python, gtts and speech recognition libraries to ask the weather, open softwares and ask general questions as well."
                    link="https://github.com/rijulsarji/Voice-Assistant-using-gTTS-and-Spreech-Recognition"
                />,

                <ProjectCard
                    title="BMI Calculator"
                    image={BMI}
                    id="card5"
                    desc="BMI calculator to calculate and see if your BMI is appropriate or not."
                    link="https://www.github.com/rijulsarji/Cindy-the-BMI-Calculator"
                />,

                <ProjectCard
                    title="2D Shooting Game"
                    image={Game}
                    id="card6"
                    desc="2D game made using pygame, consisting of shooting and enemies as well."
                    link="https://github.com/rijulsarji/2D-Shooting-Game-Using-PyGame"
                /> ]



    // install Swiper modules
    SwiperCore.use([Mousewheel,EffectCoverflow,Pagination]);  
  
  
  return (
      <div className="projectBody">

        <p className="projectHeading">My Projects</p>

        <div ref={ref}>
        <Swiper 
          effect={'coverflow'} 
          mousewheel={true} 
          centeredSlides={true} 
          loop={true} 
          coverflowEffect={{
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": false
          }} 
          breakpoints={{
            "230": {
              "rotate": 10,
              "slidesPerView": 2,
              "spaceBetween": 45
            },
            "1024": {
              "rotate": 50,
              "slidesPerView": 3,
              "spaceBetween": 30
            }
          }}
          className="projectContainer"
          >
        
          {projectArray.map (item => <motion.div animate={animation}><SwiperSlide className="projectCardHolder">{item}</SwiperSlide></motion.div>)}
        </Swiper>
        </div>
      </div>
  )
}

export default Projects;