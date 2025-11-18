// Seleção dos elementos da página
const form = document.getElementById("form");
const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];

// Função para adicionar aluno
function adicionarAluno(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    // Validação dos campos
    if (!nome || isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Cálculo da média
    const media = (nota1 + nota2) / 2;

    // Determinar se está aprovado ou reprovado
    const status = media >= 6 ? "Aprovado" : "Reprovado";
    const statusClass = media >= 6 ? "aprovado" : "reprovado";

    // Criar nova linha na tabela
    const novaLinha = tabela.insertRow();

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${media.toFixed(2)}</td>
        <td class="${statusClass}">${status}</td>
    `;

    // Limpar os campos do formulário
    form.reset();
}

// Adicionar evento de submit no formulário
form.addEventListener("submit", adicionarAluno);