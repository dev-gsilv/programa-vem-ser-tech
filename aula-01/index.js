document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Recupera os valores dos campos de entrada
    let valor = parseFloat(document.getElementById("valor").value);
    let taxa = parseFloat(document.getElementById("taxa").value);

    // Verifica se os valores são números
    if (!isNaN(valor) && !isNaN(taxa)) {
        // Calcula o resultado da multiplicação
        let resultado = valor * (taxa/100);

        // Exibe o resultado no elemento <span>
        document.getElementById("valorTaxa").textContent = resultado;
    } else {
        alert("Certifique-se de que ambos os campos contenham números válidos.");
    }
});