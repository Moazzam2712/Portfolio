import React from "react";
import img from "../assets/Moazzam.png";
import {AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={img} alt="" />

        <h2>Moazzam Kazi</h2>
        <p>Motivation is temporary, but discipline lasts forever</p>
      </div>


      <aside>
        <h2>Social Media</h2>
        <article>
            <a href="https://www.youtube.com/" target="blank"><AiFillYoutube/></a>
            <a href="https://www.instagram.com/" target="blank"><AiFillInstagram/></a>
            <a href="https://www.github.com/" target="blank"><AiFillGithub/></a>
        </article>
      </aside>

      <a href="#home">
        <AiOutlineArrowUp/>
      </a>
    </footer>
  );
};

export default Footer;
