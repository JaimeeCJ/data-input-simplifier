
import React from 'react';
import { AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue to-primary/90 flex flex-col items-center justify-center p-6">
      <AnimatePresence mode="wait">
        <div className="w-full max-w-4xl">
          {children}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
