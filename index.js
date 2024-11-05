//desafio partida rankeada.

function rankeada(vitoria, derrota){
    return vitoria - derrota;
}
 let saldoVitoria = rankeada (200,60);
  if(saldoVitoria < 10){
    console.log( " O Herói tem saldo de "+saldoVitoria,"e está no nível de Ferro ");
  } else if(saldoVitoria >= 11 && saldoVitoria <= 20){
      console.log(" O Herói tem saldo de "+saldoVitoria,"e está no nível de Bronze ");
  }
      if(saldoVitoria >= 21 && saldoVitoria <= 50){
        console.log(" O Herói tem saldo de "+saldoVitoria,"e está no nível de Prata");
      } else if(saldoVitoria >= 51 && saldoVitoria <= 80){
          console.log(" O Herói tem saldo de "+saldoVitoria,"e está no nível de Ouro")
      }
            if(saldoVitoria >= 81 && saldoVitoria <= 90){
                console.log(" O Herói tem saldo de "+saldoVitoria,"e está no nível de Diamante")
            } else if(saldoVitoria >= 91 && saldoVitoria <= 100){
                  console.log(" O Herói tem saldo de "+saldoVitoria,"e está no nível de Lendário")
            } 
                    if(saldoVitoria >= 101){
                         console.log(" O Herói tem saldo de "+saldoVitoria,"e está no nível de Imortal") 
                    }
                  
                
            