import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { useInView } from 'react-intersection-observer'; // Import the intersection observer hook

const Contact = () => {
  // State to manage form fields and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission (could be extended to send emails)
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    // Simulate form submission and reset
    setTimeout(() => {
      setStatus('Message Sent!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0 }} 
          animate={{ opacity: inView ? 1 : 0 }} 
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-semibold text-blue-600 mb-12"
        >
          Contact Me
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-left text-gray-700 text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>

          {status && (
            <div className="mt-4 text-center text-gray-600">{status}</div>
          )}
        </motion.form>

        {/* Alternative Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-2">Or, you can reach me at:</p>
          <p className="text-blue-600 font-semibold">
            <a href="mailto:essaisa99@gmail.com">essaisa99@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
