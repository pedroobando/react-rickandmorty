import * as React from 'react';
import { AudioWaveform, Command, Frame, GalleryVerticalEnd, Map, PieChart, SquareTerminal } from 'lucide-react';

import { NavMain } from '@/layouts/main/components/nav-main';
import { NavProjects } from '@/layouts/main/components/nav-projects';
import { NavUser } from '@/layouts/main/components/nav-user';
// import { TeamSwitcher } from '@/layouts/main/components/team-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { HeaderMain } from './header-main';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Rick & Morty',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Tarjetas o Card',
          url: '/rickandmorty/card',
        },
        {
          title: 'Selecciondas',
          url: '/rickandmorty/list',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <HeaderMain />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
