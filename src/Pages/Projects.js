import ProjectCard from "../Components/ProjectCard";
import "../CSS/Pages CSS/Projects.css";
import Udaan from "../Images/Project Logos/Udaan.png";
import Bookzilla from "../Images/Project Logos/Bookzilla.png";
import ToDoList from "../Images/Project Logos/ToDoList.png";
import MoodyAI from "../Images/Project Logos/MoodyAI.png";
import Amanda from "../Images/Project Logos/Amanda.png";
import BMI from "../Images/Project Logos/BMI.png";
import Game from "../Images/Project Logos/2dGame.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Loader from "../utils/Loader";

function Projects() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://portfolio-backend-f5vh.onrender.com/projects")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoad(false);
        console.log(data);
      });
  }, [])

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.75,
          type: "tween",
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  });

  // install Swiper modules
  SwiperCore.use([Mousewheel, EffectCoverflow, Pagination]);

  return (
    <div className="projectBody">
      <p className="projectHeading">My Pieces of Work</p>

      {load ? (
        <Loader />
      ) : (
        <div ref={ref}>
          <Swiper
            effect={"coverflow"}
            mousewheel={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true, type: "bullets" }}
            breakpoints={{
              230: {
                rotate: 10,
                slidesPerView: 2,
                spaceBetween: 45,
              },
              1024: {
                rotate: 50,
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="projectContainer"
          >
            {data.map((item) => (
              <motion.div animate={animation}>
                <SwiperSlide className="projectCardHolder">
                  <ProjectCard
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    color={item.color}
                  />
                </SwiperSlide>
              </motion.div>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default Projects;
