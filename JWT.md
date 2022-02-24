# Camada de Segurança com JWT
***site***: https://jwt.io/

O JWT (JSON Web Token), ele é um sistema de transferência de dados que pode ser enviado via POST ou em um cabeçalho HTTP (header) de maneira “segura”, essa informação é assinada digitalmente por um algoritmo HMAC.

Um token JWT é dividido por três partes: **Header**, **Payload** e **Signature**:

### **Header**
O Header consiste em duas partes encodados em Base64:

* O Tipo (JWT)
* E o algoritmo de Hash que pode ser (HMAC, SHA256, RSA ...)

### **Payload**
São as informações desejadas que passamos para o token.

Os payloads são objetos JSON que contém os claims, nessa parte que nós trabalhamos com os “pedidos”, carga de dados ou dados enviados
Existem 3 tipos de claims em Payloads: **reserved**, **public**, e **private claims**.

### **Signature**
Assinatura do token, uma SECRET.

------------------------------
## Instalação:   
`npm i jsonwebtoken --save`   
`npm i @types/jsonwebtoken --save-dev`   

------------------------------

## Criação da SECRET
1. Uma classe em javascript que terá a propt secret (*./infra/configs.ts*):
~~~javascript
class Configs {   

 secret = "marvel marvel marvel" 

 } 

export default new Configs
~~~

2. Cria o middleware de validação(*./infra/auth.ts*)
3. Validação do importação do middleware no arquivo de startUp
4. IMPORTANTE: o middleware de validação deve ser executando ANTES das rotas normais.
5. Gerar o token usando sua secret privada(*./infra/configs.ts*)
6. APlicar no Header da resuição o token