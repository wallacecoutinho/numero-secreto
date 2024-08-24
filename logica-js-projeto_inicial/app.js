alert ("Seja bem vindo ao Treinamento de Logica de Programação da Solutis");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    //Se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;       
    } else {    
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
    }
}
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
//    alert(`Isso ai! Você descobriu o numero sercreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert(`Isso ai! Você descobriu o numero sercreto ${numeroSecreto} com ${tentativas} tentativa.`);
//    }
