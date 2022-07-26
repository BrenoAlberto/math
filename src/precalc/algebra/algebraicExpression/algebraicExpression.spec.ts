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
    str: '1 / 5 + 8',
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
})
