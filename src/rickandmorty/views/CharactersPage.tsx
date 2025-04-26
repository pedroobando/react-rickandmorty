import { FC, Suspense } from 'react';
import { useCharacters } from '@/rickandmorty';
import { CharacterList } from '../components/CharacterList';
import { useSearchParams } from 'react-router';

import { SelectStatus, useSelectStatus } from '../components/SelectStatus';
import { SelectGenders, useSelectGender } from '@/rickandmorty/components/SelectGenders';
import { SelectSpecies, useSelectSpecies } from '@/rickandmorty/components/SelectSpecies';
import { usePaginationParam } from '@/components/pagination';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import CharacterSkeleton from '@/rickandmorty/components/CharacterCardSkeleton';

export const CharactersPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { onStatusChange } = useSelectStatus({ setSearchParams });

  const { onGenderChange } = useSelectGender({ setSearchParams });

  const { onSpeciesChange } = useSelectSpecies({ setSearchParams });

  const { characters, isLoading, isError, totPages } = useCharacters({
    activePage: Number(searchParams.get('page')) || 1,
    status: searchParams.get('status') || undefined,
    gender: searchParams.get('gender') || undefined,
    species: searchParams.get('species') || undefined,
  });

  const { onPageChange } = usePaginationParam({
    totalPages: Number(totPages) || 1,
    setSearchParams,
  });

  return (
    <section className="px-4 py-2">
      <h1 className="text-2xl font-bold mb-2">Rick and Morty</h1>
      <h3 className="font-light text-sm my-2">Las mejores NTF para ti.</h3>

      <div className="flex gap-4 mb-4">
        <SelectStatus onStatusChange={onStatusChange} activeStatus={searchParams.get('status') || undefined} />
        <SelectGenders onGenderChange={onGenderChange} activeGender={searchParams.get('gender') || undefined} />
        <SelectSpecies onSpeciesChange={onSpeciesChange} activeSpecies={searchParams.get('species') || undefined} />
      </div>

      <hr className="mb-4 mt-2" />

      {isError && <p>Hubo un error al cargar los NTF</p>}
      {isLoading && <h3>Cargando...</h3>}

      {!isLoading && !isError && (
        <>
          <Suspense fallback={<CharacterSkeleton />}>
            <CharacterList characters={characters!} />

            <footer className="mt-4">
              <div className="flex justify-center items-center space-x-2">
                <Button
                  className="px-4"
                  variant="outline"
                  size="sm"
                  onClick={() => onPageChange(1)}
                  disabled={Number(searchParams.get('page')) <= 1}
                >
                  {'<<'}
                </Button>
                <Button
                  className="px-4"
                  variant="outline"
                  size="sm"
                  onClick={() => onPageChange(Number(searchParams.get('page')) - 1)}
                  disabled={Number(searchParams.get('page')) <= 1}
                >
                  {'<'}
                </Button>
                <Label>{`${Number(searchParams.get('page') || 1)} of ${totPages}`}</Label>
                <Button
                  className="px-4"
                  variant="outline"
                  size="sm"
                  onClick={() => onPageChange(Number(searchParams.get('page')) + 1)}
                  disabled={Number(searchParams.get('page') || 1) >= totPages!}
                >
                  {'>'}
                </Button>
                <Button
                  className="px-4"
                  variant="outline"
                  size="sm"
                  onClick={() => onPageChange(totPages!)}
                  disabled={Number(searchParams.get('page') || 1) >= totPages!}
                >
                  {'>>'}
                </Button>
              </div>
            </footer>
          </Suspense>
        </>
      )}
    </section>
  );
};
