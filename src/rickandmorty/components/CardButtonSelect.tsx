import { FC } from 'react';
import { CircleMinus, CirclePlus } from 'lucide-react';
import { ICharacter, useCharacterStore } from '@/rickandmorty';

interface Props {
  visible: boolean;
  character: ICharacter;
  selected?: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardButtonSelect: FC<Props> = ({ character, visible, selected, setSelected }) => {
  const markCharacters = useCharacterStore((state) => state.markCharacters);

  const onButtonClick = () => {
    markCharacters(character);
    setSelected((character) => !character);
  };

  return (
    <div
      className={`${visible ? 'flex' : 'hidden'} absolute top-3 right-3 opacity-75 items-center justify-center z-10`}
    >
      <button onClick={onButtonClick}>
        {selected ? (
          <CircleMinus className="w-9 h-9 text-white bg-red-500 rounded-full hover:text-red-500 hover:bg-white transition duration-300" />
        ) : (
          <CirclePlus className="w-9 h-9 text-white bg-blue-500 rounded-full hover:text-blue-500 hover:bg-white transition duration-300" />
        )}
      </button>
    </div>
  );
};
