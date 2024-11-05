
    // Variáveis
    const alunos = [
        { nome: "Carlos", idade: 18 },
        { nome: "Ana", idade: 35 },
        { nome: "Júlio", idade: 19 },
        { nome: "Fernanda", idade: 22 },
        { nome: "Lucas", idade: 21 },
        { nome: "Mariana", idade: 17 },
        { nome: "Rafael", idade: 23 },
        { nome: "Laura", idade: 20 },
        { nome: "Gabriel", idade: 24 },
        { nome: "Sofia", idade: 19 },
        { nome: "Pedro", idade: 18 },
        { nome: "Bianca", idade: 22 },
        { nome: "Felipe", idade: 21 },
        { nome: "Clara", idade: 17 },
        { nome: "Gustavo", idade: 25 },
        { nome: "Luana", idade: 20 },
        { nome: "Thiago", idade: 23 },
        { nome: "Isabela", idade: 19 },
        { nome: "André", idade: 18 },
        { nome: "Patrícia", idade: 20 },
        { nome: "Matheus", idade: 21 },
        { nome: "Juliana", idade: 22 },
        { nome: "Eduardo", idade: 24 },
        { nome: "Aline", idade: 19 },
        { nome: "Daniel", idade: 17 },
        { nome: "Roberta", idade: 23 },
        { nome: "Felipe", idade: 20 },
        { nome: "Cecília", idade: 21 },
        { nome: "Natália", idade: 19 },
        { nome: "Henrique", idade: 25 },
        { nome: "Tânia", idade: 20 },
        { nome: "Vinícius", idade: 22 },
        { nome: "Marcos", idade: 18 },
        { nome: "Elaine", idade: 23 },
        { nome: "Leonardo", idade: 19 },
        { nome: "Samantha", idade: 24 },
        { nome: "Paulo", idade: 16 },
        { nome: "Rogério", idade: 22 },
        { nome: "Tatiane", idade: 21 },
        { nome: "Erika", idade: 17 },
        { nome: "Bruno", idade: 18 },
    ];
    let size = (alunos.length - 1);
    console.log('Quantidade de alunos: ' + size);
    
    let somaIdade = 0;
    alunos.forEach(obj => somaIdade += obj.idade);
    
    let mediaIdade = somaIdade/size;
    console.log('Média de idade: ' + mediaIdade);
    
    let maiorIdade = 0;
    alunos.forEach(obj => {if (obj.idade >= maiorIdade) {maiorIdade = obj.idade};
    });
    console.log('Maior idade: ' + maiorIdade);
    
    let menorIdade = somaIdade;
    alunos.forEach(obj => {if (obj.idade <= menorIdade) {menorIdade = obj.idade};
    });
    console.log('Menor idade: ' + menorIdade);
    /* let mediaIdade = alunos.map(function()) */