# Typescript Declaration Files

TypeScript declaration files are used to declare the types of variables, functions, classes, etc. in a TypeScript program. In order to write TypeScript declaration files, you must first understand the basic types of TypeScript. As such, this workshop will start with a primer on the type system before getting into the details of writing declaration files.

## Basic Types

### String

Strings in TypeScript are the same as strings in JavaScript: they enable you to represent textual data. You can use single quotes or double quotes to create strings.

###### Single quoted strings

```ts
const str = 'Single quote string'
```

###### Double quoted strings

```ts
const str = "Double quote string"
```

###### Explicit anotation

The type anontation is not required as it is implied by the quotes. You can explicitly specify the type of a string using the `string` keyword.

```ts
const str: string = 'Explicitly typed'
```

### Number

Numbers in TypeScript are the same as numbers in JavaScript: they enable you to represent floating point numbers. Numbers can either be typed as `number` or `bigint`.

###### Number

Implicitly typed
```ts
const n = 10
```

Explicitly typed
```ts
const n: number = 10
```

###### BigInt

```ts
const bigN = 50n
```
