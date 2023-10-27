function posicaoNaArvoreGenealogica(numeroLetra) {
    const arr = numeroLetra.split(", ")
    const numero = parseInt(arr[0]);
    const letra = arr[2];

    const geracoes = [
        ["bisavô", "bisavó"],
        ["avô", "avó"],
        ["pai", "mãe"],
        ["você"],
        ["filho", "filha"],
        ["neto", "neta"],
        ["bisneto", "bisneta"]
      ];
      let generoIndice = letra === "m" ? 0 : 1;
      let individuo;

      switch(numero){
        case -3:
            individuo = geracoes[0][generoIndice]
            break;
        case -2:
            individuo = geracoes[1][generoIndice]
            break;
        case -1:
            individuo = geracoes[2][generoIndice]
            break;
        case 0:
            individuo = geracoes[3][generoIndice]
            break;
        case 1:
            individuo = geracoes[4][generoIndice]
            break;
        case 2:
            individuo = geracoes[5][generoIndice]
            break;
        case 3:
            individuo = geracoes[6][generoIndice]
            break;
      }
      return individuo;
    }
    
    // Exemplos de uso:
    console.log(posicaoNaArvoreGenealogica("-3, 'm'")); // Saída: bisavô
    console.log(posicaoNaArvoreGenealogica("1, 'f'")); // Saída: "filha"