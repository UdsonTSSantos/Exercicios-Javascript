## Estruturas de condição

São estruturas que podem mudar a ordem de execução de um programa, e podem ser utilizadas da seguinte maneira: 

### if/else:
Um dos mais utilizados, geralmente testa se uma condição é atendida entre os parenteses e direciona conforme o resultado.

```javascript
let numero = 2;
if(numero > 1){
    // caso seja verdadeiro
} else {
    // caso seja falso
}
```

### switch/case:
Mais utilizado quando se tem um conjunto de resultados pré-definido, ex: dias da semana, são somente 7 e essa informação nunca mudará.

```javascript
let dia = "segunda";
switch(dia){
    case "segunda":
    // caso dia seja segunda
    break;
    case "terça":
    // caso dia seja terça
    break;
    ...
}
```

### operador ternário:
Mais utilizado quando se quer testar uma condição sem montar uma estrurura multilinha.

```javascript
condicao ? "caso seja verdadeiro" : "caso seja falso"
```

## Exercícios para resolver com if/else

#### 1 - Verificação de Idade:
Escreva um programa que recebe a idade de uma pessoa e imprime "Maior de idade" se for 18 anos ou mais, e "Menor de idade" caso contrário.

#### 2 - Número Positivo, Negativo ou Zero:
Solicite um número ao usuário e exiba se ele é positivo, negativo ou zero.

#### 3 - Maior entre Dois Números:
Peça dois números e mostre qual é o maior. Se forem iguais, exiba "Os números são iguais".

#### 4 - Par ou Ímpar:
Peça um número e informe se ele é par ou ímpar.

#### 5 - Cálculo de Média:
Receba três notas de um aluno, calcule a média e exiba "Aprovado" se for 7 ou mais, "Recuperação" se for entre 5 e 6.9, e "Reprovado" se for abaixo de 5.

#### 6 - Desconto em Compra:
Se o valor da compra for maior que R$100, aplique um desconto de 10% e exiba o novo valor.

#### 7 - Verificação de Ano Bissexto:
Peça um ano e verifique se é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).

#### 8 - Acesso a um Sistema:
Peça um nome de usuário e uma senha. Se forem "admin" e "1234", exiba "Acesso permitido", caso contrário, "Acesso negado".

#### 9 - Frete Grátis:
Se o valor da compra for maior ou igual a R$200, ofereça frete grátis, caso contrário, cobre R$20.

#### 10 - Número dentro de um Intervalo:
Solicite um número e exiba "Está no intervalo" se ele estiver entre 10 e 50, caso contrário, exiba "Fora do intervalo".

## Exercícios para resolver com switch/case

#### 1 - Dia da Semana:
Peça um número de 1 a 7 e exiba o dia correspondente (1 - Domingo, 2 - Segunda...).

#### 2 - Nota por Conceito:
Peça uma nota (A, B, C, D ou F) e exiba o conceito correspondente ("Ótimo", "Bom", "Regular", "Ruim", "Reprovado").

#### 3 - Calculadora Simples:
Peça dois números e uma operação matemática (+, -, *, /) e exiba o resultado da operação.

#### 4 - Mês do Ano:
Peça um número de 1 a 12 e exiba o nome do mês correspondente.

#### 5 - Classificação de Filme:
Peça uma classificação etária (L, 10, 12, 14, 16, 18) e exiba a faixa etária permitida para assistir ao filme.

#### 6 - Menu de Restaurante:
Exiba um menu com 3 opções de prato e peça ao usuário para escolher um número. Exiba o nome do prato escolhido.

#### 7 - Conversor de Unidades:
Peça ao usuário que escolha uma unidade de temperatura (Celsius, Fahrenheit ou Kelvin) e exiba informações sobre a conversão.

#### 8 - Classificação de Veículo:
Peça um tipo de veículo (carro, moto, caminhão) e exiba uma mensagem com a categoria correspondente.

#### 9 - Estado Civil:
Peça ao usuário para inserir seu estado civil (Solteiro, Casado, Divorciado, Viúvo) e exiba uma mensagem correspondente.

#### 10 - Código de Produto:
Peça um código numérico e exiba o nome do produto correspondente (ex: 1 - Arroz, 2 - Feijão, 3 - Leite).

