"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 mt-8"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/10
                     focus:border-primary/30 outline-none text-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-primary/80 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/10
                     focus:border-primary/30 outline-none text-primary"
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
          Login
        </motion.button>
      </form>

      <p className="mt-4 text-center text-primary/70">
        Don&#39;t have an account?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Register here
        </Link>
      </p>
    </motion.div>
  );
};

export default LoginForm;
