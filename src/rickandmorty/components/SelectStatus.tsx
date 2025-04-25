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
  activeStatus: string | undefined;
  onStatusChange: (status: string) => void;
}

export const SelectStatus: FC<SelectStatusProps> = ({ activeStatus, onStatusChange }) => {
  return (
    <Select onValueChange={onStatusChange} defaultValue={activeStatus}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Alive">Alive</SelectItem>
          <SelectItem value="Dead">Dead</SelectItem>
          <SelectItem value="unknown">unknown</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

interface SelectStatusHookProps {
  setSearchParams: SetURLSearchParams;
}

export const useSelectStatus = ({ setSearchParams }: SelectStatusHookProps) => {
  // const [statusCharacter, setStatusCharacter] = useState<string | undefined>(activeStatus);

  const onStatusChange = (status: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (status === 'All') {
        newParams.delete('status');
      } else {
        newParams.set('status', status);
      }
      newParams.set('page', '1');
      // setStatusCharacter(newParams.get('status') || undefined);
      return newParams;
    });
  };

  return {
    // statusCharacter,
    onStatusChange,
  };
};
