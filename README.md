
## Peek-bot


Esse bot tem como finalidade fazer consultas em mensagens de consumers do Fury automaticamente.


## 1) Pré Requisitos 

Ter NodeJS instalado em sua máquina <br>
Estar conectado na VPN 


#### Como utilizar

No terminal, navegar até a raíz do projeto e executar o comando:
```sh
$ npm install
```

No arquivo src/bot.js, inserir nas variáveis username e password suas informações de login do fury. A variável consumerName também deve ser populada com o nome do consumer
que você deseja dar o peek :
```Javascript
const username = ''
const password = ''
const consumerName = ''
```

Tendo feito os passos anteriores, rodar o seguinte comando para executar o bot: 
```sh
$ node src/bot.js
````

