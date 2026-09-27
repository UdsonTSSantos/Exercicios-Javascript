## Estruturas de repetição

São estruturas que repetir um trecho de código por um determinado numero de vezes ou enquanto uma condição for satisfeita. 

Muito utilizadas para percorrer arrays.

### for:
Geralmente utilizado quando se sabe exatamente quantas vezes o código deve ser repetido.

```javascript
for(let volta = 0; volta < 10; volta++){
    // isso vai ser executado 10x
}
```

### while:
Mais utilizado quando não sabemos exatamente de quantas voltas precisamos.

```javascript
let limite = x; // imagine um numero para X
while(limite < X){ // enquanto limite não chegar em X continurá executando
    // executa...
    limite++ // incrementa o limite, quando limite chegar a 10 a repetição será interferida
}
```

## Exercícios para resolver com for

#### 1 - Contagem de 1 a 10:
Use um loop for para imprimir os números de 1 a 10 no console.

#### 2 - Tabuada do 5:
Utilize um loop for para imprimir a tabuada do 5 (de 5 × 1 até 5 × 10).

#### 3 - Soma dos primeiros 100 números naturais:
Some todos os números de 1 a 100 e exiba o resultado.

#### 4 - Números pares de 1 a 50:
Exiba todos os números pares de 1 a 50.

#### 5 - Contagem regressiva de 10 a 0:
Imprima uma contagem regressiva de 10 até 0.

#### 6 - Impressão de uma lista de nomes:
Dada uma lista ["Ana", "Carlos", "Beatriz", "Mateus"], utilize um for para exibir cada nome no console.

#### 7 - Números ímpares de 1 a 30:
Exiba todos os números ímpares de 1 a 30.

#### 8 - Fatorial de um número:
Peça um número e calcule o seu fatorial utilizando um loop for.

#### 9 - Multiplicação acumulada:
Multiplique todos os números de 1 a 10 e exiba o resultado final.

#### 10 - Impressão de um triângulo de asteriscos:
Utilize um for para imprimir uma pirâmide de 5 linhas como esta:
```javascript
    *
   ***
  *****
 *******
*********
```


## Exercícios para resolver com while

#### 1 - Contagem de 1 a 10:
Use um while para imprimir os números de 1 a 10.

#### 2 - Tabuada do 7:
Utilize um while para imprimir a tabuada do 7 (de 7 × 1 até 7 × 10).

#### 3 - Soma dos primeiros 50 números naturais:
Some todos os números de 1 a 50 utilizando um while.

#### 4 - Contagem regressiva de 20 a 0:
Exiba uma contagem regressiva de 20 até 0.

#### 5 - Números pares de 1 a 100:
Exiba todos os números pares de 1 a 100.

#### 6 - Adivinhação de número:
Gere um número aleatório entre 1 e 10 e peça ao usuário para adivinhar. Continue pedindo até que ele acerte.

#### 7 - Soma de números até atingir 100:
Continue pedindo números ao usuário e somando-os até que o total seja 100 ou mais.

#### 8 - Validação de senha:
Peça ao usuário para inserir uma senha e continue pedindo até que ele insira a senha correta ("1234").

#### 9 - Número dentro do intervalo:
Peça um número ao usuário e continue pedindo até que ele insira um número entre 10 e 20.

#### 10 - Multiplicação acumulada até 1 milhão:
Multiplique um número por 2 repetidamente até que ele ultrapasse 1 milhão.


