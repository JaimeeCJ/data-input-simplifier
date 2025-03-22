
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import SidebarNav from './SidebarNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue to-primary/90">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-xl mb-6">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
            alt="Banner" 
            className="w-full h-32 object-cover rounded-lg mb-4 opacity-80"
          />
          <h1 className="text-3xl font-bold text-white text-center">Sistema de Cadastro</h1>
          <p className="text-white/70 mt-2 text-center">Gerencie seus dados e escolha suas opções</p>
        </div>
        
        <SidebarNav>
          <AnimatePresence mode="wait">
            <div className="w-full">
              {children}
            </div>
          </AnimatePresence>
        </SidebarNav>
      </div>
    </div>
  );
};

export default Layout;
