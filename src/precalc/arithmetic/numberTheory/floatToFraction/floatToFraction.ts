type Fraction = [number, number]

export class FloatToFraction {
  /**
  * @description https://en.wikipedia.org/wiki/Stern-Brocot_tree
  */
  public convert (float: number, error = 0.000001): Fraction {
    const [intPart, decimalPart] = this.getIntAndDecimalPart(float)

    if (decimalPart < error) {
      return [intPart, 1]
    } else if (1 - error < decimalPart) {
      return [intPart + 1, 1]
    }

    let lowerNumerator = 0
    let lowerDenominator = 1
    let upperNumerator = 1
    let upperDenominator = 1

    while (true) {
      const middleNumerator = lowerNumerator + upperNumerator
      const middleDenominator = lowerDenominator + upperDenominator

      if (middleDenominator * (decimalPart + error) < middleNumerator) {
        upperNumerator = middleNumerator
        upperDenominator = middleDenominator
      } else if (middleNumerator < (decimalPart - error) * middleDenominator) {
        lowerNumerator = middleNumerator
        lowerDenominator = middleDenominator
      } else {
        return [intPart * middleDenominator + middleNumerator, middleDenominator]
      }
    }
  }

  private getIntAndDecimalPart (float: number): [number, number] {
    const intPart = Math.floor(float)
    const decimalPart = float - intPart
    return [intPart, decimalPart]
  }
}
