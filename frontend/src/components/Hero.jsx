import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white h-screen flex flex-col justify-center items-center text-center px-6 md:px-12">
      
      {/* Hero Section Wrapper with Intersection Observer */}
      <InView
        triggerOnce={true} // Trigger only once when the component comes into view
        threshold={0.1}    // Trigger when 10% of the element is in view
      >
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Essa Isa
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl mb-6"
            >
              A passionate Software Developer specialising in MongoDB, Express.js, React, Node.js, and TailwindCSS.
            </motion.p>
          </motion.div>
        )}
      </InView>

      {/* Button that appears when it comes into view */}
      <InView
        triggerOnce={true} // Trigger only once
        threshold={0.1}    // Trigger when 10% of the element is in view
      >
        {({ inView, ref }) => (
          <motion.a
            ref={ref}
            href="#projects"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white text-blue-600 px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-50 transition"
          >
            View My Projects
          </motion.a>
        )}
      </InView>
    </section>
  );
};

export default Hero;
