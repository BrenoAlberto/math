import { GreatestCommonDivisor } from '../greatestCommonDivisor/greatestCommonDivisor'
import { LowestCommonMultiple } from './lowestComonMultiple'
import { LowestCommonMultipleInterface } from './lowestComonMultiple.interface'

const makeSut = (): LowestCommonMultipleInterface => {
  const greatestCommonDivisor = new GreatestCommonDivisor()
  const sut = new LowestCommonMultiple(greatestCommonDivisor)
  return sut
}

describe('LowestCommonMultiple', () => {
  test('Should compute LCM correclty', async () => {
    const sut = makeSut()
    const result = sut.compute(21, 6)
    expect(result).toBe(42)
  })

  test('Should compute LCM with many numbers correclty', async () => {
    const sut = makeSut()
    const result = sut.computeMany(5, 6, 8)
    expect(result).toBe(120)
  })
})
