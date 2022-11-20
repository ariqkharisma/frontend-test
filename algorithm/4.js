function substractDiagonalMatrix(matrix) {
    let firstDiagonalCounter = 0;
    let secondDiagonalCounter = 0;
    let firstDiagonalIndex = 0
    let secondDiagonalIndex = matrix.length - 1;
    for (m of matrix) {
        firstDiagonalCounter += m[firstDiagonalIndex];
        secondDiagonalCounter += m[secondDiagonalIndex];
        firstDiagonalIndex++;
        secondDiagonalIndex--;
    }
    console.log(Math.abs(firstDiagonalCounter - secondDiagonalCounter));
}

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
const matrix1 = [[1, 2, 0, 5], [4, 5, 6, 2], [7, 8, 9, 3], [7, 8, 9, 3]]
substractDiagonalMatrix(matrix)
substractDiagonalMatrix(matrix1)