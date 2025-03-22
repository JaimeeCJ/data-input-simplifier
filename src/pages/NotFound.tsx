
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue to-primary/90">
      <motion.div 
        className="glass p-10 rounded-xl text-center max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-6xl font-bold text-secondary mb-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          404
        </motion.h1>
        <motion.p 
          className="text-xl text-primary mb-6"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Ops! Página não encontrada
        </motion.p>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button 
            asChild
            className="bg-secondary hover:bg-secondary/90 transition-all duration-300 text-white"
          >
            <a href="/">Voltar ao Início</a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
