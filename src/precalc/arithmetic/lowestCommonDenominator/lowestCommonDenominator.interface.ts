import { Fraction } from '../../../types'

export interface LowestCommonDenominatorInterface {
  compute: (...fractions: Fraction[]) => number
}
