import "../CSS/Components CSS/expCard.css"

function ExpCard(props) {
    return (
        <div className="expCard">

            <div className="expFront">
                <img src={props.logo} />
                <p>{props.title}</p>
            </div>

            <div className="expBack">
                <h1>{props.profile}</h1>
                <h2>{props.period}</h2>
                <p>{props.achievement}</p>
            </div>

        </div>
    )
}

export default ExpCard