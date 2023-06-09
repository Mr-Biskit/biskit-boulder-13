import { motion } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";
import { mystory } from "../../data";
import BackButton from "./UI/BackButton";
import FlipCard from "./UI/FlipCard";

type AboutMeProps = {
  triggerAnimation: () => void;
};

const AboutMe: React.FC<AboutMeProps> = ({ triggerAnimation }) => {
  const { rive, RiveComponent: RiveComponentPlayback } = useRive({
    src: "/assets/flag.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      className="absolute top-0 left-0 w-full h-full flex-col flex items-center justify-center"
    >
      <h1 className="text-white text-6xl font-heading lg:text-8xl">My Story</h1>

      <div className="w-full h-full flex flex-col items-center justify-center lg:flex-row">
        <div className="h-3/6 w-screen mt-3 lg:w-1/2 lg:h-full lg:mt-0">
          <RiveComponentPlayback />
        </div>

        <div className="m-4 w-5/6 h-2/6 lg:w-1/2 lg:h-full lg:p-12 p-">
          <FlipCard front={<p>Front</p>} back={<div>Back</div>} />
        </div>
      </div>

      <BackButton triggerAnimation={triggerAnimation} />
    </motion.div>
  );
};

export default AboutMe;
