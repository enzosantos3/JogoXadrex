# ♟️ Projeto: Jogo de Xadrez com HTML, CSS e JavaScript

Este é um projeto simples de um tabuleiro de **xadrez interativo**, desenvolvido com HTML, CSS e JavaScript. O objetivo principal é permitir movimentar as peças **Peão** e **Cavalo**, com regras básicas de movimentação implementadas.

---

## 📁 Estrutura do Projeto

/projeto-xadrez
│
├── index.html        # Estrutura da página
├── style.css         # Estilização do tabuleiro e das peças
└── script.js         # Lógica do jogo (criação e movimentação de peças)

---

## 🔧 Funcionalidades

- Renderização de tabuleiro 8x8 com as peças posicionadas inicialmente.
- Suporte à movimentação **somente de Peões e Cavalos**, com regras básicas:
  - **Peão branco:** anda 1 casa para cima.
  - **Peão preto:** anda 1 casa para baixo.
  - **Cavalos:** movimentos em "L" (2 casas em uma direção e 1 na outra).
- Destaque na peça selecionada.
- Interação por cliques do usuário.

---

## 🧱 Explicação dos Arquivos

### 1. `index.html`

- Define a estrutura principal da página.
- Contém:
  - Título.
  - Cabeçalho `<h1>`.
  - Container do tabuleiro (`<div class="tabuleiro">`).
  - Inclusão dos arquivos CSS e JS.

---

### 2. `style.css`

Responsável por estilizar:

- O tabuleiro com 8 colunas e 8 linhas (600x600px).
- As casas alternadas entre `brancas` e `pretas`.
- As peças com centralização, tamanho, e `cursor: pointer`.

---

### 3. `script.js`

Contém toda a **lógica do jogo**:

#### Principais Partes:
- `pecasIniciais`: Array com os códigos Unicode das peças.
- `criarTabuleiro()`: Renderiza as 64 casas e adiciona os eventos de clique.
- `moverPeca()`: Lógica que:
  - Detecta se uma peça foi selecionada.
  - Calcula a movimentação válida conforme o tipo da peça.
  - Move a peça se for permitido.
- `getLinhaColuna()`: Converte o índice linear (0-63) em coordenadas 2D do tabuleiro.

#### Peças implementadas:
- Peão branco (`&#9817;`) – código Unicode `9817`
- Peão preto (`&#9823;`) – código Unicode `9823`
- Cavalo branco (`&#9816;`) – código Unicode `9816`
- Cavalo preto (`&#9822;`) – código Unicode `9822`

---

## ▶️ Como Executar

1. Clone este repositório ou copie os arquivos para uma pasta local.
2. Abra o arquivo `index.html` no navegador.
3. Clique sobre as peças (Peões ou Cavalos) e tente movê-las.

---

## 📌 Melhorias Futuras

- Adicionar regras de movimento para todas as peças (Torre, Bispo, Rainha, Rei).
- Permitir capturas de peças inimigas.
- Destacar movimentos possíveis ao selecionar uma peça.
- Suporte a vez de jogador (branco x preto).
- Implementar lógica de xeque e xeque-mate.