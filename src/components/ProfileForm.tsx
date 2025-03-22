
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { UserData } from '@/lib/types';

const ProfileForm: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    fullName: '',
    address: '',
    cpf: '',
    city: '',
    country: '',
    maritalStatus: '',
    companyName: '',
    companyAddress: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setUserData(prev => ({ ...prev, maritalStatus: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    const requiredFields = ['fullName', 'address', 'cpf', 'city', 'country', 'maritalStatus'];
    const missingFields = requiredFields.filter(field => !userData[field as keyof UserData]);
    
    if (missingFields.length > 0) {
      setIsLoading(false);
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Perfil salvo",
        description: "Seus dados foram salvos com sucesso.",
      });
      // Store user data in localStorage for persistence
      localStorage.setItem('userData', JSON.stringify(userData));
      navigate('/selection');
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 }
    }
  };

  return (
    <motion.div 
      className="glass p-8 rounded-xl w-full mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-2xl font-semibold text-primary text-center">Dados Cadastrais</h2>
        <p className="text-center text-primary/70 mt-1">Preencha seus dados pessoais e profissionais</p>
      </motion.div>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div className="space-y-2" variants={itemVariants}>
          <Label htmlFor="fullName" className="text-primary">Nome Completo *</Label>
          <Input
            id="fullName"
            name="fullName"
            value={userData.fullName}
            onChange={handleInputChange}
            className="border-2 border-primary/20 focus:border-secondary focus:ring-secondary"
          />
        </motion.div>
        
        <motion.div className="space-y-2" variants={itemVariants}>
          <Label htmlFor="cpf" className="text-primary">CPF *</Label>
          <Input
            id="cpf"
            name="cpf"
            value={userData.cpf}
            onChange={handleInputChange}
            className="border-2 border-primary/20 focus:border-secondary focus:ring-secondary"
          />
        </motion.div>
        
        <motion.div className="space-y-2" variants={itemVariants}>
          <Label htmlFor="address" className="text-primary">Endereço *</Label>
          <Input
            id="address"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
            className="border-2 border-primary/20 focus:border-secondary focus:ring-secondary"
          />
        </motion.div>
        
        <motion.div className="space-y-2" variants={itemVariants}>
          <Label htmlFor="city" className="text-primary">Cidade *</Label>
          <Input
            id="city"
            name="city"
            value={userData.city}
            onChange={handleInputChange}
            className="border-2 border-primary/20 focus:border-secondary focus:ring-secondary"
          />
        </motion.div>
        
        <motion.div className="space-y-2" variants={itemVariants}>
          <Label htmlFor="country" className="text-primary">País *</Label>
          <Input
            id="country"
            name="country"
            value={userData.country}
            onChange={handleInputChange}
            className="border-2 border-primary/20 focus:border-secondary focus:ring-secondary"
          />
        </motion.div>
        
        <motion.div className="space-y-2" variants={itemVariants}>
          <Label htmlFor="maritalStatus" className="text-primary">Estado Civil *</Label>
          <Select onValueChange={handleSelectChange} value={userData.maritalStatus}>
            <SelectTrigger className="border-2 border-primary/20 focus:border-secondary focus:ring-secondary">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Solteiro(a)</SelectItem>
              <SelectItem value="married">Casado(a)</SelectItem>
              <SelectItem value="divorced">Divorciado(a)</SelectItem>
              <SelectItem value="widowed">Viúvo(a)</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
        
        <motion.div className="space-y-2" variants={itemVariants}>
          <Label htmlFor="companyName" className="text-primary">Nome da Empresa</Label>
          <Input
            id="companyName"
            name="companyName"
            value={userData.companyName}
            onChange={handleInputChange}
            className="border-2 border-primary/20 focus:border-secondary focus:ring-secondary"
          />
        </motion.div>
        
        <motion.div className="space-y-2" variants={itemVariants}>
          <Label htmlFor="companyAddress" className="text-primary">Endereço da Empresa</Label>
          <Input
            id="companyAddress"
            name="companyAddress"
            value={userData.companyAddress}
            onChange={handleInputChange}
            className="border-2 border-primary/20 focus:border-secondary focus:ring-secondary"
          />
        </motion.div>
        
        <motion.div className="md:col-span-2 mt-4" variants={itemVariants}>
          <Button 
            type="submit" 
            className="w-full bg-secondary hover:bg-secondary/90 transition-all duration-300 ease-in-out text-white font-medium py-6 rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Salvando...' : 'Salvar e Avançar'}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ProfileForm;
