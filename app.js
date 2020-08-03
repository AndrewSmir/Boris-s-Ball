'use strict'

const button = document.getElementById('answer');
const answerText = document.getElementById('answer-text');

button.addEventListener("click", ()=>{
    setTimeout(changeTextContent, 1000);
    button.classList.toggle('animated');
    button.classList.toggle('animated-reverse');
})

function changeTextContent() {
    const answers = [
        'Боря, бери кандидата!',
        'Классный фронт, надо брать!',
        'Срочно оффер!',
        'Кандидат выглядит как проходимец',
        'Берем пока Сбер не увел',
        'Как раз в твою коллекцию',
        'Этому надо 20 тыщ сверху накинуть',
        'Борис, иди пообедай. А потом оффер',
        'Это определенно оффер',
        'Глаза страшаться, а руки оффер делают'
    ];

    let answer = answers[Math.floor(Math.random() * answers.length)];

    if (answerText.textContent == answer){
        while (answerText.textContent == answer){
            answer = answers[Math.floor(Math.random() * answers.length)]
        }
    }

    answerText.textContent = answer;
}



