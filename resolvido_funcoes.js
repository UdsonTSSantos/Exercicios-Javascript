function monstrarDataHora(){
    let data = new Date();
    console.log(data.toLocaleDateString());
    console.log(data.getFullYear());
}
monstrarDataHora()


function imprimirTabuada(numero = 0){
    for(let i = 0; i <= 10; i++){
        console.log(`${numero}  x  ${i}  = ${numero*i}`);
    }
}
imprimirTabuada(5)

function verificarIntervalo(numero = 0){
    if(numero >= 10 && numero <= 50){
        console.log(`${numero} Está no Intervalo de 10 à 50`);
    } else {
        console.log(`${numero} Está fora do intervalo de à 50`);
    }
}

verificarIntervalo()
verificarIntervalo(9)
verifcarIntervalo(21)
verifcarIntervalo(45)
verifcarIntervalo(55)


//6 - Função para exibir informações de um usuário
// Crie uma função chamada exibirUsuario(nome, idade), que recebe o nome e a idade de uma pessoa e exibe "Nome: X, Idade: Y anos".
//Exemplo: exibirUsuario("Gleidson", 30) → Exibe "Nome: Gleidson, Idade: 30 anos".

function exibirUsuario(){
    let nome = "Fernanda";
    let nascimento = 1996;

    console.log("Nome: " + nome + "  Idade: " + (2026 - nascimento) + " anos.")
}
exibirUsuario()

// 7 -Função para somar dois números e exibir o resultado
//Crie uma função chamada somarNumeros(a, b), que recebe dois números e exibe a soma deles no console.
//Exemplo: somarNumeros(5, 8) → Exibe "A soma é 13".

function somarNumeros(){
    let numeroA = 10;
    let numeroB = 20;

    console.log("A soma dos números A e B: " + (numeroA + numeroB))
}
somarNumeros()

