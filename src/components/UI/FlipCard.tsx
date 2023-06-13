import React, { useState } from "react";
import {
  ArrowUturnRightIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";
import { StateMachineInput } from "@rive-app/react-canvas";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  clickAnimation?: StateMachineInput;
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back, clickAnimation }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (clickAnimation) {
      clickAnimation.fire();
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {front}
          <div className="icon-wrapper-right">
            <ArrowUturnRightIcon
              onClick={handleClick}
              className="h-6 w-6 text-black cursor-pointer"
            />
          </div>
        </div>
        <div className="flip-card-back">
          {back}
          <div className="icon-wrapper-left">
            <ArrowUturnLeftIcon
              onClick={handleClick}
              className="h-6 w-6 text-black cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
