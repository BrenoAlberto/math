export interface AlgebraicExpressionInterface {
  getExpressionType: (expression: string) => string
  getNumOfTerms: (expression: string) => number
}
