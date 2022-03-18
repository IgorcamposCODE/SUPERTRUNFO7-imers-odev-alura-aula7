var cartas1 = {
  nome: "Guardião Negro",
  atributos:{
      ataque: 9,
      defesa: 12,
      magia: 5,
      velocidade: 9,
      destreza:8
  }
};

var cartas2 = {
  nome: "Abelha da morte",
  atributos: {
    ataque: 8,
    defesa: 19,
    magia: 9,
    velocidade: 16,
    destreza:2
  }
}

var cartas3 = {
  nome: "Guerreiro das Almas",
  atributos:{
    ataque: 10,
    defesa: 20,
    magia: 9,
    velocidade: 20,
    destreza: 8
  }
}

    var cartas = [cartas1, cartas2, cartas3];
    var cartasMaquina;
    var cartasJogador;

  function sortearCartas() {

    var numeroCartasMaquina = parseInt(Math.random() * 4);
    cartasMaquina = cartas[numeroCartasMaquina];
    
    var numeroCartasJogador = parseInt(Math.random() * 4);
    // enquanto o número da carta maquina for igual ao número da carta jogador.
    // esses objetos irão ficar sorteando novamente.
    while (numeroCartasMaquina == numeroCartasJogador) {
      numeroCartasJogador = parseInt(Math.random() * 4);
    }

    cartasJogador = cartas[numeroCartasJogador];
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes();
  }

  function exibirOpcoes() {

    var opcoes = document.getElementById("opcoes");
    var elementoTextos = ""
    for (var atributo in cartasJogador.atributos) {
      elementoTextos += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
  }

  opcoes.innerHTML = elementoTextos;
}
   
  function escolhaAtributoSelecionado() {
    var selecioneAtributo = document.getElementsByName("atributo");

    for (var i = 0; i < selecioneAtributo.length; i++) {
      if (selecioneAtributo[i].checked == true) {
       return selecioneAtributo[i].value;
      }
    }
    
  }

  function jogar() {
    var atributoSelecionado = escolhaAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");

    var valorCartasJogador = cartasJogador.atributos[atributoSelecionado]
    var valorCartasMaquina = cartasMaquina.atributos[atributoSelecionado]

     if (valorCartasJogador > valorCartasMaquina) {
       elementoResultado.innerHTML = "Aobaa! Você venceu..."
     } else if (valorCartasMaquina > valorCartasJogador){
       elementoResultado.innerHTML = "Ishiiii Triste :( , Você perdeu o valor é maior!"
     } else {
       elementoResultado.innerHTML = "Sorte sua! Você empatou..."
     }
        console.log(cartasMaquina);
    }
 
