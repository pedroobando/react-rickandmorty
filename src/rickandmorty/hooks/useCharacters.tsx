import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '../actions/getCharacters.action';

interface CharactersProps {
  activePage: number;
  status: string | undefined;
  gender?: string | undefined;
  species?: string | undefined;
}

export const useCharacters = ({ activePage = 1, status, gender, species }: CharactersProps) => {
  const params = new URLSearchParams();
  params.set('page', `${activePage}`);
  if (status) {
    params.set('status', status);
  }

  if (gender) {
    params.set('gender', gender);
  }

  if (species) {
    params.set('species', species);
  }

  const charactesQuery = useQuery({
    queryKey: ['character', { activePage, status, gender, species }],
    queryFn: () => getCharacters(params),
    staleTime: 1000 * 60 * 60 * 5, // 5 minuto de stale time => no volver a hacer la peticion

    // INFO: En conclusion me quedo con el spinner de loading,
    // esto dependera de la funcionalidad que se le quiera dar al componente.
  });

  return {
    // data
    params,
    charactesQuery,
    prevPage: charactesQuery.data?.prevPage,
    nextPage: charactesQuery.data?.nextPage,
    characters: charactesQuery.data?.characters,
    totPages: charactesQuery.data?.pages,
    count: charactesQuery.data?.count,
    isLoading: charactesQuery.isLoading,
    isError: charactesQuery.isError,
    isFetching: charactesQuery.isFetching,
    error: charactesQuery.error,
  };
};
