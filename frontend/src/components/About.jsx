import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'; // Import the hook

const About = () => {
  // useInView hook to track visibility
  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger animation once when entering the view
    threshold: 0.1, // Trigger the animation when 10% of the element is in view
  });

  return (
    <section id="about" className="bg-gray-100 py-16 px-6 md:px-12">
      <motion.div
        ref={ref}  // Attach the ref to the element
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }} // Trigger opacity change when in view
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-8">About Me</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Hi! I'm Essa Isa, a Full Stack Developer passionate about creating dynamic, scalable web applications. I specialize in using the MERN stack—MongoDB, Express.js, React, and Node.js—to build both the front-end and back-end of modern web solutions.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Whether it's crafting user-friendly interfaces with React or developing powerful server-side applications with Node and Express, I’m dedicated to designing fast, responsive, and seamless web experiences.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          I’m driven by solving complex problems and continuously improving my skills. I’m always learning new technologies to stay ahead in the ever-evolving world of web development.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Feel free to explore my projects and reach out if you’re interested in collaborating or learning more!
        </p>

        <div className="flex justify-center items-center gap-8 mt-12">
          <div className="text-left">
            <h3 className="text-2xl font-medium text-blue-600">Skills</h3>
            <ul className="mt-4 text-lg text-gray-700">
              <li>🌐 HTML5, CSS3, JavaScript</li>
              <li>⚛️ React.js & Redux</li>
              <li>🌟 TailwindCSS, Bootstrap</li>
              <li>⚙️ Node.js & Express</li>
              <li>💾 MongoDB, PostgreSQL</li>
              <li>🔧 Git & GitHub</li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-medium text-blue-600">Education / Certifications</h3>
            <ul className="mt-4 text-lg text-gray-700">
              <li>🎓 Software Engineering @ Cardiff Metropolitan University / 2022-</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
