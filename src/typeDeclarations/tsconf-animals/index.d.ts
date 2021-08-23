declare module 'tsconf-animals' {
  export class RandomAnimal {
    static get(): Animal;
  }

  /* FILL OUT THE DECLARATIONS BELOW*/

  interface Mammal extends Animal {

  }

  interface Reptile extends Animal {

  }

  interface Fish extends Animal {

  }

  interface Bird extends Animal {

  }

  export interface Animal {
    group: string;
  }
}
