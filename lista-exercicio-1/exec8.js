function diasAteNatal() {
    // Obter a data atual
    const hoje = new Date();
  
    // Obter a data do próximo Natal (25 de dezembro do ano atual)
    const proximoNatal = new Date(hoje.getFullYear(), 11, 25);
  
    // Calcular a diferença em milissegundos
    const diferencaEmMilissegundos = proximoNatal - hoje;
  
    // Converter a diferença para dias
    const diasRestantes = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
  
    return `${diasRestantes} dias restantes até o Natal!`;
  }

console.log(diasAteNatal());