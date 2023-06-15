"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  useRive,
  useStateMachineInput,
  StateMachineInput,
} from "@rive-app/react-canvas";
import BackButton from "../UI/BackButton";
import Project from "../UI/Project";
import { useState } from "react";
import { projects } from "../../../data";
import Ticker from "../UI/Ticker";
import { SocialIcon } from "react-social-icons";
import {
  TvIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

type ProjectsProps = {
  triggerAnimation: () => void;
};

const Projects: React.FC<ProjectsProps> = ({ triggerAnimation }) => {
  const { rive, RiveComponent: RiveComponentPlayback } = useRive({
    src: "/assets/statue.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const clickInput = useStateMachineInput(rive, "State Machine 1", "Click");

  const projectStructure = projects.map((project) => {
    return {
      imagePath: project.imagePath,
      flipCardFront: (
        <div className="p-1 justify-center items-center space-y-1">
          <h2 className="text-2xl font-heading text-right lg:text-left lg:text-4xl xl:text-6xl">
            {project.title}
          </h2>
          <p className="text-[10px] lg:text-std lg:text-left xl:text-xl font-std">
            {project.description[0]}
          </p>
          <br />
          <p className="hidden text-[10px] lg:text-std lg:flex lg:text-left xl:text-xl font-std">
            {project.description[1]}
          </p>
        </div>
      ),
      flipCardBack: (
        <div className="w-full lg:space-y-5">
          <h2 className="text-2xl font-heading lg:text-4xl xl:text-6xl">
            Skills
          </h2>
          <div className="flex lg:hidden">
            <Ticker messages={project.skills} />
          </div>
          <div className="hidden lg:grid  lg:grid-cols-3 lg:gap-3">
            {project.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-tr from-black to-gray-900 text-white rounded-lg text-center p-2"
              >
                <p className="xl:text-3xl font-std">{skill}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:hidden">
            <h2 className="text-2xl font-heading">Technologies</h2>
            <Ticker messages={project.tech} />
          </div>
          <h2 className="text-2xl font-heading lg:text-4xl xl:text-6xl">
            Links
          </h2>
          <div className="flex items-center justify-center space-x-4 mt-2 2xl:space-x-6">
            <div className="flex 2xl:hidden space-x-4">
              {project.links.slice(0, 2).map((link, index) => (
                <SocialIcon
                  key={index}
                  url={link}
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              ))}
            </div>
            <div className="2xl:flex hidden space-x-6">
              {project.links.slice(0, 2).map((link, index) => (
                <SocialIcon
                  key={index}
                  url={link}
                  style={{
                    height: 65,
                    width: 65,
                  }}
                />
              ))}
            </div>

            {project.links.length > 2 && (
              <Link href={project.links[2]} target="_blank">
                <div className="flex items-center justify-center bg-gray-700 text-white w-7 h-7 rounded-full 2xl:w-14 2xl:h-14">
                  <TvIcon className="h-5 w-5 2xl:w-8 2xl:h-8" />
                </div>
              </Link>
            )}
          </div>
        </div>
      ),
    };
  });

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const prevProject = () => {
    clickInput!.fire();
    setCurrentProjectIndex(
      (currentProjectIndex - 1 + projects.length) % projects.length
    );
  };

  const nextProject = () => {
    clickInput!.fire();
    setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      className="absolute top-0 left-0 w-full h-full flex-col flex items-center justify-center"
    >
      <h1 className=" text-6xl font-heading lg:text-8xl lg:text-black bg-white border-2 border-b-4 border-r-4 border-black rounded-lg mt-2 p-1 font-bold px-4">
        PROJECTS
      </h1>

      <div className="h-full w-screen mt-3 relative lg:overflow-x-hidden lg:h-screen">
        <div className="h-[400px] w-[150px] absolute top-1/3 transform -translate-y-1/3 left-0 z-10 lg:w-4/5 lg:h-3/4 lg:ml-[-27%]">
          <RiveComponentPlayback />
        </div>
        <AnimatePresence mode="wait">
          {rive && clickInput && (
            <Project
              {...projectStructure[currentProjectIndex]}
              clickAnimation={clickInput}
              techStack={projects[currentProjectIndex].tech}
              key={currentProjectIndex}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between w-full mt-3 mx-4">
        <BackButton triggerAnimation={triggerAnimation} />
        <div className="space-x-2 mr-10 lg:space-x-7">
          <button
            className="font-heading lg:text-2xl lg:text-white"
            onClick={prevProject}
          >
            <div className="flex items-center justify-center bg-gray-700 text-white w-7 h-7 rounded-full lg:w-10 lg:h-10 lg:hover:bg-white lg:hover:text-black lg:hover:rounded-lg transition-colors transition-border duration-500">
              <ChevronLeftIcon className="h-5 w-5 lg:w-8 lg:h-8" />
            </div>{" "}
            Prev
          </button>
          <button
            className="font-heading  lg:text-2xl lg:text-white"
            onClick={nextProject}
          >
            <div className="flex items-center justify-center bg-gray-700 text-white w-7 h-7 rounded-full lg:w-10 lg:h-10 lg:hover:bg-white lg:hover:text-black lg:hover:rounded-lg transition-colors transition-border duration-500 ">
              <ChevronRightIcon className="h-5 w-5 lg:w-8 lg:h-8" />
            </div>
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
