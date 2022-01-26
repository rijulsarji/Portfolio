import "../CSS/Components CSS/bottomCard.css";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import RS from "../Images/About Me Logos/RS.png";

function BottomCard() {
  return (
    <div className="bottomContainer">
      <div className="collabContainer">
        <h1>Start a collab</h1>
        <p>
          Interested in having a chat for your next project? Let's keep a meet.
          I'll buy the coffee.
        </p>
        <Link to="/form" className="letsGo">
          Let's go...
        </Link>
      </div>

      <div className="logoContainer">
        <img src={RS} alt="logo" />
      </div>
      <div className="socialContainer">
        <p className="social">
          Handcrafted by me <FaRegCopyright /> twentytwentytwo
        </p>
      </div>
    </div>
  );
}

export default BottomCard;
