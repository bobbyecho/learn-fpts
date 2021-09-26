import * as O from 'fp-ts/lib/Option'
import * as f from 'fp-ts/lib/function'
import {logger} from '../logger';

type guessSomething<T> = (word: T) => O.Option<T>

const sayHi = (word: string): string => {
  return word
}

const matchIt: guessSomething<string> = (word: string) => {
  switch (word) {
    case 'Bob':
    case 'Echo':
      return O.some(sayHi(word))
    default:
      return O.none
  }
}

/**
 * example with pipe and fold
 */
const resultWithPipe = f.pipe(
  "Bob",
  matchIt,
  O.fold(
    () => 'There is no word in dictionary',
    (result: string) => result
  )
)
logger({ title: "result with pipe and fold", value: resultWithPipe })

/**
 * example only with fold
 */
const resultWithFold = O.fold(
  () => 'There is no word in dictionary',
  (result: string) => result
)(matchIt('Hehe'))
logger({ title: "result with fold", value: resultWithFold })

/**
 * example with toNullable
 */
const resultWithToNullable = O.toNullable(matchIt('Adib'))
logger({ title: "result with toNullable", value: resultWithToNullable })

/**
 * example with toUndefined
 */
const resultWithToUndefined = O.toUndefined(matchIt('Adib'))
logger({ title: "result with toUndefined", value: resultWithToUndefined })

/**
 * example with getOrElse (fallback to default value if not found)
 */
const resultWithGetOrElse = O.getOrElse(() => 'There is no word in dictionary')(matchIt('Adib'))
logger({ title: "result with getOrElse", value: resultWithGetOrElse })
