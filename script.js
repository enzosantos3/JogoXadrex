const tabuleiro = document.querySelector('.tabuleiro');
const pecasIniciais = [
  "&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;",
  "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;",
  "&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"
];

let selecionado = null;

function criarTabuleiro() {
    tabuleiro.innerHTML = "";
    for (let i = 0; i < 64; i++) {
        const casa = document.createElement('div');
        casa.setAttribute('data-index', i);
        casa.innerHTML = pecasIniciais[i];

        const linha = Math.floor(i / 8);
        const cor = (linha + i) % 2 === 0 ? "brancas" : "pretas";
        casa.classList.add(cor);

        casa.addEventListener('click', () => moverPeca(casa, i));
        tabuleiro.appendChild(casa);
    }
}

function getLinhaColuna(index) {
    return { linha: Math.floor(index / 8), coluna: index % 8 };
}

function moverPeca(casaDestino, indexDestino) {
    if (selecionado === null) {
        if (casaDestino.innerHTML.trim() !== "") {
            selecionado = { element: casaDestino, index: indexDestino };
            casaDestino.style.border = "2px solid red";
        }
    } else {
        const peca = selecionado.element.innerHTML;
        const origem = getLinhaColuna(selecionado.index);
        const destino = getLinhaColuna(indexDestino);
        const dx = Math.abs(destino.coluna - origem.coluna);
        const dy = Math.abs(destino.linha - origem.linha);

        const pecaUnicode = peca.charCodeAt(0);

        let podeMover = false;

        // Regra do Peão
        if (pecaUnicode === 9817 ) { // Peão branco
            podeMover = (destino.linha === origem.linha - 1 && dx === 0);
        } else if (pecaUnicode === 9823) { // Peão preto 
            podeMover = (destino.linha === origem.linha + 1 && dx === 0);
        }

        // Regra do Cavalo
        if (pecaUnicode === 9816 || pecaUnicode === 9822) { // Cavalo branco ou preto
            podeMover = (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
        }

        if (podeMover) {
            casaDestino.innerHTML = selecionado.element.innerHTML;
            selecionado.element.innerHTML = "";
        }

        selecionado.element.style.border = "";
        selecionado = null;
    }
}

criarTabuleiro();