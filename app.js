const divClosedPopup = document.querySelector('.closed-popup');
const divBackgroundEsmaecido = document.querySelector('.backgroundEsmaecido');
const popupResultP = document.querySelector('.popup-result');
const popupAvaliacao = document.querySelector('.popup-avaliacao');


//RESPOSTAS CORRETAS
const arrayResposts = ['C', 'D', 'C', 'B', 'D', 'B', 'D', 'B', 'D', 'B'];
const form = document.querySelector('#container-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    let score = 0;
    let counter = 0; 

const inputResposts = [   
    event.target.resp3.value,
    event.target.resp8.value,
    event.target.resp11.value,
    event.target.resp14.value,
    event.target.resp20.value,
    event.target.resp22.value,
    event.target.resp28.value,
    event.target.resp31.value,
    event.target.resp36.value,
    event.target.resp38.value,
];

scrollPage();

    inputResposts.forEach ((correct, index) => {
        if (correct === arrayResposts[index]) {
        score += 10;
    }   
      
    })

    const timer = setInterval(() => {

        if (score === counter) {
            clearInterval(timer);
        }
        popupResultP.innerHTML = `Você acertou <strong>${counter}%</strong> das perguntas!`
        counter++;
    }, 10)

        if (score === 0) {
        popupAvaliacao.textContent = 'Opps! Tente de novo!'  
         
    } else if (score >= 10 && score <= 30) {
        popupAvaliacao.textContent = 'Que tal tentar melhorar sua pontuação?'
    
    } else if (score > 30 && score <= 60) {
        popupAvaliacao.textContent = 'Não está mal, mas ainda há espaço para melhora.'
    
    } else if (score > 60 && score <= 90) {
        popupAvaliacao.textContent = 'Muito bem! Você tem um bom conhecimento da bíblia.'
    
    } else if (score === 100) {
        popupAvaliacao.textContent = 'Parabéns! Seu conhecimento da bíblia é excelente!'
    }
    
})

//EVENTO QUE FECHA O BOTÃO X DA POPUP
divClosedPopup.addEventListener('click', () => {

    divBackgroundEsmaecido.style.display = 'none';

});

const btnPopup = document.querySelector('.btn-popup');
const respostaBottomP = document.querySelector('.resposta-bottom-p');

//BOTÃO QUE ACESSA AS RESPOSTAS DA POPUP
    btnPopup.addEventListener('click', () => {
    
    divBackgroundEsmaecido.style.display = 'none';
    scrollTo(0, 1800);
    respostaBottomP.innerHTML = '<b>Respostas:</b> <b>1.</b>(C), <b>2.</b>(D), <b>3.</b>(C), <b>4.</b>(B), <b>5.</b>(D), <b>6.</b>(B), <b>7.</b>(D), <b>8.</b>(B), <b>9.</b>(D), <b>10.</b>(B)'
});

//FUNÇÃO QUE ROLA PÁGINA PARA O TOPO E EXIBE A POPUP (DECLARADA LINHA - 25)
const scrollPage = () => {
    
    scrollTo(0, 0)   
    divBackgroundEsmaecido.style.display = 'block';

};



 
