function capitalizeFolgas(folga) {
    const diasCapitalizados = folga.map((dia) => {
      return dia.charAt(0).toUpperCase() + dia.slice(1);
    });
  
    return diasCapitalizados;
  }
  
  const folgas = [
    "quinta-Feira",
    "Sexta-feira",
    "sábado",
    "Domingo",
    "segunda",
    "quarta",
    "Quarta-feira",
  ];
  
  const diasCapitalizados = capitalizeFolgas(folgas);
  console.log(diasCapitalizados);