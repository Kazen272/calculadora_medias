const form = document.getElementById('form-media');
const arrayNomeMateria = [];
const arraynota = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const mediaMinima = parseFloat(prompt('Digite a média mínima para aprovação: '));

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionarValor();
    atualizaTabela();
    calculaMedia();
    mediaFinal()
});

function adicionarValor() {
    const nomeMateria = document.getElementById('nome-materia');
    const nota = document.getElementById('nota');

    arrayNomeMateria.push(nomeMateria.value);
    arraynota.push(parseFloat(nota.value));

    let linha = '<tr>';
    linha += `<td>${nomeMateria.value}</td>`;
    linha += `<td>${nota.value}</td>`;
    linha += `<td>${nota.value >= mediaMinima ? 'Aprovado' : 'Reprovado'}</td>`;
    linha += '</tr>';

    linhas += linha;

    nomeMateria.value = '';
    nota.value = '';
}

function atualizaTabela() {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}

function mediaFinal() {
    const mediaFinal = calculaMedia();

    document.getElementById('media-final').innerText = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= mediaMinima ? spanAprovado : spanReprovado;
}


function calculaMedia() {
    let soma = 0;

    for (let i = 0; i < arraynota.length; i++) {
        soma += arraynota[i];
    }

    return soma / arraynota.length;
}




