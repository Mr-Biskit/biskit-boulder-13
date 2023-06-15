import { FC } from "react";
import { motion } from "framer-motion";
import BackButton from "../UI/BackButton";
import { socialLinks } from "../../../data";
import { useForm, SubmitHandler } from "react-hook-form";
import IconButton from "../UI/IconButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

interface ContactProps {
  triggerAnimation: () => void;
}

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(20, "Name must be less than 20 characters long")
    .nonempty("Name cannot be empty"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email cannot be empty"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must be less than 500 characters long")
    .nonempty("Message cannot be empty"),
});

type FormSchemaType = z.infer<typeof formSchema>;

const Contact: FC<ContactProps> = ({ triggerAnimation }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<FormSchemaType>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    axios
      .post("/api/sendEmail", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <div className="flex flex-col items-center justify-center lg:mt-4 lg:flex-row w-full h-full lg:p-10 lg:space-x-8 px-2 mt-1">
        <div className="flex flex-col bg-white border-2 border-b-4 border-r-4 border-black lg:w-1/2 h-1/3 lg:h-full lg:p-6 items-center justify-center p-4 mx-4 lg:mx-0">
          <h2 className="text-xl font-heading lg:text-4xl xl:text-6xl font-bold text-black tracking-widest text-left">
            Let&apos;s Ignite Innovation, Together!
          </h2>
          <h3 className="text-xs lg:text-lg xl:text-2xl font-bold text-gray-700 lg:mt-6 text-left mt-1">
            I am currently open to opportunities in pioneering, innovative
            companies as well as collaborative mashups on intriguing,
            ground-breaking projects.
          </h3>

          <div className="flex space-x-8 mt-10 ">
            <IconButton iconType="github" link={socialLinks[0]} />
            <IconButton iconType="twitter" link={socialLinks[1]} />
            <IconButton iconType="linkedin" link={socialLinks[2]} />
            <IconButton iconType="discord" link={socialLinks[3]} />
          </div>
        </div>

        <form
          className="flex flex-col lg:w-1/2 lg:h-full  w-full px-4 mx-4 lg:mx-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-1 lg:space-y-3">
            <h2 className="font-heading lg:text-3xl xl:text-3xl font-bold text-black mt-6 text-center tracking-widest text-2xl lg:mt-0 border border-black w-1/3 bg-white bg-opacity-40 rounded-lg">
              Name
            </h2>
            <input
              className="input-area p-1 lg:p-3"
              id="name"
              type="text"
              placeholder="Aristotle"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 lg:text-xl block mt-2 text-sm">
                {errors.name?.message}
              </span>
            )}
            <h2 className="font-heading lg:text-3xl xl:text-3xl font-bold text-black mt-6 text-center tracking-widest text-2xl lg:mt-0 border border-black w-1/3 bg-white bg-opacity-40 rounded-lg">
              Email
            </h2>
            <input
              className="input-area p-1 lg:p-3"
              id="email"
              type="email"
              placeholder="aristotle@patheom.com"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 lg:text-xl block mt-2 text-sm">
                {errors.email?.message}
              </span>
            )}
            <h2 className="font-heading lg:text-3xl xl:text-3xl font-bold text-black mt-6 text-center tracking-widest text-2xl lg:mt-0 border border-black w-1/3 bg-white bg-opacity-40 rounded-lg">
              Message
            </h2>
            <textarea
              className="text-area lg:p-3"
              id="message"
              placeholder="Greetings, Mr Biskit..."
              {...register("message")}
            />
            {errors.message && (
              <span className="text-red-500 lg:text-xl block mt-2 text-sm">
                {errors.message?.message}
              </span>
            )}
            <button
              className=" p-1 bg-white border-2 border-b-4 border-r-4 border-black rounded-lg 2xl:p-3 font-heading font-bold text-black tracking-widest text-xl lg:text-xl xl:text-2xl "
              type="submit"
              disabled={isSubmitting}
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
