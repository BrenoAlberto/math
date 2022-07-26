export class AlgebraicExpressionService {
  private readonly operators: string[] = ['+', '-', '*', '/', '^']

  public getExpressionType (expression: string): string {
    const expressionWithoutSpaces = this.removeSpaces(expression)

    if (this.isNumericExpression(expressionWithoutSpaces)) {
      return 'numeric'
    }

    return 'unknown'
  }

  private removeSpaces (expression: string): string {
    return expression.replace(/\s/g, '')
  }

  public isNumericExpression (expression: string): boolean {
    const numericRegExp = /^(\d+(\.\d+)?[-+/*^]?)*$/
    return numericRegExp.test(expression)
  }
}
