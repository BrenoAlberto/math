export class AlgebraicExpressionService {
  private readonly operators: string[] = ['+', '-', '*', '/', '^']

  public getExpressionType (expression: string): string {
    if (this.isNumericExpression(expression)) {
      return 'numeric'
    } else if (this.isMonomialExpression(expression)) {
      return 'monomial'
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

  public isNumericExpression (expression: string): boolean {
    const expWithoutSpaces = this.removeSpaces(expression)
    const numericRegExp = /^(-)?(\d+(\.\d+)?[-+/*^]?(-)?)*$/
    return numericRegExp.test(expWithoutSpaces)
  }

  public isMonomialExpression (expression: string): boolean {
    const expWithoutSpaces = this.removeSpaces(expression)
    const numOfTerms = this.getNumOfTerms(expWithoutSpaces)
    if (numOfTerms > 1) return false
    const monomialExpRegExp = /^(-)?\d?[a-zA-Z]+([\^](-)?\d?[a-zA-Z]?)?$/
    return monomialExpRegExp.test(expWithoutSpaces)
  }
}
