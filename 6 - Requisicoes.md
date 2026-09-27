## Requisições

Rotineiramente desenvoolvemos aplicações que precisam de informações que são disponibilizadas via API, para solicitar essas informações precisamos fazer uma requisição, o javascript possui uma função nativa para isso:

```javascript
fetch("url-da-api")
```

A função fetch é uma retorna uma promisse que precisa ser tratada, geralmente por uma função .then(), o retorno do fetch precisa ser transformado em json através da função .json()

```javascript
fetch("url-da-api")
.then(resposta => resposta.json())
```

A função .json() também retorna uma Promisse que precisa ser tratada novamente

```javascript
fetch("url-da-api")
.then(resposta => resposta.json())
.then(respostaTratada => {
  console.log(respostaTratada)
})
```

## Exercícicos

#### 1 - Utilize a API [ViaCEP](https://viacep.com.br/) para criar uma tela com um formulário de endereço que vai ser preenchido automaticamente quando o CEP for informado.
- Exemplo de tela: [Figma](https://www.figma.com/design/1smeHjK8PoFtzw4NCaYv7l/Refor%C3%A7oDev-FormAddress?node-id=0-1&p=f&t=0n67XozfK6Gc8rrC-0) 
