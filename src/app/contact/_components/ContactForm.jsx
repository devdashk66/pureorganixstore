"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-6"
    >
      <h2 className="text-2xl font-semibold text-primary mb-6">
        Send us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-primary/80 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-primary/5 border border-primary/10
                     focus:border-primary/30 outline-none text-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-primary/80 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-xl bg-primary/5 border border-primary/10
                     focus:border-primary/30 outline-none text-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-primary/80 mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows="4"
            className="w-full px-4 py-2.5 rounded-xl bg-primary/5 border border-primary/10
                     focus:border-primary/30 outline-none text-primary resize-none"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-3 bg-primary text-white rounded-xl text-lg font-medium
                   hover:bg-primary/90 transition-colors duration-300"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
