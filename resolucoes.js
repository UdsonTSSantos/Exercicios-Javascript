// 01 - Verificação de idade:
// Escreva um programa que recebe a idade de uma pessoa e imprime "Maior de idade" se for 18 anos ou mais, e "Menor de idade" caso contrário.

let idade = 20;

    if(idadedade >= 18){
        console.log("Com essa idade, você é de maior.");

    } else {
        console.log("Com menos de 18 anos, você é considerado de menor.");
    }


// 2 - Número Positivo, Negativo ou Zero:
// Solicite um número ao usuário e exiba se ele é positivo, negativo ou zero.

let numero = 15;
    if(numero >= 0){
        console.log("O número " + numero + " é par.");
    } else {
        console.log("Esse número " + numero + " é ímpar ");
    }
    


// 3 - Maior entre Dois Números:
// Peça dois números e mostre qual é o maior. Se forem iguais, exiba "Os números são iguais".

let numeroA = 10;
let numeroB = 20;
    if(numeroA > numeroB){
        console.log("O número A, " + numeroA + " é maior do que o número B " + numeroB);
    } else if(numeroA < numeroB){
        console.log("O número A, " + numeroA + " é menor do que o número B " + numeroB);
    } else {
        console.log("Os números são iguais.");
    }


// 4 - Par ou Ímpar:
//Peça um número e informe se ele é par ou ímpar.

let numero = 10;
    if(numero % 2 == 0){
        console.log("Esse número " + numero + " é par.");

    } else {
        console.log("Esse número" + numero + " é ímpar.");
    }


// 5 - Cálculo de Média:
// Receba três notas de um aluno, calcule a média e exiba "Aprovado" se for 7 ou mais, "Recuperação" se for entre 5 e 6.9, e "Reprovado" se for abaixo de 5.

let aluno = "Mascarenha";
let notaA = 8;
let notaB = 5;
let notaC = 5;
let somaNotas = notaA + notaB + notaC;
let media = somaNotas / 3;
    if(media >= 7){
        console.log("O aluno " + aluno + " ,está aprovado com uma nota de média igual ou acima de 7, sendo sua média " + media);
    } else if(media > 5 && media < 7 ){
        console.log("Com a média de " + media + " o aluno " + aluno + " está em recuperação.");
    } else {
        console.log("REPROVADO, não alcançou a nota mínima para aprovação ou recuperação");        
    }


// 6 - Desconto em Compra:
// Se o valor da compra for maior que R$100, aplique um desconto de 10% e exiba o novo valor.

let cliente = "Ana";
let compra = 100;
let desconto = 10;
let valorDesconto = compra * (desconto / 100);
let valorCompra = compra - valorDesconto;

    console.log("A cliente, " + cliente + " realizou uma compra que tinha o valor de: " + compra + " reais, ela ganhou um desconto de: " + desconto + "%, ficando o valor total a ser pago de:  " + valorCompra + ",00 " + cliente + ", teve uma economia de: " + valorDesconto + ",00 reais" );


// 7 - Verificação de Ano Bissexto:
// Peça um ano e verifique se é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).


