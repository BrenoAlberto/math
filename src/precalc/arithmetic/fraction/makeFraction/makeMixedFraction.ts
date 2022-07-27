import { MixedFraction } from '../../../../types'

export = (wholeNumber: number, numerator: number, denominator: number): MixedFraction => ({
  wholeNumber,
  fraction: {
    numerator,
    denominator
  }
})
