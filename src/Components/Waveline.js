import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Waveline() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        transition: {
          duration: 2,
        },
        pathLength: 1,
      });
    }

    if (!inView) {
      animation.start({
        pathLength: 0,
        transition: {
          duration: 2,
        },
      });
    }
  });

  return (
    <motion.div animate={animation} ref={ref}>
      <svg
        viewBox="0 0 1440 363"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
          animate={animation}
          stroke="#0076a1"
          strokeOpacity="0.1"
          strokeWidth="10"
          style={{ position: "absolute" }}
        />
      </svg>
    </motion.div>
  );
}

export default Waveline;
