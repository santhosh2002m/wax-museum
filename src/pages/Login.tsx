import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import cityscapeBg from "../../public/bg.webp";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/ticket");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${cityscapeBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 
        rounded-2xl p-8 w-[380px] shadow-2xl"
      >
        {/* Header */}
        <h1 className="text-white text-3xl font-bold text-center mb-6 tracking-wide">
          Welcome Back
        </h1>
        <p className="text-gray-200 text-center mb-8 text-sm">
          Please login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-12 rounded-lg focus:ring-2 focus:ring-primary/80"
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-12 rounded-lg focus:ring-2 focus:ring-primary/80"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80 text-white h-12 rounded-lg shadow-lg transition-all duration-300"
          >
            Login
          </Button>
        </form>

        {/* Footer Links */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-300">
          <button type="button" className="hover:text-white transition-colors">
            Forgot Password?
          </button>
          <button type="button" className="hover:text-white transition-colors">
            Create Account
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
