import F from 'fp-ts/function'
import {logger} from '../logger'

const plus1 = (num: number): number => {
  return num + 1
}

const multiple2 = (num: number): number => {
  return num * 2
}

const calculate = F.pipe(
  1,
  plus1,
  multiple2
)

logger({
  title: "calculate with pipe",
  value: calculate
})
