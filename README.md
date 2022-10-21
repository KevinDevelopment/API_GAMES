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
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição, Motivos: token inválido, Token expirado

