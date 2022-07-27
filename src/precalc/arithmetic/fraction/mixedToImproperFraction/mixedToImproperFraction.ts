import { ImproperFraction, MixedFraction } from '../../../../types'
import makeFraction from '../makeFraction/makeFraction'
import { MixedToImproperFractionInterface } from './mixedToImproperFraction.interface'

export class MixedToImproperFraction implements MixedToImproperFractionInterface {
  public convert = (mixedFraction: MixedFraction): ImproperFraction => {
    const { wholeNumber, fraction } = mixedFraction
    const { numerator, denominator } = fraction

    const newNumerator = numerator + wholeNumber * denominator
    return makeFraction(newNumerator, denominator)
  }
}
