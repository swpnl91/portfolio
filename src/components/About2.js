import React from "react";
import AboutImg2 from "../assets/about-img2.png";

const About = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        
        <div className="about-img">
          <img
            src={AboutImg2}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
        
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[50px] border-green-300 pb-2">
            02
          </h2>

          <p className="pb-5">
            My natural curiosity, fondness for discovering new things, and love for travel brought me to the Playground of Europe, in pursuit of a Management degree.
          </p>

          <p className="pb-5">
            My time there, made me realize how important it is to be comfortable with being uncomfortable, for your personal and professional growth.
          </p>

          <p className="pb-5">After Switzerland, my next stop was the Land Down Under. My internship in Australia taught me the importance of team-work, conflict resolution, and how to thrive in a fast-paced environment.</p>

          <p className="pb-5">
            Following that, I worked in a Business Development role for about 3 years. Yet, through all these years, my passion for coding kept beckoning.
          </p>

        </div>


      </div>
    </section>
  );
};

export default About;