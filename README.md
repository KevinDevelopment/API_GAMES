# API DE GAMES

Esta API é utilizada para cadastrar, listar, editar e excluir games á sua escolha, utilizando todos os verbos HTTP, (GET, POST, PUT, DELETE), usando mysql para persistência de dados, e Sequelize como ORM de banco de dados;

## Endpoints

### GET /games
Esse endpoint é responsável por retornar a listagem de todos os games cadastrados no banco de dados, ordenando pelo ID do game, de forma decrescente;
#### Parametros 
Não recebe nenhum parametro
#### Respostas
##### OK ! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os games!
Exemplo de resposta:

```
"games": [
        {
            "id": 2,
            "title": "CS GO",
            "year": "2015",
            "price": 443,
            "createdAt": "2022-10-21T19:26:29.000Z",
            "updatedAt": "2022-10-21T19:26:29.000Z"
        },
        {
            "id": 1,
            "title": "eeeeeee",
            "year": "33333",
            "price": 333333,
            "createdAt": "2022-10-06T00:00:19.000Z",
            "updatedAt": "2022-10-06T00:00:19.000Z"
        }
    ]
}   

```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição, Motivos: token inválido, Token expirado

