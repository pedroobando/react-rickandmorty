export interface ICharacterList {
  info: IPageInfo;
  results: ICharacter[];
}

export interface IPageInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface ICharacter {
  id: number;
  name: string;
  status: EnumStatus;
  species:
    | 'Human'
    | 'Alien'
    | 'Animal'
    | 'Mythological Creature'
    | 'Humanoid'
    | 'Disease'
    | 'Robot'
    | 'Cronenberg'
    | 'Poopybutthole'
    | 'Parasite'
    | 'Planet'
    | 'unknown';
  type: string;
  gender: EnumGender;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface ILocation {
  name: string;
  url: string;
}

export enum EnumStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export enum EnumGender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  Unknown = 'unknown',
}

// Animal: CatIcon,
// Mythological: OrigamiIcon,
// Humanoid: FingerprintIcon,
// Disease: LocateOffIcon,
// Robot: BotIcon,
// Cronenberg: BotMessageSquareIcon,
// Poopybutthole: SirenIcon,
// Parasite: SnailIcon,
// Planet: EclipseIcon,
// unknown: VenetianMaskIcon,
