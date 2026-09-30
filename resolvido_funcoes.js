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