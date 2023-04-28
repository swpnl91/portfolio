import React from "react";
import AboutImg3 from "../assets/about-img3.png";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[50px] border-green-300 pb-2">
            03
          </h2>

          <p className="pb-5">
            And then, along came '2020' and with it - the Pandemic.
          </p>
          <p className="pb-5">
            This period, while being on the job and otherwise, taught me a lot about persistence, patience, endurance, and the ability to never give up.
          </p>

          <p className="pb-5">After coming to Canada, I got the opportunity to be a part of an intensive Web Development Bootcamp.</p>

          <p className="pb-5">It's here that I learnt to solve problems by self-teaching, breaking a major problem into small achievable tasks, and be consistent.</p>
          
          <p className="pb-5">
            And now, here I am, forged in the fire of all those life experiences; ready - to start afresh, in the Great White North; hungry - to learn more as a Full-Stack Developer! 😄
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg3}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default About;