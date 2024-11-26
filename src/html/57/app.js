// Objeto com nomes de alunos como chaves e notas fixas como valores
const alunos = {
    "Ana": 8.5,
    "Bruno": 4.2,
    "Carlos": 6.8,
    "Diana": 7.0,
    "Eduardo": 3.5,
    "Fernanda": 9.0,
    "Gabriel": 2.8,
    "Heloísa": 5.5,
    "Igor": 4.9,
    "Juliana": 6.1
};
console.table(alunos);

// Exibindo alunos com nota maior ou igual a 5
console.log("Alunos com nota maior ou igual a 5:");
for (const [nome, nota] of Object.entries(alunos)) {
    if (nota >= 5) {
        console.log(`${nome}: ${nota.toFixed(1)}`);
    }
}
