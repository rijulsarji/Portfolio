import "../CSS/Pages CSS/Form.css";
import {motion} from "framer-motion"

function Form() {

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}><p>Under Production</p></motion.div>
    )
}

export default Form;