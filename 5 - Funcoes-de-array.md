## Funções de String

O javascript permite que acessemos funções a partir de um array, funções essas que nos permite fazer diversas operações como:

### length - conta a quantidade de letras

```javascript
let nomes = ["Isabelle", "Samuel", "Camila", "Pedro"];
console.log(nomes.length);
// saída
4
```

### push() - adiciona um elemento no fim do array relacionado

```javascript
nomes.push("João");
console.log(nomes);
// saída
["Isabelle", "Samuel", "Camila", "Pedro", "João"]
```

### unshift() - adiciona um elemento no começo do array relacionado

```javascript
nomes.unshift("Tereza");
console.log(nomes);
// saída
["Tereza", "Isabelle", "Samuel", "Camila", "Pedro", "João"]
```

### splice(aPartirDessaPosicao, removaEssaQuantidade) - remove itens do array apartir de uma posição específica

```javascript
nomes.splice(2, 1);
console.log(nomes);
// saída
["Tereza", "Isabelle", "Camila", "Pedro", "João"]
```

### join(unificador) - junta elementos do array, formando uma string

```javascript
let data = [24, 02, 2025];
console.log(materia.join("/"));
// saída
24/02/2025
```

lista completa [aqui](https://www.w3schools.com/js/js_array_methods.asp)

## Exercícios

#### 1 - Dobrar os valores de um array
Crie uma função chamada dobrarValores(numeros) que recebe um array de números e retorna um novo array com todos os valores dobrados.
Exemplo: dobrarValores([1, 2, 3]) → Retorna [2, 4, 6]
Método: .map()

#### 2 - Filtrar números pares de um array
- Crie uma função chamada filtrarPares(numeros) que recebe um array de números e retorna um novo array contendo apenas os números pares.
- Exemplo: filtrarPares([1, 2, 3, 4, 5, 6]) → Retorna [2, 4, 6]
- Método: .filter()

#### 3 - Somar todos os números de um array
- Crie uma função chamada somarValores(numeros) que recebe um array de números e retorna a soma de todos os elementos.
- Exemplo: somarValores([1, 2, 3, 4]) → Retorna 10
- Método: .reduce()

#### 4 - Verificar se um array contém um número específico
- Crie uma função chamada contemNumero(numeros, valor) que recebe um array de números e um número específico, retornando true se o número existir no array e false caso contrário.
- Exemplo: contemNumero([10, 20, 30], 20) → Retorna true
- Método: .includes()

#### 5 - Ordenar um array de números em ordem crescente
- Crie uma função chamada ordenarArray(numeros) que recebe um array de números e retorna um novo array ordenado em ordem crescente.
- Exemplo: ordenarArray([3, 1, 4, 1, 5]) → Retorna [1, 1, 3, 4, 5]
- Método: .sort((a, b) => a - b)

#### 6 - Concatenar dois arrays
- Crie uma função chamada juntarArrays(arr1, arr2) que recebe dois arrays e retorna um novo array contendo todos os elementos de ambos.
- Exemplo: juntarArrays([1, 2], [3, 4]) → Retorna [1, 2, 3, 4]
- Método: .concat()

#### 7 - Remover elementos duplicados de um array
- Crie uma função chamada removerDuplicados(arr) que recebe um array e retorna um novo array sem elementos repetidos.
- Exemplo: removerDuplicados([1, 2, 2, 3, 4, 4]) → Retorna [1, 2, 3, 4]
- Método: new Set(arr)

#### 8 - Criar um array de nomes a partir de um array de objetos
- Crie uma função chamada obterNomes(pessoas) que recebe um array de objetos contendo nomes e idades e retorna um array apenas com os nomes.
- Exemplo: const pessoas = [{ nome: "Ana", idade: 25 }, { nome: "Pedro", idade: 30 }];
- obterNomes(pessoas); // Retorna ["Ana", "Pedro"]
- Método: .map()

#### 9 - Encontrar o primeiro número maior que 10 em um array
- Crie uma função chamada encontrarMaiorQueDez(numeros) que recebe um array de números e retorna o primeiro número maior que 10.
- Exemplo: encontrarMaiorQueDez([5, 8, 12, 3, 20]) → Retorna 12
- Método: .find()

#### 10 - Contar quantos números são maiores que 10 em um array
- Crie uma função chamada contarMaioresQueDez(numeros) que recebe um array de números e retorna a quantidade de números maiores que 10.
- Exemplo: contarMaioresQueDez([5, 8, 12, 3, 20]) → Retorna 2
- Método: .filter().length
