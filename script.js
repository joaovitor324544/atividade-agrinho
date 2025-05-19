document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');

    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao')
        opcoesAcessibilidade.classList.toggle('apresenta-lista')

    })
    
    const alternaContraste = document.getElementById('alterna-contraste')
    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })
    
    let tamanhoAtualFonte = 1;

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');

    diminuirFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})