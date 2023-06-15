import { motion } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";
import { mystory } from "../../../data";
import BackButton from "../UI/BackButton";
import FlipCard from "../UI/FlipCard";
import Image from "next/image";

type AboutMeProps = {
  triggerAnimation: () => void;
};

const AboutMe: React.FC<AboutMeProps> = ({ triggerAnimation }) => {
  const { rive, RiveComponent: RiveComponentPlayback } = useRive({
    src: "/assets/flag.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const frontDiv = (
    <div className="p-[2px] justify-center items-center w-full h-full">
      <p className="text-mbl text-left lg:text-left lg:text-std 2xl:text-xl 2xl:tracking-wider font-std lg:tracking-wide">
        {mystory.description[0]}
      </p>
      <br />
      <div className="hidden lg:flex lg:flex-row w-full h-1/3">
        <div className="hidden lg:flex w-full h-full relative ml-20 ">
          <Image src={mystory.imagePath2} fill alt="Helmet" />
        </div>
      </div>
    </div>
  );

  const backDiv = (
    <div className="p-[2px] justify-center items-center w-full h-full">
      <p className="text-mbl text-left lg:text-left lg:text-std 2xl:text-xl 2xl:tracking-wider font-std">
        {mystory.description[1]}
      </p>
      <br />
      <div className="hidden lg:flex lg:flex-row w-full h-1/2 justify-center items-center">
        <h1 className="text-2xl font-sig lg:text-3xl xl:text-6xl w-1/2">
          {" "}
          - Mr Biskit
        </h1>
        <div className="hidden lg:relative lg:w-1/2 lg:h-3/4 xl:w-1/2 xl:h-full lg:flex ml-24">
          <Image src={mystory.imagePath1} fill alt="Helmet" />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      className="absolute top-0 left-0 w-full h-full flex-col flex items-center justify-center"
    >
      <h1 className=" text-6xl font-heading lg:text-8xl lg:text-black bg-white border-2 border-b-4 border-r-4 border-black rounded-lg mt-2 p-1 font-bold px-4">
        MY STORY
      </h1>

      <div className="w-full h-full flex flex-col items-center justify-center lg:flex-row">
        <div className="h-3/6 w-screen mt-3 lg:w-1/2 lg:h-full lg:mt-0">
          <RiveComponentPlayback />
        </div>

        <div className="m-4 w-5/6 h-3/6 lg:w-1/2 lg:h-full lg:p-12 ">
          <FlipCard front={frontDiv} back={backDiv} />
        </div>
      </div>

      <BackButton triggerAnimation={triggerAnimation} />
    </motion.div>
  );
};

export default AboutMe;
