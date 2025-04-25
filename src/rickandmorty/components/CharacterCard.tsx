import { FC, useEffect, useState } from 'react';
import { ICharacter } from '../interfaces/character.interface';

import { useCharacterStore } from '@/rickandmorty/stores/characters.store';
import { CardButtonSelect } from './CardButtonSelect';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface CharacterCardProps {
  character: ICharacter;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const checkCharacters = useCharacterStore((state) => state.checkCharacter);

  useEffect(() => {
    setSelected(checkCharacters(character.id));
  }, [character.id]);

  return (
    <>
      <article
        onMouseOut={() => setVisible(false)}
        onMouseOver={() => setVisible(true)}
        className={`relative max-w-sm rounded overflow-hidden bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out border-blue-400 ${
          selected ? 'border-4' : 'border-0'
        } `}
      >
        <CardButtonSelect character={character} visible={visible} setSelected={setSelected} selected={selected} />
        <LazyLoadImage className="w-full" src={character.image} alt={character.name} effect="blur" loading="lazy" />
        <div className="px-4 py-2">
          <div className="font-bold mb-2">{character.name}</div>
          <p className="text-gray-600 text-sm">
            {character.status} - {character.species}
          </p>
          <p className="text-gray-600 text-base">20.00 APX</p>
        </div>
      </article>
    </>
  );
};
