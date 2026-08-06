let questoes = [];

document.addEventListener('DOMContentLoaded', () => {

    fetch("/data/questoes.json")
        .then(response => {
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            return response.json();
        })
        .then(data => {
            questoes = data;
            atualizarQuantidadeMaterias();
        })
        .catch(erro => console.error("Falha ao carregar questões:", erro));

    const cartoes = document.querySelectorAll('.materia');
    const botaoIniciar = document.querySelector('.container__start');

    cartoes.forEach(cartao => {
        cartao.addEventListener('click', function () {

            const materiaEscolhida = cartao.dataset.materia;

            localStorage.setItem('filtroMateria', materiaEscolhida);
            window.location.href = 'simulado.html';

        });
    });

    if (botaoIniciar) {
        botaoIniciar.addEventListener('click', () => {
            localStorage.removeItem('filtroMateria');
        });
    }

});


function atualizarQuantidadeMaterias() {

    const cards = document.querySelectorAll(".materia");

    cards.forEach(card => {

        const materia = card.dataset.materia;

        const quantidade = questoes.filter(q => q.materia === materia).length;

        card.querySelector(".total-questoes").innerText =
            `${quantidade} questões disponíveis`;

    });

};

const linksMaterias = document.querySelectorAll(".link-materia");

linksMaterias.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const materia = this.dataset.materia;

        localStorage.setItem("filtroMateria", materia);

        window.location.href = "simulado.html";
    });
});