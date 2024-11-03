let i = 0;
let vPrint = [];
for (i = 1; i < 20; i++) {

    if ((i % 2) != 0) {
        console.log('impar: ' + i);
        vPrint.push (i);
        document.getElementById('div-area').innerHTML = (vPrint);
        console.log ('print result on html: success');

    } else {
        console.log('--');
    };   
} 
console.log(vPrint);
