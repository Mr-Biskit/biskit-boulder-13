"use client";
import AnimatedTextCharacter from "@/components/UI/AnimatedCharacter";
import {
  useRive,
  Layout,
  useStateMachineInput,
  Alignment,
} from "@rive-app/react-canvas";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { rive, RiveComponent: RiveComponentPlayback } = useRive({
    src: "/assets/MoonButton.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      alignment: Alignment.Center,
    }),
  });

  const clickInput = useStateMachineInput(rive, "State Machine 1", "Clicked");

  const handleClick = () => {
    clickInput!.fire();
    router.push("/boulder");
    console.log("clicked");
  };

  return (
    <div className="container h-screen mx-auto flex flex-col items-center justify-center space-y-2">
      <div className="h-3/5 flex flex-col justify-center items-center space-y-8 lg:mt-6 mt-10">
        <AnimatedTextCharacter delayFactor={2} text="Hey Traveler," />
        <AnimatedTextCharacter
          delayFactor={4}
          text="I'm"
          highlightedText="Gabriel Mr Biskit"
        />
        <AnimatedTextCharacter
          delayFactor={5}
          text="Gabriel"
          highlightedText="Gabriel"
        />
        <AnimatedTextCharacter delayFactor={6} text="A.K.A" />
        <AnimatedTextCharacter
          delayFactor={7}
          text="Mr Biskit"
          highlightedText="Mr Biskit"
        />
        <AnimatedTextCharacter delayFactor={8} text="A Full Stack Developer" />
      </div>
      <motion.div
        className="h-2/5 w-screen flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 4 }}
      >
        <RiveComponentPlayback onTouchStart={handleClick} />
      </motion.div>
    </div>
  );
}
