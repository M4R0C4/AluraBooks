const elementoParaInserirLivros = document.getElementById("livros")
const elementoComValorTotalDeLivrosDisponivel = document.getElementById("valor_total_livros_disponiveis")

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoComValorTotalDeLivrosDisponivel.innerHTML = ''
  elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach((livros) => {

      let disponibilidade = livros.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
      elementoParaInserirLivros.innerHTML += `
         <div class="livro">
      <img class="${disponibilidade}" src="${livros.imagem}" alt="${livros.titulo}" />
      <h2 class="livro__titulo">
      ${livros.titulo}
      </h2>
      <p class="livro__descricao">${livros.autor}</p>
      <p class="livro__preco" id="preco">R$${livros.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livros.categoria}</span>
      </div>
    </div>
        `;
    });
  }
