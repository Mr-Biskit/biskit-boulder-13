"use client";
import { motion } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";
import BackButton from "./UI/BackButton";
import Project from "./UI/Project";
import { useState } from "react";
import { projects } from "../../data";
import Ticker from "./UI/Ticker";
import { SocialIcon } from "react-social-icons";
import { TvIcon } from "@heroicons/react/24/solid";
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

  const projectStructure = projects.map((project) => {
    return {
      imagePath: project.imagePath,
      flipCardFront: (
        <div className="p-1 justify-center items-center space-y-2">
          <h2 className="text-2xl font-heading">{project.title}</h2>
          <p className="text-xs">{project.description[0]}</p>
        </div>
      ),
      flipCardBack: (
        <div className="w-full">
          <h2 className="text-2xl font-heading">Skills</h2>
          <Ticker messages={project.skills} />

          <h2 className="text-2xl font-heading">Technologies</h2>
          <Ticker messages={project.tech} />
          <h2 className="text-2xl font-heading">Links</h2>
          <div className="flex items-center justify-center space-x-2">
            {project.links.slice(0, 2).map((link, index) => (
              <SocialIcon
                key={index}
                url={link}
                style={{ height: 25, width: 25 }}
              />
            ))}
            {project.links.length > 2 && (
              <Link href={project.links[2]} target="_blank">
                <div className="flex items-center justify-center bg-gray-700 text-white w-7 h-7 rounded-full">
                  <TvIcon className="h-5 w-5" />
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
    setCurrentProjectIndex(
      (currentProjectIndex - 1 + projects.length) % projects.length
    );
  };

  const nextProject = () => {
    setCurrentProjectIndex((currentProjectIndex + 1) % projects.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      className="absolute top-0 left-0 w-full h-full flex-col flex items-center justify-center"
    >
      <h1 className="text-white text-6xl font-heading lg:text-8xl">Projects</h1>

      <div className="h-full w-screen mt-3 relative">
        <div className="h-[400px] w-[150px] absolute top-1/3 transform -translate-y-1/3 left-0 z-10">
          <RiveComponentPlayback />
        </div>
        <Project {...projectStructure[currentProjectIndex]} />
      </div>

      <div className="flex items-center">
        <button onClick={prevProject}>Prev</button>
        <BackButton triggerAnimation={triggerAnimation} />
        <button onClick={nextProject}>Next</button>
      </div>
    </motion.div>
  );
};

export default Projects;
