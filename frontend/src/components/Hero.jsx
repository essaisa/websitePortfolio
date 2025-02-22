import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white h-screen flex flex-col justify-center items-center text-center px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Essa Isa</h1>
      <p className="text-lg md:text-xl mb-6">
        A passionate Software Developer specialising in MongoDB, Express.js, React, Node.js and TailwindCSS.
      </p>
      <a
        href="#projects"
        className="bg-white text-blue-600 px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-50 transition"
      >
        View My Projects
      </a>
    </section>
  );
};

export default Hero;
