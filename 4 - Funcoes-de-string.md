## Funções de String

O javascript permite que acessemos funções a partir de uma string, funções essas que nos permite fazer diversas operações como:

### length - conta a quantidade de letras

```javascript
let materia = "Javascript";
console.log(materia.length);
// saída
10
```

### toLowerCase() - transforma o texto em letras minusculas

```javascript
console.log(materia.toLowerCase());
// saída
javascript
```

### toUpperCase() - transforma o texto em letras maiusculas

```javascript
console.log(materia.toUpperCase());
// saída
JAVASCRIPT
```

### replace(encontreIsso, troquePorIsso) - substitui uma string por outra

```javascript
console.log(materia.replace("java", "type"));
// saída
typescript
```

### split(delimitador) - quebra a string em array usando o delimitador como referência

```javascript
let data = "24/02/2025"
console.log(materia.split("/"));
// saída
[24, 02, 2025]
```

lista completa [aqui](https://www.w3schools.com/js/js_string_methods.asp)

## Exercícios

#### 1 - Transformar uma string em maiúsculas
- Crie uma função chamada paraMaiusculas(texto) que recebe uma string e retorna a versão em maiúsculas dela.
- Exemplo: paraMaiusculas("javascript") → Retorna "JAVASCRIPT"
- Método: .toUpperCase()

#### 2 - Transformar uma string em minúsculas
- Crie uma função chamada paraMinusculas(texto) que recebe uma string e retorna a versão em minúsculas dela.
- Exemplo: paraMinusculas("JavaScript") → Retorna "javascript"
- Método: .toLowerCase()

#### 3 - Contar o número de caracteres de uma string
- Crie uma função chamada contarCaracteres(texto) que recebe uma string e retorna o número de caracteres.
- Exemplo: contarCaracteres("JavaScript") → Retorna 10
- Método: .length

#### 4 - Extrair os primeiros N caracteres de uma string
- Crie uma função chamada extrairInicio(texto, n), que recebe uma string e um número n e retorna os n primeiros caracteres.
- Exemplo: extrairInicio("JavaScript", 4) → Retorna "Java"
- Método: .slice(0, n)

#### 5 - Substituir parte de uma string
- Crie uma função chamada substituirPalavra(frase, antiga, nova), que recebe uma frase, uma palavra a ser substituída e a nova palavra, retornando a frase modificada.
- Exemplo: substituirPalavra("Eu amo Java", "Java", "JavaScript") → Retorna "Eu amo JavaScript"
- Método: .replace(antiga, nova)

#### 6 - Verificar se uma string contém uma palavra específica
- Crie uma função chamada contemPalavra(frase, palavra), que recebe uma frase e uma palavra, e retorna true se a palavra estiver presente e false caso contrário.
- Exemplo: contemPalavra("Aprender JavaScript é divertido!", "JavaScript") → Retorna true
- Método: .includes(palavra)

#### 7 - Dividir uma string em palavras
- Crie uma função chamada dividirEmPalavras(frase), que recebe uma string e retorna um array com as palavras separadas.
- Exemplo: dividirEmPalavras("Eu gosto de programar") → Retorna ["Eu", "gosto", "de", "programar"]
- Método: .split(" ")

#### 8 - Remover espaços extras no início e no final de uma string
- Crie uma função chamada removerEspacos(texto), que recebe uma string e retorna a versão sem espaços no início e no final.
- Exemplo: removerEspacos(" Olá Mundo! ") → Retorna "Olá Mundo!"
- Método: .trim()

#### 9 - Reverter uma string
- Crie uma função chamada reverterString(texto), que recebe uma string e retorna a versão invertida dela.
- Exemplo: reverterString("JavaScript") → Retorna "tpircSavaJ"
- Método: .split("").reverse().join("")

#### 10 - Contar quantas vezes uma letra aparece em uma string
- Crie uma função chamada contarLetra(texto, letra), que recebe uma string e uma letra e retorna quantas vezes essa letra aparece na string.
- Exemplo: contarLetra("banana", "a") → Retorna 3
- Método: .split(letra).length - 1
