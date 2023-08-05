const form = document.querySelector('.form-container');
const divScore = document.querySelector('.divScore');
const messagePoints = document.querySelector('.message-points');
const section = document.querySelector('.background-popup');
const buttonPopup = document.querySelector('.button-popup');

const correctAnswers = ['B', 'A', 'D', 'B', 'B', 'B', 'A', 'A', 'D', 'A'];

const getUserAnswers = () => {
  const userAnswers = []
  
  correctAnswers.forEach((_, i) => 
    userAnswers.push(form[`flexRadioDefault${i + 1}`].value))
  
  return userAnswers
}

const getUserScore = userAnswers => {
  let score = 0;
  
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 10;
    }
  })

  return score
}

const getScoreMessage = score => ({
  10: 'Precisa estudar mais! Mas com esforço você consegue.',
  20: 'Precisa estudar mais! Mas com esforço você consegue.',
  30: 'Precisa estudar mais! Mas com esforço você consegue.',
  40: 'Não está mal, mas ainda há espaço para melhorar.',
  50: 'Não está mal, mas ainda há espaço para melhorar.',
  60: 'Não está mal, mas ainda há espaço para melhorar.',
  70: 'Muito bem! Você tem um bom conhecimento geral.',
  80: 'Muito bem! Você tem um bom conhecimento geral.',
  90: 'Muito bem! Você tem um bom conhecimento geral.'
})[score] || 'Parabéns! Você é um especialista em assuntos gerais!'

const showScore = score => {
  let countPoints = 0;
  
  section.classList.remove('d-none');

  const timerCount = setInterval(() => {
    if (countPoints === score) {
      clearInterval(timerCount);
    }

    divScore.querySelector('span').textContent = `${countPoints}%`;
    countPoints++;
  }, 10)

  const scoreMessage = getScoreMessage(score)
  messagePoints.textContent = scoreMessage
}

const handleFormSubmit = event => {
  event.preventDefault();
  scrollTo(0, 0);

  const userAnswers = getUserAnswers()
  const score = getUserScore(userAnswers)

  showScore(score)
}

form.addEventListener('submit', handleFormSubmit);
buttonPopup.addEventListener('click', () => section.classList.add('d-none'))
