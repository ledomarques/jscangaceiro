// cria a instância do controller
const controller = new NegociacaoController();

const $ = document.querySelector.bind(document);

// associa o evento de submissão do formulário à chamada do método "adiciona"
$('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));

// associa o evento de submissão do formulário à chamada do método "apagar"
$('#botao-apaga')
    .addEventListener('click', controller.apaga.bind(controller));

// associa o evento de submissão do formulário à chamada do método "importa negociações"
$('#botao-importa')
    .addEventListener('click', controller.importaNegociacoes.bind(controller));