"use client";
import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { type } from "os";

type BackButtonProps = {
  triggerAnimation: () => void;
};

function BackButton({ triggerAnimation }: BackButtonProps) {
  return (
    <button
      onClick={triggerAnimation}
      className="px-5 py-2 text-red-800 ease-in-out bg-white border-2 border-b-4 border-r-4 border-black rounded-lg m-2 font-heading space-x-2 lg:hover:bg-red-800 lg:hover:text-white  transition-colors duration-500"
    >
      <ArrowLeftIcon className="h-4 w-4 inline-block lg:h-6 lg:w-6" /> Back
    </button>
  );
}

export default BackButton;
