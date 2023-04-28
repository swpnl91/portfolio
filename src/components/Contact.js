import React from "react";


const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-green-300 pb-2">
          Contact
        </h2>

        <p className="py-2">
          Couldn't find what you're looking for?
          I'd still be more than happy to reskill/upskill myself to be of help.
        </p>

        <p className="py-2">
          I am currently open for full-time roles. If you'd
          like to discuss about that, feel free to email me.
        </p>

        <p className="py-2">
          <span className="border-b-[1px] w-[50px] border-green-300">📧 : swapnil.parab2013@gmail.com</span>
        </p>

      </div>
    </section>
  );
};

export default Contact;