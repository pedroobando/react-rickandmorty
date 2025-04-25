import { FC } from 'react';
import { useCharacterStore } from '@/rickandmorty';
import { DataTable } from '../components/dtable/data-table';
import { columns } from '../components/dtable/columns';

export const CharactersSelected: FC = () => {
  const selectedCharactes = useCharacterStore((state) => state.charactersSelected);
  const removeCharacters = useCharacterStore((state) => state.removeCharacters);

  const onClickRemoves = (idLists: number[]) => {
    removeCharacters(idLists);
  };

  return (
    <section className="px-4 py-2">
      <h1 className="text-2xl font-bold mb-2">Rick and Morty</h1>
      <h3 className="font-light text-sm my-2">Los NTF seleccionados</h3>

      <hr className="mb-4 mt-2" />

      <DataTable columns={columns} data={selectedCharactes} onClickRemoves={onClickRemoves} />
    </section>
  );
};
