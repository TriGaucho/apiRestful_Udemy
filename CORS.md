# Cross-Origin Resource Sharing (CORS)

CORS - Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes) é um mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web seja executado em uma origem (domínio) com permissão para acessar recursos selecionados de um servidor em uma origem distinta. Um aplicativo Web executa uma requisição cross-origin HTTP ao solicitar um recurso que tenha uma origem diferente (domínio, protocolo e porta) da sua própria origem.

Um exemplo de requisição cross-origin: o código JavaScript frontend de um aplicativo web disponível em http://domain-a.com usa XMLHttpRequest para fazer uma requisição para http://api.domain-b.com/data.json.

Por motivos de segurança, navegadores restringem requisições cross-origin HTTP iniciadas por scripts. Por exemplo, XMLHttpRequest e Fetch API seguem a política de mesma origem (same-origin policy). Isso significa que um aplicativo web que faz uso dessas APIs só poderá fazer solicitações para recursos de mesma origem da qual o aplicativo foi carregado, a menos que a resposta da outra origem inclua os cabeçalhos CORS corretos.

***font**: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS*

Através dele pode-se limitar os uso de methodos GET/PUT/DELE/POST e origens de requisição.

------------------------------

## Instalação
CORS é um pacote node.js para fornecer um middleware Connect / Express:   
```npm i cors --save```   
```npm i @types/cors --save-dev```

## Configuração
1. Importar o CORS no startUp.ts
2. Configurar **methods** e **origins**