import { ICharacter } from '@/rickandmorty/interfaces/character.interface';
import {
  BotIcon,
  BotMessageSquareIcon,
  CatIcon,
  CircleIcon,
  EclipseIcon,
  FingerprintIcon,
  LocateOffIcon,
  MarsIcon,
  NonBinaryIcon,
  OrigamiIcon,
  RadiationIcon,
  SirenIcon,
  SkullIcon,
  SmileIcon,
  SnailIcon,
  UserIcon,
  VenetianMaskIcon,
  VenusIcon,
} from 'lucide-react';

export const getStatusIcon = (status: ICharacter['status']) => {
  const statusIcons = {
    Alive: SmileIcon,
    Dead: SkullIcon,
    unknown: VenetianMaskIcon,
  };

  return statusIcons[status] || CircleIcon;
};

export const getSpeciesIcon = (species: ICharacter['species']) => {
  const speciesIcons = {
    Human: UserIcon,
    Alien: RadiationIcon,
    Animal: CatIcon,
    'Mythological Creature': OrigamiIcon,
    Humanoid: FingerprintIcon,
    Disease: LocateOffIcon,
    Robot: BotIcon,
    Cronenberg: BotMessageSquareIcon,
    Poopybutthole: SirenIcon,
    Parasite: SnailIcon,
    Planet: EclipseIcon,
    unknown: VenetianMaskIcon,
  };

  return speciesIcons[species] || CircleIcon;
};

export const getGenderIcon = (gender: ICharacter['gender']) => {
  const speciesIcons = {
    Female: VenusIcon,
    Male: MarsIcon,
    Genderless: NonBinaryIcon,
    unknown: VenetianMaskIcon,
  };

  return speciesIcons[gender] || CircleIcon;
};
