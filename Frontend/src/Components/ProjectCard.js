import { FaGithub } from "react-icons/fa";
import "../CSS/Components CSS/projectCard.css";

function ProjectCard(props) {
  var id = props.id;
  var backId = "back" + props.id;

  return (
    <div className="projectCardContainer">
      <div className="projFront" id={id}>
        <img src={props.image} alt={props.link} className="projImage" />
      </div>

      <div className="projBack" id={backId}>
        <p className="projDesc">{props.desc}</p>
        <div className="projBackLink">
          <FaGithub />
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
