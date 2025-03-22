
import React from 'react';
import AnimatedTransition from '@/components/AnimatedTransition';
import LoginForm from '@/components/LoginForm';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue to-primary/90 flex items-center justify-center p-4">
      <AnimatedTransition>
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Sistema de Dados Cadastrais
            </h1>
            <p className="text-white/80 mt-4 max-w-lg mx-auto">
              Plataforma simplificada para registro de dados e seleção de opções
            </p>
          </motion.div>
          
          <LoginForm />
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default Index;
