## Funções

Basicamente é uma forma de encapsular um trecho de código que pode ser reutilizado posteriormente.

As funções podem ou não receber parâmetros, podem ou não retornar uma resposta para o ponto de chamada.

### simples:

```javascript
// declaração
function boasVindas(){
  document.write("Olá");
}

// chamada
boasVindas();
```

### com parâmetro:

```javascript
function boasVindas(nome){
  document.write(`Olá ${nome}`);
}

// chamada
boasVindas("Gleidson");
// saída
Olá Gleidson
```

### com parâmetro e retorno:

```javascript
function soma(a, b){
  return a + b;
}

// chamada
document.write(`O resultado de 2 + 2 é: soma(2, 2)`);
// saída
O resultado de 2 + 2 é: 4
```

## Exercícios para resolver com funções simples

#### 1 - Função para exibir uma mensagem de boas-vindas
Crie uma função chamada boasVindas que exiba no console a mensagem "Bem-vindo ao curso de JavaScript!".
Chame a função para testá-la.

#### 2 - Função para exibir os números de 1 a 10
Crie uma função chamada contarAteDez que imprima no console os números de 1 a 10.
Utilize um loop for dentro da função.

#### 3 - Função para mostrar a data e hora atual
Crie uma função chamada mostrarDataHora que exiba no console a data e a hora atual.
Utilize new Date() para obter a data e toLocaleString() para formatá-la.

#### 4 - Função para imprimir a tabuada do 3
Crie uma função chamada tabuadaTres que imprima a tabuada do 3 (de 3 × 1 até 3 × 10).
Utilize um loop for dentro da função.

#### 5 - Função para exibir um alerta na tela
Crie uma função chamada mostrarAlerta que exiba um alert() com a mensagem "Isso é um alerta do JavaScript!".
Teste a função em um ambiente compatível com alert(), como o navegador.

## Exercícios para resolver com funções que recebem parâmetro

#### 1 - Função para exibir uma mensagem personalizada
Crie uma função chamada exibirMensagem(mensagem), que recebe um texto como parâmetro e exibe no console.
Exemplo: exibirMensagem("Olá, seja bem-vindo!") → Exibe "Olá, seja bem-vindo!" no console.

#### 2 - Função para repetir uma palavra várias vezes
Crie uma função chamada repetirPalavra(palavra, vezes), que recebe uma palavra e um número e a exibe repetida no console.
Exemplo: repetirPalavra("JavaScript", 3) → Exibe "JavaScript JavaScript JavaScript".

#### 3 - Função para imprimir a tabuada de um número
Crie uma função chamada mostrarTabuada(numero), que recebe um número e imprime sua tabuada de 1 a 10.
Exemplo: mostrarTabuada(4) → Exibe a tabuada do 4.

#### 4 - Função para contar até um número específico
Crie uma função chamada contarAte(limite), que recebe um número e imprime de 1 até esse número.
Exemplo: contarAte(5) → Exibe 1, 2, 3, 4, 5.

#### 5 - Função para verificar se um número é par ou ímpar
Crie uma função chamada verificarParOuImpar(numero), que recebe um número e exibe "Par" se for par e "Ímpar" se for ímpar.
Exemplo: verificarParOuImpar(7) → Exibe "Ímpar".

#### 6 - Função para exibir informações de um usuário
Crie uma função chamada exibirUsuario(nome, idade), que recebe o nome e a idade de uma pessoa e exibe "Nome: X, Idade: Y anos".
Exemplo: exibirUsuario("Gleidson", 30) → Exibe "Nome: Gleidson, Idade: 30 anos".

#### 7 - Função para somar dois números e exibir o resultado
Crie uma função chamada somarNumeros(a, b), que recebe dois números e exibe a soma deles no console.
Exemplo: somarNumeros(5, 8) → Exibe "A soma é 13".

#### 8 - Função para criar uma linha de asteriscos
Crie uma função chamada desenharLinha(quantidade), que recebe um número e imprime uma linha de asteriscos com essa quantidade.
Exemplo: desenharLinha(5) → Exibe "*****".

#### 9 - Função para converter Celsius para Fahrenheit e exibir o resultado
Crie uma função chamada converterTemperatura(celsius), que recebe uma temperatura em Celsius e exibe a conversão para Fahrenheit.
Fórmula: F = (C × 9/5) + 32.
Exemplo: converterTemperatura(0) → Exibe "0°C é igual a 32°F".

#### 10 - Função para verificar se um número está dentro de um intervalo
Crie uma função chamada verificarIntervalo(numero, min, max), que recebe um número e dois valores limite, verificando se o número está dentro desse intervalo.
Exemplo: verificarIntervalo(15, 10, 20) → Exibe "15 está dentro do intervalo de 10 a 20".

## Exercícios para resolver com funções que recebem parâmetro e retornam 

#### 1 - Função para somar dois números
Crie uma função chamada somar(a, b) que recebe dois números e retorna a soma deles.
Exemplo: somar(4, 7) → Retorna 11.

#### 2 - Função para calcular o quadrado de um número
Crie uma função chamada quadrado(numero) que recebe um número e retorna o seu quadrado.
Exemplo: quadrado(5) → Retorna 25.

#### 3 - Função para converter Celsius para Fahrenheit
Crie uma função chamada converterParaFahrenheit(celsius), que recebe um valor em Celsius e retorna a conversão para Fahrenheit.
Fórmula: F = (C × 9/5) + 32.
Exemplo: converterParaFahrenheit(0) → Retorna 32.

#### 4 - Função para verificar se um número é par
Crie uma função chamada ehPar(numero), que recebe um número e retorna true se for par e false se for ímpar.
Exemplo: ehPar(8) → Retorna true.

#### 5 - Função para calcular o fatorial de um número
Crie uma função chamada fatorial(n), que recebe um número inteiro positivo e retorna seu fatorial.
Exemplo: fatorial(5) → Retorna 120.

#### 6 - Função para encontrar o maior entre dois números
Crie uma função chamada maiorNumero(a, b), que recebe dois números e retorna o maior deles.
Exemplo: maiorNumero(12, 7) → Retorna 12.

#### 7 - Função para inverter uma string
Crie uma função chamada inverterTexto(texto), que recebe uma string e retorna a string invertida.
Exemplo: inverterTexto("JavaScript") → Retorna "tpircSavaJ".

#### 8 - Função para calcular a média de três números
Crie uma função chamada calcularMedia(a, b, c), que recebe três números e retorna a média deles.
Exemplo: calcularMedia(7, 8, 9) → Retorna 8.

#### 9 - Função para contar quantas vogais existem em uma string
Crie uma função chamada contarVogais(texto), que recebe uma string e retorna o número de vogais contidas nela.
Exemplo: contarVogais("programação") → Retorna 5.

#### 10 - Função para verificar se um número está dentro de um intervalo
Crie uma função chamada estaNoIntervalo(numero, min, max), que recebe um número e dois limites (min e max) e retorna true se o número estiver dentro do intervalo, e false caso contrário.
Exemplo: estaNoIntervalo(15, 10, 20) → Retorna true.
