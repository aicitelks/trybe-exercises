let statusCarro = 'desligado';
let aceleracao = 0;
let rotacaoVolante = 0;

function ligarDesligar(){
    if(statusCarro === 'desligado'){
        statusCarro = 'Carro ligado';
    } else {
        statusCarro = 'Carro desligado';
    }
    return statusCarro;    
}

function acelerar(incremento){
    aceleracao = aceleracao + incremento;

    return 'Acelerando a ' + aceleracao + ' m/s';
}

function frear(decremento){
    aceleracao = aceleracao - decremento;

    return 'Desacelerando para ' + aceleracao + ' m/s';
}

function girarVolante(anguloRotacao){
    rotacaoVolante = anguloRotacao;

    return 'Volante rotacionado a ' + rotacaoVolante + ' graus';
}

let func1 = ligarDesligar();
console.log(func1);

let func2 = acelerar(20);
console.log(func2);

let func3 = girarVolante(-45);
console.log(func3);

let func4 = frear(5);
console.log(func4);
