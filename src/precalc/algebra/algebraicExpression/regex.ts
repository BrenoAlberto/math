enum SHORTHANDS {
  ALPHA = '[a-zA-Z]',
  ALG_OPS = '[+\\-*/]',
  INTEGER = '(-)?\\d',
  DECIMAL = '(-)?(\\d+(\\.\\d+))',
  EXPONENT = '[\\^](-)?'
}

export class AlgExpRegex {
  private readonly MONOMIAL_STR = '(INTEGER)?(ALPHA)+((EXPONENT)?\\d(ALPHA)?)?'

  /**
   * @description Examples of monomial expressions include 3x^4, 3xy, 3x, 8y, etc.
   * @returns {RegExp}
   */
  public makeMonominalRegex = (): RegExp => {
    const monomialRegExpStr = `^${this.MONOMIAL_STR}$`
    return this.parseStrToRegex(monomialRegExpStr)
  }

  /**
   * @description Examples of binomial include 5xy+8, xyz+x^3, etc.
   * @returns {RegExp}
   */
  public makeBinomialRegex = (): RegExp => {
    const binomialRegExpStr = `^${this.MONOMIAL_STR}(ALG_OPS)(INTEGER)?(ALPHA)?((EXPONENT)?\\d(ALPHA)?)?$`
    return this.parseStrToRegex(binomialRegExpStr)
  }

  /**
   * @description Examples of numeric expressions are 10+5, 15÷2, etc
   * @returns {RegExp}
   */
  public makeNumericRegex = (): RegExp => {
    const numericRegExpStr = '^(DECIMAL?)((ALG_OPS|EXPONENT)?(INTEGER?))*$'
    return this.parseStrToRegex(numericRegExpStr)
  }

  private readonly parseStrToRegex = (str: string): RegExp => {
    for (const shorthand of Object.keys(SHORTHANDS)) {
      if (str.includes(shorthand)) {
        str = str.replace(new RegExp(shorthand, 'g'), SHORTHANDS[shorthand])
      }
    }
    return new RegExp(str)
  }
}
