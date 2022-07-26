import { AlgebraicExpressionService } from './algebraicExpression'

const numericExpressionsExamples = [
  {
    str: '1',
    numOfTerms: 1
  },
  {
    str: '1 / 2',
    numOfTerms: 2
  },
  {
    str: '1 / -5 + 8',
    numOfTerms: 3
  },
  {
    str: '1^5',
    numOfTerms: 1
  },
  {
    str: '1^5 / 2^5',
    numOfTerms: 2
  }
]

const monomialExpExamples = [
  {
    str: 'x',
    numOfTerms: 1
  },
  {
    str: '5x^2',
    numOfTerms: 1
  },
  {
    str: 'p^3q',
    numOfTerms: 1
  },
  {
    str: '-6ty',
    numOfTerms: 1
  }
]

describe('AlgebraicExpressionService', () => {
  test('Should detect numeric expressions correctly', async () => {
    const sut = new AlgebraicExpressionService()
    for (const numericExp of numericExpressionsExamples) {
      const result = sut.getExpressionType(numericExp.str)
      expect(result).toBe('numeric')
    }
  })

  test('Should detect numeric expressions number of terms correctly', async () => {
    const sut = new AlgebraicExpressionService()
    for (const numericExp of numericExpressionsExamples) {
      const result = sut.getNumOfTerms(numericExp.str)
      expect(result).toBe(numericExp.numOfTerms)
    }
  })

  test('Should detect monomial expressions correctly', async () => {
    const sut = new AlgebraicExpressionService()
    for (const monomialExp of monomialExpExamples) {
      const result = sut.getExpressionType(monomialExp.str)
      expect(result).toBe('monomial')
    }
  })

  test('Should detect monomial expressions number of terms correctly', async () => {
    const sut = new AlgebraicExpressionService()
    for (const monomialExp of monomialExpExamples) {
      const result = sut.getNumOfTerms(monomialExp.str)
      expect(result).toBe(monomialExp.numOfTerms)
    }
  })
})
