
//1.  Rotate a Matrix by 90 Degrees :Given a 2D array (matrix), write a program to rotate the matrix by 90 degrees clockwise.

function rotateMatrix(matrix) {
    // Transpose the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse each row
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

    return matrix;
}
// [   [ 7, 4, 1 ],
//     [ 8, 5, 2 ], 
//     [ 9, 6, 3 ] ]

const Matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedMatrix = rotateMatrix(Matrix);
console.log(rotatedMatrix);
