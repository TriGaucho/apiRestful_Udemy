**Curso**: [Criando API's RESTful utilizando TypeScript, Node.js, mongo](https://www.udemy.com/course/criando-apis-restful-utilizando-typescript-node-e-mongodb/)

## Ambiente de Desenvolvimento:

* NodeJS
* TypeScript
* MongoDB
* Docker
  
------------------------------

## Criação do Ambiente Docker para o MongoDB
**Imagem**:  
 ```docker pull tutum/mongodb```

**Contêiner Sem senha**:  
```docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb```

**Contêiner Com senha**:  
```docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_PASS="mypass" tutum/mo```

------------------------------

## Configuração do MongoDB
**Conexão ao MongoDB**: [RoboMongo](https://robomongo.org/download)

------------------------------

## Pacotes
**Comando**:  
```npm i typescript ts-node body-parser express http-status --save```

**typescript**: JavaScript com sintaxe  
**ts-node**: Mecanismo de execução TypeScript e REPL para Node.js  
**body-parser**: Interceptador de requisição  
**express**: Criação de rotas  
**http-status**: Utilitário para interagir com códigos de status HTTP.

**@types**:  
```npm i @types/node @types/body-parser @types/express @types/http-status --save-dev```

**Mongoose**: ferramenta de modelagem de objetos MongoDB  
```npm i mongoose --save```  
```npm i @types/mongoose --save-dev```  

------------------------------

## Configuração do **TypeScript**
1. Criação do arquivo **tsconfig.jason**
2. Cuidar configuração dos diretorios **rootDir**, **outDir** e **baseUrl**
3. Para debug usar **resolveJsonModule** **sourceMap** true

------------------------------

## Arquitetura
1. **startUp.ts**: Configuração dos middlewares, chamada ao Express e pacotes, configuração das rotas e conexão com banco
2. **program.ts**: Configuração de porta e criação do servidor (```server.listen()```). Chama **StartUp**.
3. **models**: schema do mongo.
4. **repository**: mapeamento das models para o mongoDb
5. **services**: 
6. **controller**: 
7. **infra**: repositorio de commons e de conexão com banco