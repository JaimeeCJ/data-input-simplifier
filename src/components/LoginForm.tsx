
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      
      // Simple validation
      if (email && password) {
        toast({
          title: "Login bem-sucedido",
          description: "Bem-vindo ao sistema.",
        });
        navigate('/profile');
      } else {
        toast({
          title: "Erro de login",
          description: "Por favor, preencha todos os campos.",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 50,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="glass p-8 rounded-xl w-full max-w-md mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-3xl font-semibold text-primary text-center mb-1">Bem-vindo</h2>
        <p className="text-center text-primary/70">Faça login para continuar</p>
      </motion.div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="email" className="text-primary">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 border-2 border-primary/20 focus:border-secondary focus:ring-secondary"
          />
        </motion.div>
        
        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="password" className="text-primary">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 border-2 border-primary/20 focus:border-secondary focus:ring-secondary"
          />
        </motion.div>
        
        <motion.div variants={itemVariants} className="pt-2">
          <Button 
            type="submit" 
            className="w-full h-12 bg-secondary hover:bg-secondary/90 transition-all duration-300 ease-in-out text-white font-medium rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default LoginForm;
