# sharesAPI
## POSTGRESQL - SEQUELIZE - NODE.JS EXPRESS REST API

With this API, 
 - A Share can be sold
 - A Share can be bought

## Sell share
`POST /sellShare`
### Request
curl -i http://localhost:3000/sellShare -H 'Content-Type: application/json' -d '{"shareSymbol": "ABC", "quantity": 10, "userId": 1, "portfolioId": 1}'
### Response
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 56
ETag: W/"38-DCr1NmL54s5lHhEYr+PFTZJTFqQ"
Date: Sun, 30 Jul 2023 20:53:26 GMT
Connection: keep-alive
Keep-Alive: timeout=5

## Buy Share
`POST /sellShare`
### Request
curl -i http://localhost:3000/sellShare -H 'Content-Type: application/json' -d '{"shareSymbol": "ABC", "quantity": 10, "userId": 1, "portfolioId": 1}'
### Response
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 159
ETag: W/"13a-NWS5CC9k0vJ7Js6Ci5eAXyhUohQ"
Date: Sun, 30 Jul 2023 20:51:56 GMT
Connection: keep-alive
Keep-Alive: timeout=5

## Run Project

 - Run project with npm

npm start