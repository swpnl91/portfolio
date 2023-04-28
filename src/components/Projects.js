import React from "react";
import estore from "../assets/estore.png";
import interviewScheduler from "../assets/interview-scheduler.png";
import tweeter from "../assets/tweeter.png";
import tinyApp from "../assets/tiny-app.png";

const Projects = () => {
  const projects = [
    {
      img: estore,
      title: "e-store",
      desc: " An full-stack E-commerce website. Built with React, Node.js, Express, and MongoDB",
      live: "https://estore-kki3.onrender.com/",
      code: "https://github.com/swpnl91/MERN-E-Store",
    },
    {
      img: interviewScheduler,
      title: "interview scheduler", 
      desc: "Interview Scheduler allows you to book daily appointments with available interviewers. Built with React.",
      // live:"",
      code: "https://github.com/swpnl91/scheduler",
    },
    {
      img: tweeter,
      title: "tweeter",
      desc: "Tweeter is a single-page application, Twitter clone. Created with JavaScript, jQuery, AJAX, HTML, and CSS.",
      // live:"",
      code: "https://github.com/swpnl91/tweeter",
    },
    {
      img: tinyApp,
      title: "tiny app",
      desc: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs.",
      // live:"",
      code: "https://github.com/swpnl91/tinyapp",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-green-300 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my projects that I built using React,
            Express, Node.js, PostgreSQL, MongoDB, and JavaScript.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  { project.live && <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 bg-green-300 hover:bg-green-500 mr-5 font-bold text-black"
                  >
                    Demo
                  </a> }
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 bg-green-300 hover:bg-green-500 font-bold text-black"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;