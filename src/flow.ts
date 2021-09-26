import * as F from 'fp-ts/function'
import {logger} from '../logger'

const toLowerCase = (word: string): string => {
  return word.toLowerCase()
}

const toFirstUpperCaseWord = (word: string): string => {
  const arr = word.split(" ")
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join(" ")
}

const appendWord = (word: string) => (currentWord: string) => {
  return currentWord + word
}

/**
 * example word manipulation with pipe and flow
 */
const wordManipulationPipeAndFlow = F.pipe(
  "HI MY NAME IS BOB",
  F.flow(
    appendWord(", I'M 16 YEARS OLD"),
    appendWord(", I live in tangerang"),
    toLowerCase,
    toFirstUpperCaseWord
  )
)
logger({
  title: "word manipulation pipe and flow",
  value: wordManipulationPipeAndFlow
})

/**
 * example word manipulation only with flow
 */
const wordManipulationFlow = F.flow(
  appendWord(", I'M 16 YEARS OLD"),
  appendWord(", I live in tangerang"),
  toLowerCase,
  toFirstUpperCaseWord
)("HI MY NAME IS BOB")
logger({
  title: "word manipulation only with flow",
  value: wordManipulationFlow
})
