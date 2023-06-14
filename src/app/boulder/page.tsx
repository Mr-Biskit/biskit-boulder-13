"use client";
import React, { Suspense, useState, useEffect, useRef } from "react";

import Load from "@/components/Load";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import InfoModal from "@/components/UI/InfoModal";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import useModal from "@/hooks/useModal";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Home = () => {
  // Modal
  const { modalOpen, open, close } = useModal();

  // Loading
  const [showSpline, setShowSpline] = useState(false);

  //Sections States
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  //Spline
  const cameraRef = useRef<any>(null);
  const spline = useRef<any>();

  useEffect(() => {
    if (showAboutMe) {
      setTimeout(() => {
        // Show the "About Me" component after a 1-second delay
        setShowAboutMe(true);
      }, 1000);
    }
  }, [showAboutMe]);

  useEffect(() => {
    // After 15 seconds, set showSpline to true
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 8000);

    // Clear the timeout if the component is unmounted before the 15 seconds are up
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run this effect only once

  const handleMouseDown = (e: { target: { name: string } }) => {
    if (e.target.name === "mystory") {
      // Set the state to trigger the useEffect hook
      setShowAboutMe(true);
    } else if (e.target.name === "projects") {
      setShowProjects(true);
    } else if (e.target.name === "contact") {
      setShowContact(true);
    }
  };

  function onLoad(splineApp: any) {
    const obj = splineApp.findObjectByName("Camera");
    // save the object in a ref for later use
    cameraRef.current = obj;
    spline.current = splineApp;
  }

  function triggerAboutSection() {
    spline.current.emitEventReverse("mouseDown", "mystory");
    setShowAboutMe(false);
  }

  function triggerProjectSection() {
    spline.current.emitEventReverse("mouseDown", "projects");
    setShowProjects(false);
  }

  function triggerContactSection() {
    spline.current.emitEventReverse("mouseDown", "contact");
    setShowContact(false);
  }

  return (
    <div className="h-screen w-screen relative">
      {showSpline ? (
        <>
          <Spline
            // "https://prod.spline.design/AaQ5hKQz80KFqBBA/scene.splinecode"
            scene="https://draft.spline.design/qpv8K6SHV2X5CzWz/scene.splinecode"
            onMouseDown={handleMouseDown}
            onLoad={onLoad}
          />
          {showAboutMe && <AboutMe triggerAnimation={triggerAboutSection} />}
          {showProjects && (
            <Projects triggerAnimation={triggerProjectSection} />
          )}
          {!showAboutMe && !showProjects && !showContact && (
            <motion.button
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              onClick={() => (modalOpen ? close() : open())}
              className="p-2 bg-white absolute bottom-3 left-3 rounded-md"
            >
              <InformationCircleIcon className="text-green h-8 w-8 lg:h-12 lg:w-12" />
            </motion.button>
          )}
          <AnimatePresence initial={false} mode="wait">
            {modalOpen && <InfoModal handleClose={close} content="Yo" />}
          </AnimatePresence>
        </>
      ) : (
        <Load />
      )}
    </div>
  );
};

export default Home;
