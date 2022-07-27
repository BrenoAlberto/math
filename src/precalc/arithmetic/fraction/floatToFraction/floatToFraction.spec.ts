import { FloatToFraction } from './floatToFraction'

describe('FloatToFraction', () => {
  test('Should convert float to fraction correctly', async () => {
    const sut = new FloatToFraction()
    const result = sut.convert(0.666666667)
    expect(result).toEqual({
      numerator: 2,
      denominator: 3
    })
  })
})
