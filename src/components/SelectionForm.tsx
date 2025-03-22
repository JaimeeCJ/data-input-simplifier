
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SelectionData, SelectionOption, CalculationSummary } from '@/lib/types';
import Summary from './Summary';

const SelectionForm: React.FC = () => {
  const [selectionData, setSelectionData] = useState<SelectionData>({
    option: "1/3" as SelectionOption,
  });
  const [summary, setSummary] = useState<CalculationSummary>({
    option: "1/3",
    calculatedValue: 33.33,
    explanation: "Cálculo padrão para opção 1/3 (33.33%)"
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Calculate summary whenever selection changes
  useEffect(() => {
    const calculateSummary = () => {
      let calculatedValue = 0;
      let explanation = "";
      
      switch(selectionData.option) {
        case "1/3":
          calculatedValue = 33.33;
          explanation = "Cálculo padrão para opção 1/3 (33.33%)";
          break;
        case "2/3":
          calculatedValue = 66.67;
          explanation = "Cálculo padrão para opção 2/3 (66.67%)";
          break;
        case "3/3":
          if (selectionData.percentage !== undefined) {
            calculatedValue = selectionData.percentage;
            explanation = `Valor personalizado: ${selectionData.percentage}%`;
          } else {
            calculatedValue = 100;
            explanation = "Valor padrão para opção 3/3 (100%)";
          }
          break;
      }
      
      setSummary({
        option: selectionData.option,
        percentage: selectionData.percentage,
        calculatedValue,
        explanation
      });
    };
    
    calculateSummary();
  }, [selectionData]);
  
  const handleOptionChange = (value: string) => {
    const option = value as SelectionOption;
    
    if (option === "3/3") {
      setSelectionData({ 
        option, 
        percentage: 100 // Default percentage for 3/3
      });
    } else {
      // Remove percentage if switching from 3/3 to another option
      const { percentage, ...rest } = selectionData;
      setSelectionData({ ...rest, option });
    }
  };
  
  const handlePercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setSelectionData(prev => ({ ...prev, percentage: value }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectionData.option === "3/3" && (selectionData.percentage === undefined || selectionData.percentage <= 0 || selectionData.percentage > 100)) {
      toast({
        title: "Valor inválido",
        description: "Por favor, informe uma porcentagem válida entre 1 e 100.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Seleção concluída",
      description: "Suas opções foram salvas com sucesso.",
    });
    
    // Save the data to localStorage
    localStorage.setItem('selectionData', JSON.stringify(selectionData));
    localStorage.setItem('calculationSummary', JSON.stringify(summary));
    
    // In a real app, we might redirect to a confirmation page
    // For now, we just stay on the same page
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
      transition: { type: "spring", stiffness: 50, damping: 10 }
    }
  };
  
  return (
    <div className="space-y-6">
      <motion.div 
        className="glass p-8 rounded-xl w-full mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-2xl font-semibold text-primary text-center">Seleção de Opções</h2>
          <p className="text-center text-primary/70 mt-1">Escolha suas preferências</p>
        </motion.div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div className="space-y-3" variants={itemVariants}>
            <Label htmlFor="option" className="text-primary">Escolha uma opção</Label>
            <Select onValueChange={handleOptionChange} value={selectionData.option}>
              <SelectTrigger id="option" className="border-2 border-primary/20 focus:border-secondary focus:ring-secondary">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1/3">1/3</SelectItem>
                <SelectItem value="2/3">2/3</SelectItem>
                <SelectItem value="3/3">3/3</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
          
          <AnimatePresence>
            {selectionData.option === "3/3" && (
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "spring", stiffness: 70, damping: 15 }}
              >
                <Label htmlFor="percentage" className="text-primary">Porcentagem (%)</Label>
                <Input
                  id="percentage"
                  type="number"
                  min={0}
                  max={100}
                  value={selectionData.percentage !== undefined ? selectionData.percentage : ''}
                  onChange={handlePercentageChange}
                  className="border-2 border-primary/20 focus:border-secondary focus:ring-secondary"
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.div variants={itemVariants}>
            <Button 
              type="submit" 
              className="w-full bg-secondary hover:bg-secondary/90 transition-all duration-300 ease-in-out text-white font-medium py-6 rounded-lg"
            >
              Confirmar Seleção
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="pt-4">
            <Button 
              type="button" 
              variant="outline" 
              className="w-full border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300"
              onClick={() => navigate('/profile')}
            >
              Voltar para o Perfil
            </Button>
          </motion.div>
        </form>
      </motion.div>
      
      <Summary summary={summary} />
    </div>
  );
};

export default SelectionForm;
