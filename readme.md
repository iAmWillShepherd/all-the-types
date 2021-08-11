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
const str = "Double quote string"
```

```ts
const str: string = "Double quote string"
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
  property: "value"
}
```

```ts
const obj: object = {
  property: "value"
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
const getUser = (id: string): {
  id: string,
  lastLogin: Date,
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
function log(message: string, options?: { prettyPrint: boolean}) {
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
