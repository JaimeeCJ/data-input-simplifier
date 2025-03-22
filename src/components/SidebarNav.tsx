
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, CheckSquare, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const SidebarNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    {
      title: 'Cadastro',
      path: '/profile',
      icon: User,
    },
    {
      title: 'Escolha de Opções',
      path: '/selection',
      icon: CheckSquare,
    },
  ];

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full">
        <Sidebar variant="floating" className="border-r border-white/10">
          <SidebarHeader className="pb-4">
            <div className="flex items-center gap-2 px-2">
              <span className="text-xl font-bold text-white">Sistema</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        isActive={location.pathname.includes(item.path)}
                        onClick={() => navigate(item.path)}
                        tooltip={item.title}
                      >
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 p-0">
          <div className="p-4 flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-lg mb-4">
            <h2 className="text-white font-medium">
              {location.pathname.includes('profile') 
                ? 'Perfil de Usuário' 
                : 'Escolha de Opções'}
            </h2>
            <SidebarTrigger />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default SidebarNav;
