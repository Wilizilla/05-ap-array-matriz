const formMain = document.getElementById('form-01');
formMain.addEventListener('submit', function(event) {

    // evita o comportamento padrão do evento submit
    event.preventDefault(); 
    console.log ('prevent default action: success');
    
    // captura os valores
    let capt = document.getElementById('form-num01').value;
    // separa os valores a partir da virgula
    let vetCapt = capt.split(',');

    //limpa o formulário depois de enviar os dados
    document.getElementById('form-num01').value = ("");

    // revove os espaços antes e depois dos valores
    vetCapt.map(element => element.trim());
    let vetNum = vetCapt.map(element => Number(element));
    console.log('Array: ' + vetNum);
    console.log('Array length: ' + vetNum.length);
    
    // separação em 4x4
    let matVal = [];
    for ( let i = 0; i <= 3; i++){
    matVal.push(vetNum.slice(i * 4, (i + 1) * 4))
}
    // manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');
document.getElementById('div-area').innerHTML = (matVal[0]);
document.getElementById('div-area2').innerHTML = (matVal[1]);
document.getElementById('div-area3').innerHTML = (matVal[2]);
document.getElementById('div-area4').innerHTML = (matVal[3]);
console.log (matVal);
});