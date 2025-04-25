import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ICharacter } from '@/rickandmorty/interfaces/character.interface';

interface CharacterState {
  // characters: Character[];

  charactersSelected: ICharacter[];

  markCharacters: (characters: ICharacter) => void;
  // removeCharacter: (id: number) => void;
  checkCharacter: (id: number) => boolean;

  clearCharacters: () => void;
  removeCharacters: (list: number[]) => void;
  // increaseCharacters: (id: number, name: string) => void;
  // checkCharacter: (id: number, name: string) => boolean;

  // increasePopulation: () => void;
  // removeAllCharacters: () => void;
}

export const useCharacterStore = create<CharacterState>()(
  devtools(
    persist(
      (set, get) => ({
        // characters: [],
        charactersSelected: [],
        markCharacters: (characters) => {
          const exist = get().charactersSelected.find((character) => character.id === characters.id);
          if (!exist) {
            set((state) => ({
              charactersSelected: [...state.charactersSelected, characters],
            }));
          } else {
            set((state) => ({
              charactersSelected: [...state.charactersSelected.filter((character) => character.id !== characters.id)],
            }));
          }
        },

        checkCharacter: (id: number) => {
          const characters = get().charactersSelected;
          const exist = characters.find((character) => character.id === id);
          return exist ? true : false;
        },

        clearCharacters: () => set({ charactersSelected: [] }),

        removeCharacters: (list: number[]) => {
          const characters = get().charactersSelected;
          const newCharacters = characters.filter((character) => !list.includes(character.id));
          set({ charactersSelected: newCharacters });
        },
        // checkCharacter: (id: number, name: string) => {
        //   const characters = get().characters;
        //   const exist = characters.find((character) => character.id === id);
        //   if (!exist) {
        //     set((state) => ({
        //       characters: [...state.characters, { id, name }],
        //     }));
        //   } else {
        //     set((state) => ({
        //       characters: [...state.characters.filter((character) => character.id !== id)],
        //     }));
        //   }

        //   return !exist;
        // },

        // increaseCharacters: (id: number, name: string) =>
        //   set((state) => ({
        //     characters: [...state.characters, { id, name }],
        //   })),

        // increasePopulation: () =>
        //   set((state) => ({
        //     characters: [
        //       ...state.characters,
        //       { id: state.characters.length + 1, name: `Rick Sanchez #${state.characters.length + 1}` },
        //     ],
        //   })),

        // removeAllCharacters: () => set({ characters: [] }),
      }),
      {
        name: 'rickandmorty-store',
      }
    )
  )
);
