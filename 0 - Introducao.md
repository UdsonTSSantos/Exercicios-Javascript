## Introdução ao Javascript

Javascript é uma linguagem de programação muito utilizada na web, para criar sites, blogs e outros sistemas web, mais recentemente o javascript vem sendo utilizado também em outros produtos como aplicativos, jogos e microserviços.

### Características

- Javascript é fracamente tipado, o tipo de dado é inferido no momento da atribuição;
- Javascript é case sensitive, ele diferencia letras minúsculas de maiúsculas;
- Javascript é interpretado, ele precisa de um navegador ou do [Node](https://nodejs.org/pt) para ser utilizado;

### Extensões úteis

- Code Runner
- Javascript Auto Backticks
- Auto Complete Tag

### Variáveis

As vezes durante a execução do nosso programa torna-se necessário o armazenamento de valores para serem utilizados em outras operações, e fazemos isso através da declaração de variáveis:

```javascript
let idade = 34; // declaração
idade = 35; // reatribuição
```

### Constantes

Constantes tem o mesmo propósito que as variáveis, porem, seu valor não pode ser reatribuido:

```javascript
const PI = 34; // declaração
PI = 35; // se tentar isso vai receber um erro...
```

### Regras de nomenclatura

Quando for nomear suas variáveis atente-se em algumas regras:
- Não pode começar com numero;
- Não pode começar com caractere especial ex: @,#,$,&;
- Se o nome for composto não separe com espaços, invés disso utilize um desses métodos: nomeComposto, NomeComposto, nome_composto;

### Tipos de dados

As informações que armazenamos nas variáveis podem ser de diferentes tipos:

numero|number
```javascript
let numero = 2; 
let numeroNegativo = -2; 
let numeroDecimal =  2.0;
```

texto|string
```javascript
let nome = "Reforço Dev"; // strings sempre devem estar entre aspas
```

boleanos|boolean
```javascript
let fumante = false;
let possuiCNH = true;
```

### Operadores

Operadores estão divididos em algumas categorias, veja abaixo as principais

#### Operadores de atribuição

```javascript
// =  : atribuidor
// += : atribuidor incremental
// -= : atribuidor decremental
// *= : atribuidor multiplicador
// /= : atribuidor divisão
```

#### Operadores aritméticos

```javascript
// + : adição
// - : subtração
// / : divisão
// * : multiplicação
// % : resto da divisão
```

#### Operadores de comparação

```javascript
// == : igualdade
// != : diferença
// <  : menor que
// >  : maior que
// <= : menor ou igual que
// >= : maior ou igual que
// === : estritamente igual
// !== : estritamente diferente
```

#### Operadores lógicos

```javascript
// && : e lógico
// || : ou lógico
// !  : negação
```
