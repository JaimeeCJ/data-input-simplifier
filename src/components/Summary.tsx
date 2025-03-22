
import React from 'react';
import { motion } from 'framer-motion';
import { CalculationSummary } from '@/lib/types';

interface SummaryProps {
  summary: CalculationSummary;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  const formatPercentage = (value?: number) => {
    if (value === undefined) return 'N/A';
    return `${value}%`;
  };

  return (
    <motion.div 
      className="glass p-6 rounded-xl mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 10 }}
    >
      <h3 className="text-xl font-semibold text-primary mb-4">Resumo do Cálculo</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between border-b border-primary/10 pb-2">
          <span className="text-primary/70">Opção selecionada:</span>
          <span className="font-medium text-primary">{summary.option}</span>
        </div>
        
        {summary.option === "3/3" && (
          <div className="flex justify-between border-b border-primary/10 pb-2">
            <span className="text-primary/70">Porcentagem escolhida:</span>
            <span className="font-medium text-primary">{formatPercentage(summary.percentage)}</span>
          </div>
        )}
        
        <div className="flex justify-between border-b border-primary/10 pb-2">
          <span className="text-primary/70">Valor calculado:</span>
          <span className="font-medium text-primary">{summary.calculatedValue}</span>
        </div>
        
        <div className="mt-4 pt-2">
          <p className="text-primary/80 text-sm">{summary.explanation}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Summary;
