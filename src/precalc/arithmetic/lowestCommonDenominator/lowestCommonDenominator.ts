import { Fraction } from '../../../types'
import { LowestCommonMultipleInterface } from '../lowestComonMultiple/lowestComonMultiple.interface'
import { LowestCommonDenominatorInterface } from './lowestCommonDenominator.interface'

export class LowestCommonDenominator implements LowestCommonDenominatorInterface {
  constructor (
    private readonly lowestCommonMultiple: LowestCommonMultipleInterface
  ) {}

  public compute (...fractions: Fraction[]): number {
    const denominators = fractions.map(fraction => fraction.denominator)
    return this.lowestCommonMultiple.computeMany(...denominators)
  }
}
