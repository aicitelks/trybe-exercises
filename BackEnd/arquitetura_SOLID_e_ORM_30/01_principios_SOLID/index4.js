/**
 *  Deixamos o nosso código muito melhor de ser lido e testado, o que é ótimo! Mas, ainda assim, o ESLint levanta o alerta para a complexidade cognitiva . Agora ele acusa a função percentageGradesIntoLetters de ser complexa demais. Então vamos dividi-la em partes ainda menores!
 * 
 * Para isso, descreva textualmente o que a função faz e observe os verbos. 
 * 
 * Por exemplo: "A função itera sobre cada pessoa estudante e a cada iteração, itera sobre todas as disciplinas delas. Para cada disciplina ela faz a conversão de porcentagem para letra e ao final monta e retorna o objeto com o nome da pessoa estudante e com suas disciplinas" .
 * 
 * Vemos na nossa descrição quatro verbos! Significa que precisamos dividir nossa função em quatro funções menores? Talvez sim, mas talvez não. Vamos passo a passo para ver o que acontece. 
 * 
 * Primeiro, vamos extrair o verbo faz a conversão : 
 */

/* Apoio para a função `getGradeLetter`, lembraremos disso mais a frente */
const GRADE_DICT = {
  9: 'A',
  8: 'B',
  7: 'C',
  6: 'D',
  1: 'E',
};

const gradeKeys = Object.keys(GRADE_DICT);

/* Função menor para remover o uso excessivo de `if{}else`s */
const getGradeLetter = (gradeNumber) => {
  let letterGrade = 'F';

  for (let i = 0; i < gradeKeys.length; i += 1) {
    if (gradeNumber >= gradeKeys[i]) {
      letterGrade = GRADE_DICT[gradeKeys[i]];
      break;
    }
  }

  return letterGrade;
};

/* Coletar notas */
const getLetterGrades = ({ name, grade }) => ({
  name,
  grade,
  letterGrade: getGradeLetter(grade),
});

/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
  name,
  disciplines: disciplines.map(getLetterGrades),
  school });

/* "Determinar" */
const approvedStudents = ({ school, disciplines }) =>
  disciplines.every(({ grade }) =>
    (school === 'Standard' ? grade >= 0.7 : grade >= 0.8));

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

/* Abaixo temos o exemplo de execução com algumas adições */
const students = [
  {
    name: 'Lee',
    school: 'Standard',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Albus',
    school: 'Hogwarts',
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];

function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

/*
  Vamos exportar também nossa nova função de `Coletar notas` para testes
*/
module.exports = {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};

/**
 *  Essa solução funciona, mas não está boa! Nós tivemos que mudar nossa função para acrescentar o novo comportamento a ela! 
 * O que acontecerá quando surgir uma terceira escola? Talvez uma quarta, quinta, etc?
 * Pois bem! Conforme estabelecemos no início, o que esse princípio nos diz é o seguinte:
 * 
 * | Você deve ser capaz de estender um comportamento de uma função sem modificar seus comportamentos já existentes.
 * 
 * O que se deve buscar fazer é escrever o código de modo que, no futuro, você possa acrescentar comportamentos sem mudar os que já existem .
 * 
 * Siga para o index5.js
*/