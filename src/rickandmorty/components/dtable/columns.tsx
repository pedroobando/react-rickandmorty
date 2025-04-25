'use client';

import { Button } from '@/components/ui/button';
import { EnumStatus, ICharacter } from '@/rickandmorty/interfaces/character.interface';
import { ColumnDef, SortDirection } from '@tanstack/react-table';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getGenderIcon, getSpeciesIcon, getStatusIcon } from './icons-columns';
import { Checkbox } from '@/components/ui/checkbox';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const SortIcon = ({ isSorted }: { isSorted: boolean | SortDirection }) => {
  if (isSorted === 'asc') {
    return <ChevronUp className="h-4 w-4" />;
  }
  if (isSorted === 'desc') {
    return <ChevronDown className="h-4 w-4" />;
  }

  return null;
};

export const columns: ColumnDef<ICharacter>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: () => <div className="font-bold">ID</div>,
    cell: ({ row }) => {
      const id = row.getValue('id') as string;
      return <div className="text-left font-medium">{id}</div>;
    },
  },
  {
    accessorKey: 'image',
    header: '', //() => <div className="text-center font-bold">Image</div>,
    cell: ({ row }) => {
      const imageUrl = row.getValue('image');
      const characterName = row.getValue('name');
      return (
        <div className="flex justify-center">
          <img
            src={typeof imageUrl === 'string' ? imageUrl : undefined}
            alt={typeof characterName === 'string' ? characterName : undefined}
            className="h-8 w-8 rounded-full"
          />
        </div>
      );
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span className="text-center font-bold">Name</span>
          <SortIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },

  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span className="text-center font-bold">Status</span>
          <SortIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue('status') as EnumStatus;
      const StatusIcon = getStatusIcon(status);
      return (
        <div className="text-left font-medium flex content-baseline items-baseline justify-baseline">
          <StatusIcon width={14} height={14} />
          <span className="ml-2">{status}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'species',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span className="text-center font-bold">Species</span>
          <SortIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const species = row.getValue('species') as ICharacter['species'];
      const SpeciesIcon = getSpeciesIcon(species);
      return (
        <div className="text-left font-medium flex content-baseline items-baseline justify-baseline">
          <SpeciesIcon width={14} height={14} />
          <span className="ml-2">{species}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'gender',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          <span className="text-center font-bold">Gender</span>
          <SortIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const gender = row.getValue('gender') as ICharacter['gender'];
      const GendersIcon = getGenderIcon(gender);
      return (
        <div className="text-left font-medium flex content-baseline items-baseline justify-baseline">
          <GendersIcon width={14} height={14} />
          <span className="ml-2">{gender}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'type',
    maxSize: 2,
    header: () => <div className="text-center font-bold">Type</div>,
    cell: ({ row }) => {
      const typeValue = row.getValue('type');
      return <div className="text-left font-medium">{typeValue ? String(typeValue) : 'N/A'}</div>;
    },
  },
  {
    accessorKey: 'created',
    header: () => <div className="text-center font-bold">Fecha</div>,
    cell: ({ row }) => {
      const createdAt = new Date(row.getValue('created'));
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };

      const formatter = new Intl.DateTimeFormat('es-ES', options);
      return <div className="text-center font-medium">{formatter.format(createdAt)}</div>;
    },
  },
];
