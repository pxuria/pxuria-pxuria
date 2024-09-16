import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCards = ({
  index,
  name,
  description,
  tags,
  source_code_link,
  image,
}) => {
  return (
    // work Cards
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* card images */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="bg-neutral-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        {/* card descriptions */}
        <div className="mt-5">
          <h3 className="font-bold text-white text-[24px]">{name}</h3>
          <p className="font-semibold text-secondary mt-2 text-[16px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          eligendi deserunt dolores ipsa, quaerat fugit repudiandae ab, officia,
          labore dolor commodi magnam rem excepturi reprehenderit omnis iusto
          doloremque consectetur. Dolores.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((proj, index) => (
          <ProjectCards key={`project-${index}`} index={index} {...proj} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
