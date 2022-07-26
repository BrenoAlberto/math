import { AlgebraicExpressionService } from './algebraicExpression'

const numericExpressionsExamples = [
  '1',
  '1 / 2',
  '1 / 5 + 8',
  '1^5',
  '1^5 / 2^5'
]

describe('AlgebraicExpressionService', () => {
  test('Should detect numeric expressions correctly', async () => {
    const sut = new AlgebraicExpressionService()
    for (const numericExp of numericExpressionsExamples) {
      const result = sut.getExpressionType(numericExp)
      expect(result).toBe('numeric')
    }
  })
})
