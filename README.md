# api_test

API:
---

* API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web.


* A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos".


TESTE DE API:
---

* Estão entre a camada de testes de UI e Unitários;
* Podem ser automatizados em paralelo com o desenvolvimento da API;
* Facilidade de validar múltiplos cenários;
* Garantir que a estrutura do JSON de retorno está correta.


PAYLOAD:
---

* É todo conteúdo enviado por um meio de transporte, é o corpo da informação, é o que é útil de tudo o que está sendo transmitido;

* Não possui um formato obrigatório. O fato de ser JSON é apenas circunstancial.


RESPONSE:
---

* É todo conteúdo recebido por um meio de transporte, é o corpo da informação de retorno;

* statusCode
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2xx (Success)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4xx (Client Error)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5xx (Server Error)


CONTRATO DE API:
---

* Teste de contrato tem o objetivo de garantir que o conteúdo fornecido não foi modificado, podemos dizer que tem a finalidade de validar se o contrato acordado não foi quebrado, deve validar schema permanece o mesmo. 

* É possível validar se os dados continuam do mesmo tipo, se a estrutura não foi modificada, valores limites, restringir valores recebidos etc...


```json
{
  "Title": "Guardians of the Galaxy Vol. 2",
  "Year": 2017,
  "Language": "English",
  "Ratings": [{
    "Source": "Rotten Tomatoes",
    "Value": "83%"
  }, {
    "Source": "Metacritic",
    "Value": "67/100"
  }],
  "Type": "movie",
  "Production": "Walt Disney Pictures",
  "Website": "https://marvel.com/guardians",
  "Response": true
}
```

REFERÊNCIAS:
---
* NodeJS - https://nodejs.org/en/download/
* supertest - https://github.com/visionmedia/supertest
* chai - http://chaijs.com/
* Mocha - https://mochajs.org/
* JOI - https://github.com/hapijs/joi
* JOI-Assert - https://github.com/Bartvds/joi-assert
* http://www.restapitutorial.com/httpstatuscodes.html
