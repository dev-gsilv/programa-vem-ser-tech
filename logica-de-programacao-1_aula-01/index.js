const TAXA_FIXA = (10/100);

document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Recupera os valores dos campos de entrada
    let valor = parseFloat(document.getElementById("valor").value);
    let taxa = parseFloat(document.getElementById("taxa").value);

    // Verifica se os valores são números
    if (!isNaN(valor) && !isNaN(taxa)) {
        // Calcula o resultado da multiplicação
        let valorTaxa = valor * (taxa/100);
        let valorRestaurante = valor - ( valor * TAXA_FIXA);

        // Exibe o resultado no elemento <span>
        document.getElementById("valorTaxa").textContent = valorTaxa;
        document.getElementById("totalRestaurante").textContent = valorRestaurante;
        
        setTimeout(function() {
            if (valor > 500) {
                alert("Valor acima de R$ 500!");
            }
        }, 100);
    } else {
        alert("Certifique-se de que ambos os campos contenham números válidos.");
    }
    
});