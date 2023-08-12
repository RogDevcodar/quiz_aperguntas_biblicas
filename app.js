//Referenciamento do formulário
const form = document.querySelector('.form-container');

//Referenciamento da div da score
const divScore = document.querySelector('.divScore');

//Referenciamento do segundo parágrafo da popup
const messagePoints = document.querySelector('.message-points');
//Referenciamento do terceiro parágrafo das respostas da popup
const paragraphRespostas = document.querySelector('.respostas');

//Referenciamento da tela de fundo acizentada da popup
const section = document.querySelector('.background-popup');

//Referenciamento do botão de popup
const buttonPopup = document.querySelector('.button-popup');

//Array com as respostas corretas
const arrayAnswersCorrect = ['B', 'A', 'D', 'B', 'B', 'B', 'A', 'A', 'D', 'A'];

//Evento de submit do botão
form.addEventListener('submit', event => {
    event.preventDefault(); //Evita que a página seja carregada ao clicar no botão.
    scrollTo(0, 0);        //Ao clicar no botão a página retorna ao eixo x(0) e y(0).
    

//Consts contendo as mensagens que avalia as respostas do usuário.
console.log(form.flexRadioDefault1.value);

    //Array com os checkeds dos inputs clicados pelo usuário.
    const arrayCheckedUsers = [
        form.flexRadioDefault1.value,
        form.flexRadioDefault2.value,
        form.flexRadioDefault3.value,
        form.flexRadioDefault4.value,
        form.flexRadioDefault5.value, 
        form.flexRadioDefault6.value, 
        form.flexRadioDefault7.value, 
        form.flexRadioDefault8.value, 
        form.flexRadioDefault9.value, 
        form.flexRadioDefault10.value];

//lets do contador da pontuação.
    let score = 0;
//lets do contador da animação da pontuação.
    let countPoints = 0;    

//Const referente ao forEach que itera pelo array 'arrayCheckedUsers'.  
const sumScore = (arrayCheckedUser, index) => {
    if (arrayCheckedUser === arrayAnswersCorrect[index]) {
        score += 10;
    }
}
//forEach da const sumScore
arrayCheckedUsers.forEach(sumScore)

//Ao clicar no submit a classe d-none é removida para o score ser exibido na popup.
section.classList.remove('d-none');
paragraphRespostas.innerHTML = `<b>Respostas:</b> <b>1.</b> b) | <b>2.</b> a) | <b>3.</b> d) | <b>4.</b> b) | <b>5.</b> b) | <b>6.</b> b) | <b>7.</b> a) | <b>8.</b> a) | <b>9.</b> d) | <b>10.</b> a)`;

// Animação da pontuação do quiz
    const timerCount = setInterval(() => {
                   
        if (countPoints === score) {
        clearInterval(timerCount); // Para a animação ao atingir a pontuação do usuário.
    }
        divScore.querySelector('span').textContent = `${countPoints}%`;
        countPoints++;
    },10)  

//Consts da condicional de avaliação das respostas
const smallerOrEqualThirty = score <= 30;
const bigThirtySmallerSixty = score > 30 && score <= 60;
const bigSixtySmallerNinety = score > 60 && score <= 90;
const bigNinetySmallerHundred = score > 90 && score <= 100;

//Condicional de avaliação das respostas
    if (smallerOrEqualThirty) {
       messagePoints.textContent = 'Precisa estudar mais! Mas com esforço você consegue.'
    }   else if (bigThirtySmallerSixty) {
        messagePoints.textContent = 'Não está mal, mas ainda há espaço para melhorar.'
    }   else if (bigSixtySmallerNinety) {
        messagePoints.textContent = 'Muito bem! Você tem um bom conhecimento geral.'
    }   else if (bigNinetySmallerHundred){
        messagePoints.textContent = 'Parabéns! Você é um especialista em assusntos gerais!'
    }
});

// Evento de  click que fecha a popup.
buttonPopup.addEventListener('click', () => {

    section.classList.add('d-none');
})






