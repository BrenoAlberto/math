export interface LowestCommonMultipleInterface {
  compute: (a: number, b: number) => number
  computeMany: (...numbers: number[]) => number
}
