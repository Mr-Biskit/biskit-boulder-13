"use client";
import AnimatedTextCharacter from "@/components/UI/AnimatedCharacter";
import { useRive } from "@rive-app/react-canvas";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const { RiveComponent: RiveComponentPlayback } = useRive({
    src: "/assets/MoonButton.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <div className="container h-screen mx-auto flex flex-col items-center justify-center space-y-2">
      <div className="h-3/5 flex flex-col justify-center items-center space-y-8 mt-6">
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
        className="h-screen w-screen flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 4 }}
      >
        <Link className="w-full h-full" href="/boulder" passHref={true}>
          <RiveComponentPlayback />
        </Link>
      </motion.div>
    </div>
  );
}
