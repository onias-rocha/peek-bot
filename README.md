
## Peek-bot


This bot is intended to make queries on consumer messages in Fury automatically.


### Prerequisites
To have NodeJS installed in your machine <br>
Be connected to the VPN


### How to use

On the terminal, cd into the project's root folder and execute the following command:
```sh
$ npm install
```

In the src/bot.js file, enter your fury login information in the ```username``` and ```password``` variables. The ```consumerName``` variable must also be populated with the consumer name
that you want to peek :
```Javascript
const username = ''
const password = ''
const consumerName = ''
```

Having done the previous steps, run the following command to start up the bot:```sh
$ node src/bot.js
````

