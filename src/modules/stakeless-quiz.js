import Decimal from 'decimal.js'
import {List} from 'immutable'

export const getTotalResistance = (resistors, selected) => {
  const all = List(resistors)
  const selectedIndex = all.findKey(r => r === selected)
  if (selectedIndex < 0) {
    throw new Error('selected R not found', selected)
  }
  const accumulate = (prev, r) => new Decimal(1 / r).add(prev).toNumber() // adding previous R + 1/Rn
  const remain = all.remove(selectedIndex) // exclude selected R
  return remain.reduce(accumulate, selected) // sum [n: 1/Rn for n in remain] + selected
}

export const getResistanceList = (resistors) => {
  return resistors.map(r => getTotalResistance(resistors, r))
}

export const max = (values) => values.reduce((prev, value) => {
  return new Decimal(value).greaterThan(prev) ? value : prev
})

export const min = (values) => values.reduce((prev, value) => {
  return new Decimal(value).lessThan(prev) ? value : prev
})
