import React from "react";
import AboutImg1 from "../assets/about-img1.png";


const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[50px] border-green-300 pb-2">
            01
          </h2>

          <p className="pb-5">
            Alright... story time!
          </p>
          <p className="pb-5">
            My fascination for coding goes back to 2008. I have been interested in web development ever since I got exposed to the world of 'The Internet' for the first time. That's why I enrolled myself in a Computer Science program.
          </p>

          <p className="pb-5">
            Those 4 years laid the foundation for me to build qualities like the ability to think logically, and outside of the box.
          </p>

          <p className="pb-5">But fate had some other plans as my career path ended up taking a detour after graduation.</p>

          <p className="pb-5">
            Enroute, I explored several avenues that helped me in developing skills that I lacked or needed to be worked upon.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg1}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default About;