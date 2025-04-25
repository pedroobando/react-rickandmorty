import { FC } from 'react';
import { BadgeCent } from 'lucide-react';
import { SidebarGroup, SidebarHeader } from '@/components/ui/sidebar';

export const HeaderMain: FC = () => {
  return (
    <>
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <SidebarHeader className="flex flex-col">
          <div className="flex items-center gap-2">
            <BadgeCent width={24} height={24} />
            <h1 className="text-xl">Exchange NFT</h1>
          </div>
          <h2 className="text-xs font-light ml-10">Reliable Platform</h2>
        </SidebarHeader>
      </SidebarGroup>
    </>
  );
};
