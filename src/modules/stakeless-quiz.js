import BigNumber from 'bignumber.js'
import {List} from 'immutable'

export const getTotalResistance = function (resistors, selectedR) {
  const allR = List(resistors)
  const index = allR.findKey(r => r === selectedR)
  if (index < 0) {
    throw new Error('selected R not found', selectedR)
  }
  const sumOfParallelR = (prev, r) => new BigNumber(1 / r).add(prev).toNumber() // adding previous R + 1/Rn
  const remainingR = allR.remove(index) // exclude selected R
  return remainingR.reduce(sumOfParallelR, selectedR) // sum [n: 1/Rn for n in remain] + selected
}

export const getResistanceList = function (resistors) {
  return resistors.map(r => getTotalResistance(resistors, r))
}

export const max = function (values) {
  const whichIsGreater = (a, b) => (a > b) ? a : b // get greater value
  return values.reduce(whichIsGreater)
}

export const min = function (values) {
  const whichIsLesser = (a, b) => (a < b) ? a : b // get lesser value
  return values.reduce(whichIsLesser)
}
