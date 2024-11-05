
    // Variáveis
    let seq01 = [1,2,3,4,5,6,7,8,9,10];
    let pares = [];
    let impares = [];
    let size = (seq01.length-1);
    console.log('indices da array: ' + size);
    
    // Laço
   for (let i = 0; i <= size; i++ ){ 
    if (seq01[i] % 2 == 0){
        pares.push(seq01[i]);
    } else {
        impares.push(impares[i]);
    }
   };
console.log('A array original é: ' + seq01);
console.log('Os números pares são: ' + pares);
