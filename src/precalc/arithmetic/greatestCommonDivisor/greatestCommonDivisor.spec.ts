import { GreatestCommonDivisor } from './greatestCommonDivisor'

describe('GreatestCommonDivisor', () => {
  test('Should compute GCD correclty', async () => {
    const sut = new GreatestCommonDivisor()
    const result = sut.compute(1071, 462)
    expect(result).toBe(21)
  })
})
