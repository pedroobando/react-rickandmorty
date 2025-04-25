import { FC } from 'react';
import { ICharacter } from '../interfaces/character.interface';
import { CharacterCard } from './CharacterCard';

interface CharacterListProps {
  characters: ICharacter[];
}

export const CharacterList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
};
