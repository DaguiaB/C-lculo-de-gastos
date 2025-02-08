// script.js
function calcular() {
    // Pegando os valores dos inputs
    var receita = parseFloat(document.getElementById('receita').value) || 0;
    var aluguel = parseFloat(document.getElementById('aluguel').value) || 0;
    var luz = parseFloat(document.getElementById('luz').value) || 0;
    var agua = parseFloat(document.getElementById('agua').value) || 0;
    var supermercado = parseFloat(document.getElementById('supermercado').value) || 0;
    var transporte = parseFloat(document.getElementById('transporte').value) || 0;
    var internet = parseFloat(document.getElementById('internet').value) || 0;
    var outros = parseFloat(document.getElementById('outros').value) || 0;
    
    // Calculando o total de gastos
    var totalGastos = aluguel + luz + agua + supermercado + transporte + internet + outros;
    
    // Calculando a sobra
    var sobra = receita - totalGastos;
    
    // Atualizando o resultado na página
    document.getElementById('sobra').innerText = sobra.toFixed(2);
}
