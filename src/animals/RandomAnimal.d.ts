declare module 'RandomAnimal'
export interface Animal {
  group: AnimalGroup
  color: string
}

type NonHumanMammalSpecies = 'horse' | 'dolphin' | 'chimp'
type HumanMammalSpecies = 'human'

declare enum MammalLocomotion {
  'terrestrial',
  'aquatic'
}
export interface Mammal extends Animal {
  species: NonHumanMammalSpecies | HumanMammalSpecies
  locomotion: MammalLocomotion
}

export interface Bird extends Animal {
  species: 'ostrich' | ' duck' | 'penguin'
  wingspan: number
  aquatic: boolean
  flying: boolean
}

type AnimalGroup = 'bird' | 'mammal' | 'reptile' | 'fish'

/* BUILD OUT THE ANIMAL MODELS HERE */

export namespace RandomAnimal {
  function get(): Animal
}
