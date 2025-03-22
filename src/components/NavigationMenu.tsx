
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const NavigationMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleTabChange = (value: string) => {
    navigate(value);
  };
  
  const getActiveValue = () => {
    if (location.pathname.includes('profile')) return '/profile';
    if (location.pathname.includes('selection')) return '/selection';
    return '/profile'; // Default
  };
  
  return (
    <div className="w-full flex justify-center mb-6">
      <Tabs
        value={getActiveValue()}
        onValueChange={handleTabChange}
        className="w-full max-w-md"
      >
        <TabsList className="w-full grid grid-cols-2 bg-primary/10 p-1">
          <TabsTrigger
            value="/profile"
            className={cn(
              "flex items-center gap-2 py-3 data-[state=active]:bg-secondary data-[state=active]:text-white",
              location.pathname.includes('profile') ? "text-white" : "text-primary"
            )}
          >
            <User size={18} />
            <span>Cadastro</span>
            {location.pathname.includes('profile') && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                layoutId="activeLine"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </TabsTrigger>
          <TabsTrigger
            value="/selection"
            className={cn(
              "flex items-center gap-2 py-3 data-[state=active]:bg-secondary data-[state=active]:text-white",
              location.pathname.includes('selection') ? "text-white" : "text-primary"
            )}
          >
            <CheckSquare size={18} />
            <span>Escolha de Opções</span>
            {location.pathname.includes('selection') && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                layoutId="activeLine"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default NavigationMenu;
