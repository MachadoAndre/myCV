let btnStart = document.querySelector('.startquiz');
var questao = 1;
var pontos = 0;
let lblpergunta = document.querySelector('.pergunta');
let rdOp1 = document.querySelector('#op1');
let rdOp2 = document.querySelector('#op2');
let lblOp1 = document.querySelector('.lblop1');
let lblOp2 = document.querySelector('.lblop2');
let btnProxima = document.querySelector('.proxima');
// salário, linguagem, processos de desenvolvimento, processos de troca 
btnStart.addEventListener('click', (event) => {
    event.preventDefault();

    let tags = document.querySelectorAll('.info');
    tags.forEach(tag => {
        tag.classList.add('none');
    });

    document.querySelector('.opquiz')
        .classList.remove('opquiz');

    proximaQuestao();

});

function proximaQuestao() {
    if (questao == 1) {
        lblpergunta.textContent = "Eu desejo desenvolver em Java?";
        lblOp1.textContent = "Sim, somente em Java";
        lblOp2.textContent = "Não, aceito qualquer linguagem";        
        btnProxima.addEventListener('click', (event) => {
            event.preventDefault();
            if(questao == 1){
                document.querySelector('.resposta')
                    .textContent = "Ok";
            }
        });
    }
}