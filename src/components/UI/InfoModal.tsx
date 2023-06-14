import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

type InfoModalProps = {
  handleClose: () => void;
  content: string;
};

const popOut = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

const InfoModal = ({ handleClose, content }: InfoModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal bg-white"
        variants={popOut}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{content}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default InfoModal;
