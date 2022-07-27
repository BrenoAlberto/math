import { AlgebraicExpressionInterface } from './algebraicExpression.interface'
import { AlgExpRegex } from './regex'

enum expressionTypes {
  NUMERIC = 'numeric',
  VARIABLE = 'variable',
  MONOMIAL = 'monomial',
  BINOMIAL = 'binomial',
  POLYNOMIAL = 'polynomial'
}

export class AlgebraicExpression implements AlgebraicExpressionInterface {
  constructor (
    private readonly algExpRegex: AlgExpRegex
  ) {}

  private readonly operators: string[] = ['+', '-', '*', '/', '^']

  public getExpressionType (expression: string): string {
    if (this.isNumericExpression(expression)) {
      return expressionTypes.NUMERIC
    } else if (this.isMonomialExpression(expression)) {
      return expressionTypes.MONOMIAL
    } else if (this.isBinomialExpression(expression)) {
      return expressionTypes.BINOMIAL
    }

    return 'unknown'
  }

  private removeSpaces (expression: string): string {
    return expression.replace(/\s/g, '')
  }

  private removeNegation (expression: string): string {
    let expWithoutNegation = expression
    if (expWithoutNegation.startsWith('-')) { expWithoutNegation = expWithoutNegation.substring(1) }

    const findNegationProceededByOperator = /[-+/*^](-)/g
    if (findNegationProceededByOperator.test(expWithoutNegation)) {
      expWithoutNegation = expWithoutNegation.replace(findNegationProceededByOperator, '$1')
    }

    return expWithoutNegation
  }

  public getNumOfTerms (expression: string): number {
    const expWithoutSpaces = this.removeSpaces(expression)
    const expWithoutNegation = this.removeNegation(expWithoutSpaces)
    const terms = expWithoutNegation.split(/[-+/*]/)
    return terms.length
  }

  private isNumericExpression (expression: string): boolean {
    const expWithoutSpaces = this.removeSpaces(expression)
    const numericRegExp = this.algExpRegex.makeNumericRegex()
    return numericRegExp.test(expWithoutSpaces)
  }

  private isMonomialExpression (expression: string): boolean {
    const expWithoutSpaces = this.removeSpaces(expression)
    const numOfTerms = this.getNumOfTerms(expWithoutSpaces)
    if (numOfTerms !== 1) return false
    const monomialExpRegExp = this.algExpRegex.makeMonominalRegex()
    return monomialExpRegExp.test(expWithoutSpaces)
  }

  private isBinomialExpression (expression: string): boolean {
    const expWithoutSpaces = this.removeSpaces(expression)
    const numOfTerms = this.getNumOfTerms(expWithoutSpaces)
    if (numOfTerms !== 2) return false
    const binomialExpRegExp = this.algExpRegex.makeBinomialRegex()
    return binomialExpRegExp.test(expWithoutSpaces)
  }
}
