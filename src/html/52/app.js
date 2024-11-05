
    // Variáveis
    let seq01 = [10,9,8,7,6,5,4,3,2,1];
    let seq02 = [];
    let size = (seq01.length-1);
    console.log('indices da araay: ' + size);
    
    // Laço
   for (let i = size; i >= 0; i-- ){ 
    seq02.push(seq01[i]);
   };
console.log('Array original: ' + seq01);
console.log('Array reordenada: ' + seq02);
