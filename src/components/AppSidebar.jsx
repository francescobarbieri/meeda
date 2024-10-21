import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from './ui/sidebar';

import { Home, PieChart, Search } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const items = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
    subItems: [],
  },
  {
    title: 'Investments',
    url: '/',
    icon: Search,
    subItems: [
      {
        title: 'Asset Allocation',
        url: '/investments',
        icon: PieChart,
      },
    ],
  },
  {
    title: 'Cash Flow',
    url: '/',
    icon: Search,
    subItems: [
      {
        title: 'Transactions',
        url: '/',
        icon: Search,
      },
    ],
  },
  {
    title: 'Reports',
    url: '/test',
    icon: Search,
    subItems: [],
  },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (item.subItems.length > 0) {
                  return (
                    <>
                      {item.subItems.map((subitem) => (
                        <Collapsible defaultOpen className="group/collapsible">
                          <SidebarMenuItem key={subitem.title}>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton>
                                <item.icon />
                                {item.title}
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                  <SidebarMenuSubButton asChild>
                                    <a href={subitem.url}>
                                      <span>{subitem.title}</span>
                                    </a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              </SidebarMenuSub>
                            </CollapsibleContent>
                            <SidebarMenuBadge>
                              <div className="rounded-full h-2 w-2 bg-red-700 mr-2"></div>
                              <Home className="h-4 w-4" />
                            </SidebarMenuBadge>
                          </SidebarMenuItem>
                        </Collapsible>
                      ))}
                    </>
                  );
                } else {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
