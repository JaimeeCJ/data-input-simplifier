
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, CheckSquare } from 'lucide-react';
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

interface SidebarNavProps {
  children: React.ReactNode;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ children }) => {
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
      <div className="flex w-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
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
        
        <div className="flex-1 p-4">
          <div className="flex justify-end mb-4">
            <SidebarTrigger />
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default SidebarNav;
