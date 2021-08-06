declare module 'RandomAnimal'
export interface Animal {
  group: AnimalGroup
}

type AnimalGroup = 'bird' | 'mammal' | 'reptile' | 'fish'

/* BUILD OUT THE ANIMAL MODELS HERE */

export namespace RandomAnimal {
  function get(): Animal
}
