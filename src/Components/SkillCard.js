import "../CSS/Components CSS/skillCard.css";
import { motion } from "framer-motion";

function SkillCard(props) {
  return (
    <motion.div className="skillCardContainer">
      <p className="skillCardTitle">{props.title}</p>

      <div className="skillArrayContainer">
        {props.array.map((item) => (
          <motion.p
            key={Math.floor(Math.random() * 10000)}
            className="skillArray"
            whileHover={{ fontSize: "18px" }}
            transition={{ duration: 0.1 }}
          >
            {item}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;
