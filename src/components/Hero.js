import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";



const Hero = () => {

  const mailtoHref = "mailto:swapnil.parab2013@gmail.com?subject=SendMail&body=Description";
  
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi! 👋 <br />I'm <span className="text-accent">S</span>wapnil, <br />
            a Full Stack Developer <br /> 
            {/* from Toronto */}
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, MERN, and PERN stacks.
            <br />
            To know more about my technical skills, check out my <a
              className="border-b-[3px] w-[50px] border-green-300"
              href="https://drive.google.com/file/d/105Pwgvkh5VeqIMBZmj7PUnjNuSkt61Hh/view"
              target="_blank"
              without
              rel="noreferrer"
            >
              résumé.
            </a>
          </p>

          <p>
            Besides coding, my interests lie in traveling, photography, and filmmaking among other things.
            <br />
            Scroll on to get to know me more! 😊
          </p>

          <div className="flex py-5 ">
            <a
              href="https://linkedin.com/in/swapnil-parab/"
              target="_blank"
              rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiFillLinkedin size={40} />{" "}
            </a>
            <a
              href="https://github.com/swpnl91"
              target="_blank"
              rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiFillGithub size={40} />{" "}
            </a>
            <a
              href={mailtoHref}
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineMail size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7BF5B0] text-black px-6 py-2.5 hover:bg-transparent hover:text-white font-bold"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;