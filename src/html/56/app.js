const formMain = document.getElementById('form-01');
formMain.addEventListener('submit', function(event) {

    // evita o comportamento padrão do evento submit
    event.preventDefault(); 
    console.log ('prevent default action: success');
    
    // captura os valores
    let capt01 = document.getElementById('form-num01').value;
    let capt02 = document.getElementById('form-num02').value;
    // separa os valores a partir da virgula
    let vetCapt = capt01.split(',');
    
    //limpa o formulário depois de enviar os dados
    document.getElementById('form-num01').value = ("");
    
    // revove os espaços antes e depois dos valores
    vetCapt.map(element => element.trim());
    let vetNum = vetCapt.map(element => Number(element));
    console.log('Array: ' + vetNum);
    console.log('Array length: '+vetNum.length);
    
    // Variáveis
    let result = 0;
    vetNum.forEach(obj => { if (obj == capt02) {
        result += 1;
    }
    
});
// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');
document.getElementById('div-area').innerHTML = ('O número ' + capt02 + ' se repetiu ' + result + '×');
console.log ('print result on html: success');
console.log ('Comparador' + capt02);

});
        