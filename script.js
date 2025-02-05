let pontos = 0;
const perguntas = [
    { pergunta: "Qual é a união de A = {1,2,3} e B = {2,3,4}?", resposta: "{1,2,3,4}" },
    { pergunta: "Qual é a interseção de A = {5,6,7} e B = {6,7,8}?", resposta: "{6,7}" },
    { pergunta: "Qual é a diferença A - B para A = {9,10,11} e B = {10,11,12}?", resposta: "{9}" },
    { pergunta: "Qual é a união dos conjuntos A = {1, 2, 3} e B = {2, 3, 4}?", resposta: "{1, 2, 3, 4}" },
    { pergunta: "Qual é a interseção dos conjuntos A = {5, 6, 7} e B = {6, 7, 8}?", resposta: "{6, 7}" },
    { pergunta: "Qual é a diferença entre os conjuntos A = {9, 10, 11} e B = {10, 11, 12}?", resposta: "{9}" },
    { pergunta: "Se A ⊆ B e B ⊆ C, o que podemos concluir sobre A e C?", resposta: "A ⊆ C" },
    { pergunta: "Qual é o conjunto complementar de A = {1, 2} em relação a U = {1, 2, 3, 4}?", resposta: "{3, 4}" },
    { pergunta: "Se A = {x | x é par} e B = {x | x é múltiplo de 4}, qual é A ∩ B?", resposta: "{x | x é múltiplo de 4}" },
    { pergunta: "Se A = {a, b, c} e B = {b, c, d}, qual é A Δ B (diferença simétrica)?", resposta: "{a, d}" },
    { pergunta: "Se A tem 5 elementos e B tem 7, quantos elementos A × B tem?", resposta: "35" },
    { pergunta: "Se |A| = 6 e |B| = 4, qual é o número máximo de elementos em A ∪ B?", resposta: "10" },
    { pergunta: "Se um conjunto tem 2^n subconjuntos, qual é o valor de n se há 16 subconjuntos?", resposta: "4" }
];

function atualizarPontuacao() {
    document.getElementById("score").innerText = pontos;
}

function gerarPergunta() {
    const indice = Math.floor(Math.random() * perguntas.length);
    const perguntaAtual = perguntas[indice];
    document.getElementById("pergunta").innerText = perguntaAtual.pergunta;
    document.getElementById("resposta").dataset.respostaCorreta = perguntaAtual.resposta;
}

function verificarResposta() {
    const respostaUsuario = document.getElementById("resposta").value.trim();
    const respostaCorreta = document.getElementById("resposta").dataset.respostaCorreta;
    if (respostaUsuario === respostaCorreta) {
        pontos += 10;
        alert("Parabéns! Você acertou! 🎉");
    } else {
        alert("Tente novamente! Você consegue! 💪");
    }
    atualizarPontuacao();
    gerarPergunta();
}

let slideIndex = 0;

function mudarSlide(direction) {
const slides = document.querySelectorAll(".carousel-item");
slideIndex += direction;
if (slideIndex < 0) slideIndex = slides.length - 1;
if (slideIndex >= slides.length) slideIndex = 0;
const newTransformValue = `translateX(-${slideIndex * 100}%)`;
document.querySelector(".carousel-slide").style.transform = newTransformValue;
}