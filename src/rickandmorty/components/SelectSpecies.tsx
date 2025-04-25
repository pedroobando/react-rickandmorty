import { FC } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SetURLSearchParams } from 'react-router';

interface SelectSpeciesProps {
  activeSpecies: string | undefined;
  onSpeciesChange: (species: string) => void;
}

export const SelectSpecies: FC<SelectSpeciesProps> = ({ activeSpecies, onSpeciesChange }) => {
  return (
    <Select onValueChange={onSpeciesChange} defaultValue={activeSpecies}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Species" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Species</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Human">Human</SelectItem>
          <SelectItem value="Alien">Alien</SelectItem>
          <SelectItem value="Animal">Animal</SelectItem>
          <SelectItem value="Humanoid">Humanoid</SelectItem>
          <SelectItem value="Robot">Robot</SelectItem>
          <SelectItem value="Poopybutthole">Poopybutthole</SelectItem>
          <SelectItem value="Mythological Creature">Mythological Creature</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

interface SelectSpeciesHookProps {
  setSearchParams: SetURLSearchParams;
}

export const useSelectSpecies = ({ setSearchParams }: SelectSpeciesHookProps) => {
  const onSpeciesChange = (species: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (species === 'All') {
        newParams.delete('species');
      } else {
        newParams.set('species', species);
      }
      newParams.set('page', '1');

      return newParams;
    });
  };

  return {
    onSpeciesChange,
  };
};
