import React from "react";
import { delay, motion } from "framer-motion";

import {AiFillCiCircle,AiFillAndroid,AiFillWindows } from "react-icons/ai"

const Services = () => {
const animations={
  whileInView:{
    x:0,
    y:0,
    opacity:1
  },
  one:{
    opacity:0,
    x:"-100%"
  },
  one:{
    opacity:0,
    x:"-100%"
  },
  twoAndThree:{
    opacity:0,
    y:"-100%"
  },
  fourth:{
    opacity:0,
    x:"100%"
  },
}

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div className="serviceBox1"
        whileInView={animations.whileInView}
        initial={animations.one}
        >
          <h3>Responsive Web Design</h3>
          <p>Device Adaptive Websites</p>
        </motion.div>
        
        <motion.div className="serviceBox2"
        whileInView={animations.whileInView}
        initial={animations.twoAndThree}
        >
          <AiFillCiCircle/>
          <span>Web Development</span>
        </motion.div>

        <motion.div className="serviceBox3"
        whileInView={animations.whileInView}
        initial={animations.twoAndThree}
        transition={{
          delay:0.2,}
        }
        >
          <AiFillWindows/>
          <span>Desktop Development</span>
        </motion.div>

        <motion.div className="serviceBox4"
        whileInView={animations.whileInView}
        initial={animations.fourth}
        >
          <AiFillAndroid/>
          <span>App Development</span>
        </motion.div>
       
      </section>
    </div>
  );
};

export default Services;
