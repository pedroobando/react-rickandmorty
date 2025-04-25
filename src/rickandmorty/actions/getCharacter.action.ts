import { rickandmortyApi } from '@/rickandmorty/api/rickandmorty.api';
import { ICharacter } from '@/rickandmorty/interfaces/character.interface';
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

export const getCharacter = async (character: number): Promise<ICharacter> => {
  const { data } = await rickandmortyApi.get<ICharacter>(`/character/${character}`);
  return data;
};
