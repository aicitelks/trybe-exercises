// OBJETOS E FOR/IN
// Usando o objeto abaixo, faça os exercícios a seguir: 

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

/*
  Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
    | Valor esperado no console: Bem-vinda, Margarida

  Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
    | Valor esperado no console:

    {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim'
    };
*/
console.log('');
console.log('EXERCÍCIO 1');

console.log('Bem-vinda, ' + info.personagem);

console.log('');
console.log('EXERCÍCIO 2');

info['recorrente'] = 'Sim';

for (let i in info) {
    console.log(i + ':', info[i]);
}

/*  
    Faça um for/in que mostre todas as chaves do objeto.

    Valor esperado no console:
        personagem
        origem
        nota
        recorrente
*/
console.log('');
console.log('EXERCÍCIO 3');

for (let i in info) {
    console.log(i);
}

/*
    Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

    Valor esperado no console:
        Margarida
        Pato Donald
        Namorada do personagem principal nos quadrinhos do Pato Donald
        Sim
*/
console.log('');
console.log('EXERCÍCIO 4');

for (let i in info) {
    console.log(info[i]);
}

/*
    Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro 
    e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
    
    Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

    Valor esperado no console:

        Margarida e Tio Patinhas
        Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
        Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
        Ambos recorrentes // Atenção para essa última linha!
*/
console.log('');
console.log('EXERCÍCIO 5');

let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

/*
 * let verificaRecorrencia = 'Não são recorrentes';
 * if(info.recorrente === infoPatinhas.recorrente) {
 *      verificaRecorrencia = 'Ambos recorrentes';
 * };
*/

/* O 'i' é a chave e o FOR vai percorrer todo o objeto 'info' */
for (let i in info) {
/* 
 *   <Início da consulta ao gabarito para resolução deste trecho:
 * 
 *   Código original do gabarito
 *   if (info[i] === info.recorrente && info[i] === 'Sim' && infoPatinhas[i] === 'Sim') {
*/
    if (i === 'recorrente' && info[i] === 'Sim' && infoPatinhas[i] === 'Sim') {    
        //(código teste) console.log('info[i]: ' + info[i]);
        //(código teste) console.log('info.recorrente: ' + info.recorrente);
        console.log('Ambos recorrentes');
    } else {
//  >Fim da consulta ao gabarito.
        console.log(info[i] + ' e ' + infoPatinhas[i]);
    }
}

//console.log(verificaRecorrencia); 