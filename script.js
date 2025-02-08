// script.js
let gastos = []; // Array para armazenar os gastos

// Função para adicionar um novo gasto
document.getElementById('add-gasto').onclick = function() {
    const container = document.getElementById('gastos-container');
    const gastoDiv = document.createElement('div');
    gastoDiv.classList.add('gasto');

    // Criando os elementos de input para nome e valor do gasto
    const gastoLabel = document.createElement('label');
    gastoLabel.innerText = 'Nome do Gasto:';
    const gastoNome = document.createElement('input');
    gastoNome.type = 'text';
    gastoNome.placeholder = 'Digite o nome do gasto';

    const valorLabel = document.createElement('label');
    valorLabel.innerText = 'Valor (R$):';
    const gastoValor = document.createElement('input');
    gastoValor.type = 'number';
    gastoValor.placeholder = 'Digite o valor do gasto';

    // Adicionando os inputs ao div
    gastoDiv.appendChild(gastoLabel);
    gastoDiv.appendChild(gastoNome);
    gastoDiv.appendChild(valorLabel);
    gastoDiv.appendChild(gastoValor);

    // Adicionando o div ao container de gastos
    container.appendChild(gastoDiv);

    // Adicionando o novo gasto ao array
    gastos.push({ nome: gastoNome, valor: gastoValor });
};

// Função para calcular os gastos e sobra
function calcular() {
    const receita = parseFloat(document.getElementById('receita').value) || 0;
    let totalGastos = 0;

    // Somando todos os gastos
    gastos.forEach(gasto => {
        const valor = parseFloat(gasto.valor.value) || 0;
        totalGastos += valor;
    });

    // Calculando a sobra
    const sobra = receita - totalGastos;
    document.getElementById('sobra').innerText = sobra.toFixed(2);

    // Exibindo o botão de download
    document.getElementById('download').style.display = 'block';
}

// Função para gerar o extrato e fazer o download
function downloadExtrato() {
    let extrato = 'Extrato de Gastos:\n\n';
    extrato += 'Valor Recebido: R$ ' + (parseFloat(document.getElementById('receita').value) || 0) + '\n\n';
    extrato += 'Gastos:\n';

    gastos.forEach(gasto => {
        extrato += gasto.nome.value + ': R$ ' + (parseFloat(gasto.valor.value) || 0) + '\n';
    });

    const sobra = parseFloat(document.getElementById('sobra').innerText);
    extrato += '\nSobra no Final: R$ ' + sobra.toFixed(2);

    // Criando um Blob com o conteúdo do extrato
    const blob = new Blob([extrato], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'extrato_de_gastos.txt';
    link.click();
}
