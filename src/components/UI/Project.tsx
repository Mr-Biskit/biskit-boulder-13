import FlipCard from "./FlipCard";
import Image from "next/image";

type ProjectProps = {
  imagePath: string;
  flipCardFront: JSX.Element;
  flipCardBack: JSX.Element;
};

const Project: React.FC<ProjectProps> = ({
  imagePath,
  flipCardFront,
  flipCardBack,
}) => {
  return (
    <div className="h-full w-screen relative space-y-5 p-2">
      <div className="h-1/2 w-full relative">
        <Image src={imagePath} fill alt="Project Image" />
      </div>

      <div className="h-1/2 w-full">
        <FlipCard front={flipCardFront} back={flipCardBack} />
      </div>
    </div>
  );
};

export default Project;
