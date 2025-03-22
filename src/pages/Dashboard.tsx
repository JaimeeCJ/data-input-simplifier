
import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Bem-vindo ao Sistema
          </h1>
          <p className="text-white/80 mt-4 max-w-lg mx-auto">
            Escolha uma opção no menu superior para começar
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          <Button 
            className="p-10 text-lg bg-white/20 hover:bg-white/30 border border-white/20"
            onClick={() => navigate('/profile')}
          >
            Cadastro de Usuário
          </Button>
          <Button 
            className="p-10 text-lg bg-white/20 hover:bg-white/30 border border-white/20"
            onClick={() => navigate('/selection')}
          >
            Escolha de Opções
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
