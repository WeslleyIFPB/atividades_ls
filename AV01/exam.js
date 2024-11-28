export class Exam {
  constructor(correctAnswers, weights) {
    this.correctAnswers = correctAnswers; 
    this.weights = weights;                
    this.exams = [];                   
  }

  // Adicionar um aluno com suas respostas
  add(studentData) {
    let score = 0;

    // Calculando a pontuação do aluno
    for (let question in studentData.values) {
      if (studentData.values[question] === this.correctAnswers.values[question]) {
        score += this.weights[question];  // Soma o peso se a resposta estiver certa
      }
    }

    // Armazena as respostas e a pontuação do aluno
    this.exams.push({
      student: studentData.student,
      score: score,
    });
  }

  // Média das pontuações dos alunos
  avg() {
    let totalScore = 0;

    for (let student of this.exams) {
      totalScore += student.score;  // Soma todas as pontuações
    }

    return totalScore / this.exams.length;  // Retorna a média
  }

  // Menor pontuação
  min() {
    if (this.exams.length === 0) return null;

    let minScore = this.exams[0].score;
    for (let student of this.exams) {
      if (student.score < minScore) {
        minScore = student.score;
      }
    }

    return minScore;
  }

  // Maior pontuação
  max() {
    if (this.exams.length === 0) return null;

    let maxScore = this.exams[0].score;
    for (let student of this.exams) {
      if (student.score > maxScore) {
        maxScore = student.score;
      }
    }

    return maxScore;
  }

  // Pontuação abaixo de um valor
  lt(value) {
    return this.exams.filter(student => student.score < value).map(student => student.score);
  }

  // Pontuação acima de um valor
  gt(value) {
    return this.exams.filter(student => student.score > value).map(student => student.score);
  }
}
