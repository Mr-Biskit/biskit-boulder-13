import FlipCard from "./FlipCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { StateMachineInput } from "@rive-app/react-canvas";
import Ticker from "./Ticker";

type ProjectProps = {
  imagePath: string;
  flipCardFront: JSX.Element;
  flipCardBack: JSX.Element;
  clickAnimation?: StateMachineInput;
  techStack?: string[];
};

const Project: React.FC<ProjectProps> = ({
  imagePath,
  flipCardFront,
  flipCardBack,
  clickAnimation,
  techStack,
}) => {
  return (
    <div className="h-full w-screen relative space-y-5 p-2 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0">
      <motion.div
        className="h-1/2 w-full lg:h-full lg:w-1/2 lg:space-y-2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full h-full relative lg:h-3/4">
          <Image src={imagePath} fill alt="Project Image" />
        </div>
        <div className="hidden lg:flex lg:h-1/4 w-full bg-white border-2 border-b-4 border-r-4 border-black rounded-lg justify-center items-center lg:flex-col text-right text-xl">
          <h1 className="text-3xl font-heading text-right m-2 w-full mr-8">
            Tech Stack
          </h1>
          <Ticker messages={techStack!} />
        </div>
      </motion.div>

      <motion.div
        className="h-1/2 w-full lg:h-full lg:w-1/2 lg:overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
      >
        <FlipCard
          front={flipCardFront}
          back={flipCardBack}
          clickAnimation={clickAnimation}
        />
      </motion.div>
    </div>
  );
};

export default Project;
