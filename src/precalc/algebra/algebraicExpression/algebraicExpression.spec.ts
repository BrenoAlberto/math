
import { AlgebraicExpression } from './algebraicExpression'
import { AlgebraicExpressionInterface } from './algebraicExpression.interface'
import binomialExpressionsMock from './mock/binomialExpressionsMock'
import monomialExpressionsMock from './mock/monomialExpressionsMock'
import numericExpressionsMock from './mock/numericExpressionsMock'
import { AlgExpRegex } from './regex'

const numericExpressionsExamples = numericExpressionsMock()
const monomialExpExamples = monomialExpressionsMock()
const binomialExpExamples = binomialExpressionsMock()

const makeSut = (): AlgebraicExpressionInterface => {
  const algExpRegex = new AlgExpRegex()
  const sut = new AlgebraicExpression(algExpRegex)
  return sut
}

describe('AlgebraicExpression', () => {
  test('Should detect numeric expressions correctly', async () => {
    const sut = makeSut()
    for (const numericExp of numericExpressionsExamples) {
      const result = sut.getExpressionType(numericExp.str)
      expect(result).toBe('numeric')
    }
  })

  // test('Should detect numeric expressions number of terms correctly', async () => {
  //   const sut = new AlgebraicExpression()
  //   for (const numericExp of numericExpressionsExamples) {
  //     const result = sut.getNumOfTerms(numericExp.str)
  //     expect(result).toBe(numericExp.numOfTerms)
  //   }
  // })

  test('Should detect monomial expressions correctly', async () => {
    const sut = makeSut()
    for (const monomialExp of monomialExpExamples) {
      const result = sut.getExpressionType(monomialExp.str)
      expect(result).toBe('monomial')
    }
  })

  // test('Should detect monomial expressions number of terms correctly', async () => {
  //   const sut = new AlgebraicExpression()
  //   for (const monomialExp of monomialExpExamples) {
  //     const result = sut.getNumOfTerms(monomialExp.str)
  //     expect(result).toBe(monomialExp.numOfTerms)
  //   }
  // })

  test('Should detect binomial expressions correctly', async () => {
    const sut = makeSut()
    for (const binomialExp of binomialExpExamples) {
      const result = sut.getExpressionType(binomialExp.str)
      expect(result).toBe('binomial')
    }
  })
})
