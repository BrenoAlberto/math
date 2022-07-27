import { ImproperFraction, MixedFraction } from '../../../../types'

export interface MixedToImproperFractionInterface {
  convert: (mixedFraction: MixedFraction) => ImproperFraction
}
