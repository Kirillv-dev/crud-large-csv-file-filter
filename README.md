## Installation

```bash
$ npm install
```  

## Set up the app 

Fill config/default.json with your values

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```  

## API 

Use Bearer token for auth

```http
POST users/signIn 
```
```http
POST users/signUp 
```
```http
PUT users/changePassword 
```

```http
POST emails/ 
```

```http
PUT products/ 
```
```http
POST products/ 
```

```http
GET /products/:id
```
