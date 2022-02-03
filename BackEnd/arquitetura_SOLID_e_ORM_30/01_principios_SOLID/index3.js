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
  school,
  disciplines: disciplines.map(getLetterGrades),
});

/* "Determinar" */
const approvedStudents = ({ disciplines }) =>
  disciplines.every(({ grade }) => grade > 0.7);

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

/* Abaixo temos um exemplo de execução */
const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
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