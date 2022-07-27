import { GreatestCommonDivisorInterface } from './greatestCommonDivisor.interface'

export class GreatestCommonDivisor implements GreatestCommonDivisorInterface {
  public compute (a: number, b: number): number {
    if (b === 0) {
      return a
    }
    return this.compute(b, a % b)
  }
}
