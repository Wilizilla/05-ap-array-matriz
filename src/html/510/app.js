// Função para gerar a transposta de uma matriz
function transporMatriz(matriz) {
    const transposta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    return transposta;
}

// matriz  (2x4)
const matrizOriginal = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];

console.log("Matriz (2x4):");
console.table(matrizOriginal);

// matriz  (4x2)
const matrizTransposta = transporMatriz(matrizOriginal);

console.log("Matriz Transposta (4x2):");
console.table(matrizTransposta);
