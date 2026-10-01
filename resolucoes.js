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







// 8 - Acesso a um Sistema:
// Peça um nome de usuário e uma senha. Se forem "admin" e "1234", exiba "Acesso permitido", caso contrário, "Acesso negado".


let usuario = "admin";
let senha = 1234;
    if(usuario == "admin" && senha == 1234){
        console.log("Acesso permitido");
    } else {
        console.log("Acesso negado");
    }

// 9 - Frete Grátis:
//Se o valor da compra for maior ou igual a R$200, ofereça frete grátis, caso contrário, cobre R$20.

let compra = 200;
let taxa = 20;
let compraFrete = compra + frete;

    if(compra > 200){
        console.log("Ao realizar uma compra com valor acima de R$ 200,00 reais, não cobramos o frete, nesse caso a sua compra não terá a taxa de frete. ");
    } else {
        console.log("O valor da sua compra: " + compra + ",00 será icluído o valor de: " + taxa + ",00 referente ao frete, ficando o valor total de compra mais o frete de: " + compraFrete + ",00")
    }


// 10 - Número dentro de um Intervalo:
// Solicite um número e exiba "Está no intervalo" se ele estiver entre 10 e 50, caso contrário, exiba "Fora do intervalo".

let numero = 22;

    if(numero >= 10 && numero <= 50 ){
        console.log("O número está dentro da sequencia de 10 á 50 sendo ele o número " + numero )
    } else {
        console.log("Esse número " + numero + " não está dentro da sequencia entre 10 e 50.")
    }

 // 1 - Função para exibir uma mensagem personalizada
// Crie uma função chamada exibirMensagem(mensagem), que recebe um texto como parâmetro e exibe no console.
// Exemplo: exibirMensagem("Olá, seja bem-vindo!") → Exibe "Olá, seja bem-vindo!" no console
// 

console.log("GM, Ford, VW, fiat, Ferrari, Volvo, Porsche".split(","));