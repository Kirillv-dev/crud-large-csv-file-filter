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
 ## Description 

User endpoints:
- User registration and sign in (JWT token), fields: username, first name, last
name, password
- Endpoint to change user’s password
Product endpoints:
- Endpoint to show all details about a specific product
- add a new product
- edit a specific product
Only registered users can create a product.

Separate endpoint - unrelated to the endpoints above:
- Endpoint for large file upload with emails to filter the file from
emails with the ‘yahoo.com’ domain and return the filtered file. 
 
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



