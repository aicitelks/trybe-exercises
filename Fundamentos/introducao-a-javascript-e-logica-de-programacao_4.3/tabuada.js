let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tabuada = [];

console.log('TABUADA DO 1');

//para percorrer o array numeros
for (let i = 0; i < 10; i++) {
    //para executar o cálculo
    for (let t = 1; t <= 10; t++) {
        tabuada[t] = numeros[i] * t;
        console.log(numeros[i] + ' x ' + t + ' = ' + tabuada[t]);
    };
    if (i < 9) {
        console.log('');
        console.log('TABUADA DO ' + numeros[i+1]);
    }
};