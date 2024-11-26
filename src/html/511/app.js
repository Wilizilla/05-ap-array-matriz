
const A = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
];

const B = [
    [8, 7],
    [6, 5],
    [4, 3],
    [2, 1]
];

console.log("Matriz A");
console.table(A);
console.log("Matriz B");
console.table(B);

const C = [];

// Soma das matrizes 
for (let i = 0; i < 4; i++) {
    C[i] = []; // 
    for (let j = 0; j < 2; j++) {
        C[i][j] = A[i][j] + B[i][j];
    }
}

console.log("Matriz C (soma de A e B):");
console.table(C);
