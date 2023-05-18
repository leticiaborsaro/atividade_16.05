//atividade dia 16/05

// Questão 1

   function questao1() {
    var n1 = parseInt(window.prompt("1) Insira um número inteiro"));
    var n2 = parseInt(window.prompt("Insira outro número inteiro:"));
    var n3 = parseInt(window.prompt("Insira mais um número:"));

    document.write(`1) A média é ${Math.floor((n1 + n2 + n3)/3)}`);
   }

// Questão 2

   function questao2() {
    var nome = window.prompt('2) Digite seu nome:');
    var sal = Number(window.prompt('Digite o seu salário:'));

    var aumentosal = Number(sal/10);
    var novosal = Number(aumentosal + sal);

    document.write(`2) ${nome}, seu novo salário é ${novosal}`);
   }

// Questão 3
   
   function questao3() {
    var Avalor = Number(window.prompt('3) Insira um número inteiro:'));
    var Bvalor = Number(window.prompt('Insira um número inteiro:'));

    if (Avalor == Bvalor) {
      document.write(`3) ${Number(Avalor + Bvalor)} é a soma dos dois números`);
    } 
    else {
      var Cvalor = Number(Avalor * Bvalor);
      document.write(`3) A multiplicação do primeiro número com o segundo é igual a ${Cvalor}`);
    }
   }

  // Questão 4
  // Correção: poderia usar legenda p/ colocar se é a vista, se é 3 parcelas ou 5 parcelas
  /* 
  if(forma_pagamento == '2')
  valor_parcela = preco_a_vista + (preco_a_vista*10)/100
  window.alert()
  */

  function questao4() {
   var precVista = Number(window.prompt("Insira o valor à vista:"));
   var precTotal
   var prestMensal 
   var parcelVezes = Number(window.prompt("'Parcelar em 3 ou 5 vezes? (Insira o número 3 ou 5)"));

    if (parcelVezes == 3) {
     precTotal = precVista + (precVista/10) // preço total é igual a preço à vista + 10%
     prestMensal = Math.round(precTotal/parcelVezes) // prestação mensal = a preço à vista dividido por 3
     document.write(`4) O valor ${precVista} parcelado em ${parcelVezes} vezes, resultará em parcelas de ${prestMensal}, resultando em um total de ${precTotal} (Com um acréscimo de 10%)`);

    }

    if (parcelVezes == 5) {
      
      precTotal = precVista + (precVista/10 * 2) // preço total é igual a preço à vista + 20%
      prestMensal = Math.round(precTotal/parcelVezes) //prestação mensal = a preço à vista dividido por 5
      document.write(`4) O valor ${precVista}, parcelado em ${parcelVezes} vezes, resultará em parcelas de ${prestMensal} resultando em um total de ${precTotal} (Com um acréscimo de 20%)`);
    }

    else {
      document.write('Número de parcelas inválido. Tente novamente.');
    }
   }

  // Questão 5

  /*Faça um algoritmo que leia o nome e as 
  três notas de uma disciplina de um aluno e ao final escreva o nome 
  do aluno, sua média e se ele foi aprovado, 
  sabendo-se que a média para aprovação é igual ou superior a 8.*/

  function questao5() {
   var nomeAluno = window.prompt('Escreva o seu nome completo:');
   var nota1 = Number(Math.round(window.prompt("Insira sua primeira nota:")));
   var nota2 = Number(Math.round(window.prompt("Insira sua segunda nota:")));
   var nota3 = Number(Math.round(window.prompt("Insira sua terceira nota:")));
   var media = Number(Math.round((nota1 + nota2 + nota3)/3));

   if (media >= 8 && media <= 10) {
    document.write(`5) ${nomeAluno}, sua média foi de ${media}. Você foi aprovado!`); 
   }
   else if (media < 8) {
    document.write(`5) ${nomeAluno}, sua média foi de ${media}. Você foi reprovado.`);
   }
   else if (media > 10) {
    document.write('Informação inválida. Tente novamente.');
   }
}

// Questão 6

function questao6() {
   var num1 = Number(Math.round(window.prompt("Insira um número inteiro:")));
   var num2 = Number(Math.round(window.prompt("Insira outro número inteiro:")));
   var codUser = window.prompt("Insira o código de seleção do usuário");

   if (codUser == 1) {
      document.write(`${num1} + ${num2} = ${Number(num1 + num2)}`);
   }
   else if (codUser == 2) {
      document.write(`${num1} * ${num2} = ${Number(num1 * num2)}`);

   }
   else if (codUser == 3) {
      document.write(`${num1} dividido por ${num2} = ${Number(num1 / num2)}`);
   }
   else {
      document.write("Código inválido. Tente novamente.");
   }
}

/*
  
switch (codUser) {
   case 1:
   document.write(`${num1} + ${num2} = ${Number(num1 + num2)}`);
      break;
   case 2:
   document.write(`${num1} * ${num2} = ${Number(num1 * num2)}`);
      break;
   case 3:
   document.write(`${num1} dividido por ${num2} = ${Number(num1 / num2)}`);
      break;
   
}
}*/