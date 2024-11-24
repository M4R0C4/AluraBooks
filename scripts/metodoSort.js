const botaoOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

botaoOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a,b)=> a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}