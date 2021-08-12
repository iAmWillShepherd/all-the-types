declare module 'lodash' {
  function chunk<T>(array: T[], size?: number): T[]
  function partition<T>(array: T[], predicate?: (p: T) => boolean): [T[], T[]]
  function uniq<T extends number>(array: T[]): Set<T>
  function map<T, K>(array: T[], iteratee?: (x: T) => K): K[]
  function filter<T>(array: T[], predicate?: (x: T) => boolean): T[]
}
