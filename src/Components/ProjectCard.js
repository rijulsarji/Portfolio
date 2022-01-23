import "../CSS/Components CSS/projectCard.css";

function ProjectCard(props) {

    var id=props.id;
    var backId="back"+props.id;

    return (
        <div className="projectCardContainer">
            
            <div className="projFront" id={id}>
                <img src={props.image} className="projImage" />
            </div>

            <div className="projBack" id={backId}>

            </div>

        </div>
    )
}

export default ProjectCard;