import makeFraction from '../makeFraction/makeFraction'
import makeMixedFraction from '../makeFraction/makeMixedFraction'
import { MixedToImproperFraction } from './mixedToImproperFraction'
import { MixedToImproperFractionInterface } from './mixedToImproperFraction.interface'

const makeSut = (): MixedToImproperFractionInterface => {
  const sut = new MixedToImproperFraction()
  return sut
}

describe('MixedToImproperFraction', () => {
  test('Should convert mixed fraction to improper fraction correctly', async () => {
    const sut = makeSut()
    const result = sut.convert(makeMixedFraction(2, 1, 7))
    expect(result).toEqual(makeFraction(15, 7))
  })
})
