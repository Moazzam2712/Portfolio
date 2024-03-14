import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/Moazzam.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);
  const animationsClientCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationsProjectsCount = () => {
    animate(0, 7, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      h1: {
        initial: {
          y: "-100%",
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Moazzam Kazi
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:moazzamkazi1227@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          {/* <article>
            <p>
              +
              {ratio < 2.2 && (
                <motion.span
                  whileInView={animationsClientCount}
                  ref={clientCount}
                >
                  500
                </motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article> */}

          <aside>
            <article>
              <p>
                +
                {ratio < 2.2 && (
                  <motion.span
                    whileInView={animationsProjectsCount}
                    ref={projectCount}
                  >
                    7
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact </p>
              <span>moazzamkazi1227@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="" />
      </section>

      <BsChevronDown />
    </div>
  );
};

export default Home;
