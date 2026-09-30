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

