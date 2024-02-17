import React, { useState } from "react";
import graphics from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  // const [input, setInput] = useState({ name: "", email: "", message: "" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setdisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setdisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      setdisableBtn(false);
      setName("")
      setEmail("")
      setMessage("")

      toast.success("Message Sent");
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setdisableBtn(false);
    }
  };

  const animations = {
    form: {
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
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      tansition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          />
          <motion.button
          className={disableBtn? "disableBtn":""}
            disabled={disableBtn}
            type="submit"
            {...animations.button}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={graphics} alt="" />
      </aside>
    </div>
  );
};

export default Contact;
