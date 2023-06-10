"use client";

import { FC } from "react";
import { useRive } from "@rive-app/react-canvas";
import { useState, useEffect } from "react";

const BouncingDotsLoader = () => {
  return (
    <div className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const Load = ({}) => {
  const { RiveComponent: RiveComponentPlayback } = useRive({
    src: "/assets/sandal.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <div className="w-full h-full justify-center items-center">
      <div className="w-full h-2/3 flex justify-center items-center">
        <RiveComponentPlayback />
      </div>
      <div className="w-full h-1/3 flex justify-center items-center space-x-6">
        <h1 className="text-white lg:text-4xl font-heading text-3xl">
          Ascending
        </h1>
        <BouncingDotsLoader />
      </div>
    </div>
  );
};

export default Load;
