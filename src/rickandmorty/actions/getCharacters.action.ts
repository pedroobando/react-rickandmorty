import { rickandmortyApi } from '@/rickandmorty/api/rickandmorty.api';
import { ICharacter, ICharacterList } from '@/rickandmorty/interfaces/character.interface';
// import { githubApi } from '../../api/github.api';
// import { GithubIssue, GithubState } from '../interfaces';

// export const getIssues = async (state: GithubState, selectedLabel: string[], page: number): Promise<GithubIssue[]> => {
//   await sleep(1500);

//   const params = new URLSearchParams();

//   if (state !== 'all') {
//     params.append('state', state);
//   }

//   if (selectedLabel.length > 0) {
//     params.append('labels', selectedLabel.join(','));
//   }

//   params.append('page', `${page}`);
//   params.append('per_page', '5');

//   const { data } = await githubApi.get<GithubIssue[]>('/issues', { params });
//   return data;
// };

// https://rickandmortyapi.com/api/character

interface CharactersInterface {
  characters: ICharacter[];
  pages: number;
  count: number;
  prevPage: number | null;
  nextPage: number | null;
}

export const getCharacters = async (urlParams: URLSearchParams): Promise<CharactersInterface> => {
  const params = new URLSearchParams(urlParams);
  const page = Number(params.get('page')) || 1;
  params.set('page', `${page}`);

  const { data } = await rickandmortyApi.get<ICharacterList>('/character', { params });
  return {
    characters: data.results,
    pages: data.info.pages,
    count: data.info.count,
    prevPage: data.info.pages > 0 && page > 1 ? page - 1 : null,
    nextPage: page < data.info.pages ? page + 1 : null,
  };
};
