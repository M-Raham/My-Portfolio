import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex gap-5`}
      >
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-20 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, Im <span className="text-[#915eff]">Raham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {" "}
            Front-end developer crafting responsive,{" "}
            <br className="sm:block hidden" /> modern, and user-friendly
            interfaces.{" "}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-2 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[33.5px] h-[60px] rounded-3xl border-[3px] border-secondary flex justify-center items-center p-2">
            <motion.div
              animate={{
                y: [0, 36, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-9"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
