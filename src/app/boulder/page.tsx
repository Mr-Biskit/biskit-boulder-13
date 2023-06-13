"use client";
import React, { Suspense, useState, useEffect, useRef } from "react";

import Load from "@/components/Load";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Home = () => {
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
    }, 1000);

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
            scene="https://prod.spline.design/AaQ5hKQz80KFqBBA/scene.splinecode"
            onMouseDown={handleMouseDown}
            onLoad={onLoad}
          />
          {showAboutMe && <AboutMe triggerAnimation={triggerAboutSection} />}
          {showProjects && (
            <Projects triggerAnimation={triggerProjectSection} />
          )}
        </>
      ) : (
        <Load />
      )}
    </div>
  );
};

export default Home;
