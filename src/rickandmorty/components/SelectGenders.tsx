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

interface SelectStatusProps {
  activeGender: string | undefined;
  onGenderChange: (status: string) => void;
}

// ('Female', 'Male', 'Genderless' or 'unknown').

export const SelectGenders: FC<SelectStatusProps> = ({ activeGender, onGenderChange }) => {
  return (
    <Select onValueChange={onGenderChange} defaultValue={activeGender}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Female">Female</SelectItem>
          <SelectItem value="Male">Male</SelectItem>
          <SelectItem value="Genderless">Genderless</SelectItem>
          <SelectItem value="unknown">unknown</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

interface SelectGendersHookProps {
  // activeGender: string | undefined;
  setSearchParams: SetURLSearchParams;
}

export const useSelectGender = ({ setSearchParams }: SelectGendersHookProps) => {
  // const [genderCharacter, setGenderCharacter] = useState<string | undefined>(activeGender);

  const onGenderChange = (gender: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (gender === 'All') {
        newParams.delete('gender');
      } else {
        newParams.set('gender', gender);
      }
      newParams.set('page', '1');
      // setGenderCharacter(newParams.get('gender') || undefined);
      return newParams;
    });
  };

  return {
    // genderCharacter,
    onGenderChange,
  };
};
