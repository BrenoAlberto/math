import { GreatestCommonDivisorInterface } from '../greatestCommonDivisor/greatestCommonDivisor.interface'
import { LowestCommonMultipleInterface } from './lowestComonMultiple.interface'

export class LowestCommonMultiple implements LowestCommonMultipleInterface {
  constructor (
    private readonly greatestCommonDivisor: GreatestCommonDivisorInterface
  ) {}

  public compute (a: number, b: number): number {
    return a * b / this.greatestCommonDivisor.compute(a, b)
  }
}
