## Table of Contents
- [Typescript Declaration Files](#typescript-declaration-files)
  * [Basic Types](#basic-types)
    + [String](#string)
          + [Single quoted strings](#single-quoted-strings)
          + [Double quoted strings](#double-quoted-strings)
          + [Template literals](#template-literals)
    + [Number](#number)
          + [Number](#number-1)
          + [BigInt](#bigint)
    + [Boolean](#boolean)
    + [Object](#object)
  * [Functions](#functions)
          + [Function declaration](#function-declaration)
        * [Arrow function](#arrow-function)
          + [Type inferencing](#type-inferencing)
  * [Reusable types](#reusable-types)
    + [Type aliasing](#type-aliasing)
          + [Primitive type](#primitive-type)
          + [Complex type](#complex-type)
    + [Interfaces](#interfaces)
          + [Extending an interface](#extending-an-interface)
          + [Type intersections](#type-intersections)
          + [Union types](#union-types)
    + [Optional modifier](#optional-modifier)
          + [Parameter](#parameter)
          + [Property](#property)
- [Workshop Project](#workshop-project)
  * [Let's get started](#let-s-get-started)
  * [Animals Reference](#animals-reference)
    + [`Animal`](#-animal-)
    + [`AnimalGroup`](#-animalgroup-)
    + [`Bird`](#-bird-)
    + [`Fish`](#-fish-)
    + [`Mammal`](#-mammal-)
    + [`Reptile`](#-reptile-)

# Typescript Declaration Files

TypeScript declaration files are used to declare the types of variables, functions, classes, etc. in a TypeScript program. In order to write TypeScript declaration files, you must first understand the basic types of TypeScript. As such, this workshop will start with a primer on the type system before getting into the details of writing declaration files.

## Basic Types

All examples will use implicit typing followed by explicit typing.

### String

Strings in TypeScript are the same as strings in JavaScript: they enable you to represent textual data and are denoted by quotes. You can use single quotes or double quotes to create strings.

###### Single quoted strings

```ts
const str = 'Single quote string'
```

```ts
const str: string = 'Single quote string'
```

###### Double quoted strings

```ts
const str = 'Double quote string'
```

```ts
const str: string = 'Double quote string'
```

###### Template literals

```ts
const str = `4 + 5 = ${4 + 5}`
```

```ts
const str: string = `4 + 5 = ${4 + 5}`
```

### Number

Numbers in TypeScript are the same as numbers in JavaScript: they enable you to represent floating point numbers. Numbers can either be typed as `number` or `bigint`.

###### Number

```ts
const n = 10
```

```ts
const n: number = 10
```

###### BigInt

```ts
const bigN = 50n
```

```ts
const bigN: bigint = 50n
```

### Boolean

Booleans in TypeScript are the same as booleans in JavaScript: they enable you to represent logical values.

```ts
const isTrue = false
```

```ts
const isTrue: boolean = false
```

### Object

Objects are values that contain named property value pairs and denoted by curly braces.

```ts
const obj = {
  property: 'value',
}
```

```ts
const obj: object = {
  property: 'value',
}
```

## Functions

Functions allow you to define code blocks that can be called later. You can define both input and output types for functions.

###### Function declaration

```ts
function add(a: number, b: number): number {
  return a + b
}
```

##### Arrow function

```ts
const add = (a: number, b: number): number => a + b
```

###### Type inferencing

TypeScript infers the return type of the function from the function body.

```ts
function add(a: number, b: number) {
  return a + b
}
```

```ts
const add = (a: number, b: number) => a + b
```

## Reusable types

You can create types that can be reused in multiple places in your code.

### Type aliasing

Type aliases allow you to name a type or assign it a new name. These are useful when you want to reuse a type in multiple places in your code.

###### Primitive type

Sometimes, you may want to refer to a primitive type using nouns in your domain. For example, you may want to refer to a `number` or `string` as `UserId`.

```ts
type UserId = string
```

###### Complex type

Other times, you may want to name a complext type to make your code easier to reason with.

```ts
const getUser = (
  id: string
): {
  id: string
  lastLogin: Date
  socialMediaUrls: string[]
} => {
  //...
}
```

**vs**

```ts
type User = {
  id: string
  lastLogin: Date
  socialMediaUrls: string[]
}

const getUser = (id: UserId): User => {
  //...
}
```

### Interfaces

Interfaces are very similar to type aliases.

```ts
interface User = {
  id: string
  lastLogin: Date
  socialMediaUrls: string[]
}
```

###### Extending an interface

The difference between the two is that interfaces can be extended with additional properties whereas a type alias cannot.

```ts
interface AuthenticatedUser extends User {
  addSocialUrl: (url: string) => void
}
```

###### Type intersections

Although types cannot be extended, you can create a new type from old types to get similar functionality. Note that you cannot extend the type though, only create a new one.

```ts
type AuthenticatedUser = User & {
  addSocialUrl: (url: string) => void
}
```

###### Union types

You can combine multiple types into a single type using union types. This is useful when you want to represent a type that can be one of several types known as _members_

```ts
type APIResponse =
  | {
      success: false
      error: Error
    }
  | {
      success: true
      data: any
    }
```

### Optional modifier

You can mark a property or parameter as optional by adding the `?` modifier. Optionals will have a value of `undefined` if not set.

###### Parameter

```ts
function log(message: string, options?: { prettyPrint: boolean }) {
  //...
}
```

###### Property

```ts
interface User = {
  id: string
  lastLogin?: Date
  socialMediaUrls: string[]
}
```

---

# Workshop Project

The purpose of this project is to help you understand how to write declaration files for Javascript libraries or your own code. As mentioned in the video, this project is a simple CLI that provides information on various animals. The animals are generated randomly via the `tsconf-animals` npm package, henceforth known as the "Animals" library.

The Animals library does not come with any typings. Part of your job in this workshop is to try to add typings for the library. This README will provide you with all the documentation you need to add the correct types.

Furthermore, the workshop makes use of the popular [`lodash`](https://lodash.com/docs/4.17.15) library. Since the `lodash` library does have existing type declarations, make sure not to use them in order to complete the exercise. You can use them as reference if you get stuck or to check your work later.

## Let's get started
1. Clone this repository to your machine
2. Open the files `src/commands/all-the-types.ts` and the `src/typeDeclarations` directory declaration files in a code editor with Typescript support. These are the main files you will be working with.
3. Begin. Your goal here is to fix all Typescript warnings and get rid of all uses of the `any` keyword.

## Animals Reference

### `Animal`
All animals should be classified by what animal `group` they belong to as well as what `color` they are.

### `AnimalGroup`
There are four animal groups: mammal, bird, fish, and reptile.

### `Bird`
There are four bird species: ostrich, penguin, owl, and duck. All birds also have a `wingspan` measurement, and have `aquatic` and `flying` properties.

### `Fish`
There are four fish species: goldfish, salmon, shark, and bass. The fish have a `waterType` property (salt or fresh). Also, the fish have a `size` property (inches from head to tail).

### `Mammal`
There are four mammal species: human, horse, dolphin, chimpanzee. Each mammal has a `locomotion` property: terrestrial, aquatic, or unknown.

### `Reptile`
There are four reptile species: crocodile, tortoise, cobra, and gecko. Each reptile has a `legs`, `teeth`, and `fangs` property -- all of which denote whether or not the animal has those things.
