export class Matrix {

  matrix: number[][]

  constructor(matrixString: string) {
    const rows = matrixString.split("\n").map((row) => {
      return row.split(" ").map((value) => {
        return parseInt(value)
      })
    })
    this.matrix = rows
  }

  get rows(): number[][] {
    return this.matrix

  }

  get columns(): number[][] {
    let matrix = this.rows
    let coluns: number[][] = [];
    for (let i: number = 0; i < matrix[0].length; i++) {
      coluns[i] = matrix.map(x => x[i])
    }
    return coluns
  }
}
