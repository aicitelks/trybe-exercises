let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];

let estadosSelect = document.querySelector('#selectEstado');

function preencheEstados() {
  for (let i = 0; i < estados.length; i += 1) {
    let novaOpcao = document.createElement('option');
    novaOpcao.innerText = estados[i];
    estadosSelect.appendChild(novaOpcao);
  }
}
preencheEstados();


/**
 * IMPLEMENTAR
 * 
 * Data de início - Texto

    Verificar o formato da data dd/mm/aaaa .
    O dia deve ser > 0 e <= 31.
    O mês deve ser > 0 e <= 12.
    O ano não pode ser negativo.
    Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada. 

E por último
Logo abaixo do formulário, crie um botão que:

    Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit
    Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
    Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
    Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.
 */