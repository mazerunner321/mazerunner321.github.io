import React from "react";
import "./Footer.scss";
import { AiFillLike, AiFillDislike, AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
  const [move, setMove] = React.useState(false);

  return (
    <div className="end">
      <div className="like">
        <motion.p
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          whileHover={{ scale: [1, 1.3] }}
          whileTap={{ scale: [0.8, 1] }}
          onClick={() => alert("Thank You!!")}
        >
          <AiFillLike />
        </motion.p>

        <motion.p
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          animate={{ x: move ? 550 : 0 }}
          onHoverStart={() => setMove(!move)}
        >
          <AiFillDislike />
        </motion.p>
      </div>
      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="text"
      >
        {/* <h1>Seems you liked what you have seen...</h1> */}
        <h2>Leave a LIKE! :)</h2>
        <p>(Try disliking :|)</p>
      </motion.div>

      <div className="last">
        <p>
          made with{" "}
          <span>
            <AiFillHeart />{" "}
          </span>{" "}
          by <span>Prajwal</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
