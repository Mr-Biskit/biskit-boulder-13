import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { modalInfo } from "../../../data";
import Image from "next/image";
import BackButton from "./BackButton";
import { XMarkIcon } from "@heroicons/react/24/solid";

type InfoModalProps = {
  handleClose: () => void;
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

const contentDiv = (
  <div className="w-full h-full flex flex-col justify-center items-center space-y-1">
    <h1 className="text-4xl font-bold font-heading text-center mt-6 lg:text-6xl">
      {modalInfo.title}
    </h1>
    <br />
    <p className="text-xs font-base text-center font-std 2xl:text-lg">
      {modalInfo.description[0]}
    </p>
    <br />
    <p className="text-xs font-base text-center 2xl:text-lg">
      {modalInfo.description[1]}
    </p>
    <div className="relative w-1/2 h-1/5 lg:w-1/3 xl:w-1/4">
      <Image src={modalInfo.cloudPath} fill alt="Cloud" />
    </div>
    <p className="text-xs font-base text-center 2xl:text-lg">
      {modalInfo.description[2]}
    </p>
    <br />
    <BackButton triggerAnimation={() => {}} /> <br />
    <p className="text-xs font-base text-center 2xl:text-lg">
      {modalInfo.description[3]}
    </p>
    <p className="text-xs font-base text-center 2xl:text-lg">
      {modalInfo.description[4]}
    </p>
  </div>
);

const InfoModal = ({ handleClose }: InfoModalProps) => {
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
        <button
          onClick={handleClose}
          className="p-2 bg-black text-white absolute top-0 right-0 border-white border rounded-md hover:bg-white hover:text-black hover:border-black lg:top-1 lg:right-1"
        >
          <XMarkIcon className=" h-6 w-6 lg:h-7 lg:w-7 2xl:w-6 2xl:h-6" />
        </button>
        {contentDiv}
      </motion.div>
    </Backdrop>
  );
};

export default InfoModal;
