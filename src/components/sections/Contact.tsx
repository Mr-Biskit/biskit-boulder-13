import { FC } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import BackButton from "../UI/BackButton";
import { socialLinks } from "../../../data";
import { useForm } from "react-hook-form";

interface ContactProps {
  triggerAnimation: () => void;
}

const Contact: FC<ContactProps> = ({ triggerAnimation }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm({ shouldUseNativeValidation: true });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      className="absolute top-0 left-0 w-full h-full flex-col flex items-center justify-center"
    >
      <h1 className=" text-6xl font-heading lg:text-8xl lg:text-black bg-white border-2 border-b-4 border-r-4 border-black rounded-lg mt-2 p-1 font-bold px-4">
        CONTACT
      </h1>
      ;
      <div className="flex flex-col items-center justify-center space-y-4 mt-4 lg:flex-row w-full h-full lg:p-10 lg:space-x-8 p-4">
        <div className="flex flex-col bg-white border-2 border-b-4 border-r-4 border-black lg:w-1/2 h-1/2 lg:h-full lg:p-6 items-center justify-center">
          <h2 className="text-2xl font-heading lg:text-4xl xl:text-6xl font-bold text-black tracking-widest text-left">
            Let&aposs Ignite Innovation, Together!
          </h2>
          <h3 className="text-std lg:text-lg xl:text-3xl font-bold text-gray-700 mt-6 text-left">
            I am currently open to opportunities in pioneering, innovative
            companies as well as to collaborative mashups on intriguing,
            ground-breaking projects.
          </h3>
          <div className="flex space-x-8 mt-10">
            {socialLinks.map((link, index) => (
              <SocialIcon
                key={index}
                url={link}
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                style={{
                  height: 65,
                  width: 65,
                }}
              />
            ))}
          </div>
        </div>

        <form
          className="flex flex-col space-y-4  lg:h-full w-1/2"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <h2 className="text-2xl font-heading lg:text-4xl xl:text-6xl font-bold text-black tracking-widest text-left">
            Contact Me
          </h2>
          <div className="flex flex-col space-y-4">
            <input
              className="border-2 border-black rounded-lg p-2"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            <input
              className="border-2 border-black rounded-lg p-2"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              className="border-2 border-black rounded-lg p-2"
              type="text"
              placeholder="Subject"
              {...register("subject", { required: true })}
            />
            <textarea
              className="border-2 border-black rounded-lg p-2"
              placeholder="Message"
              {...register("message", { required: true })}
            />
            <button
              className="border-2 border-black rounded-lg p-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <BackButton triggerAnimation={triggerAnimation} />
    </motion.div>
  );
};

export default Contact;
