import { GreatestCommonDivisor } from '../greatestCommonDivisor/greatestCommonDivisor'
import { LowestCommonMultiple } from '../lowestComonMultiple/lowestComonMultiple'
import { FloatToFraction } from '../fraction/floatToFraction/floatToFraction'
import { LowestCommonDenominator } from './lowestCommonDenominator'
import { LowestCommonDenominatorInterface } from './lowestCommonDenominator.interface'

type SutTypes = {
  sut: LowestCommonDenominatorInterface
  floatToFraction: FloatToFraction
}
const makeSut = (): SutTypes => {
  const floatToFraction = new FloatToFraction()
  const greatestCommonDivisor = new GreatestCommonDivisor()
  const lowestCommonMultiple = new LowestCommonMultiple(greatestCommonDivisor)
  const sut = new LowestCommonDenominator(lowestCommonMultiple)
  return {
    sut,
    floatToFraction
  }
}

describe('LowestCommonDenominator', () => {
  test('Should compute LCD correclty', async () => {
    const { sut, floatToFraction } = makeSut()
    const result = sut.compute(
      floatToFraction.convert(0.12),
      floatToFraction.convert(0.06),
      floatToFraction.convert(0.08),
      floatToFraction.convert(0.7)
    )

    expect(result).toBe(50)
  })
})
