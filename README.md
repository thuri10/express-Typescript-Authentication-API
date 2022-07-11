# ExpressJS And Typescript AUthentication API

This Project is about Learning Typescript by Building a CRUD API using `Express.js` and MongoDB

## Description

This is a small project to show implementation of Authentication and Authorization in a CRUD API.

## Technologies used Include

- Package Manager - yarn
- Backend Framework - ExpressJS
- Language - Typescript

## API Endpoints

/users
`get` - /users/:uuid - retrieve a single user
`post` - /users/:uuid - Delete a single user
`put` - /users/:uuid - Update a single user

/ticket
`get` - /ticket/:uuid - To retrieve a single ticket
`put` - /ticket/:uuid - To update a single ticket
`post` - /ticket/:uuid - To delete a single ticket
`post` - /ticket - Create a new ticket

/login
`post` - Login in a user using the provided username and password and generate JWT token

/logout
`post` - Logout an User and Invalidate JWT tokens

## Secret Key Generation

For generating a secret key I use python secret module.

```python
    import secrets
    secrets.token_hex(16)
```

## Deployment and testing

### Testing and Development

To run the Api in a local Environment

```js
yarn run dev
```

To build(Typescript to javascript)

```js
yarn run build
```

To deploy your application we use docker container

## Next steps

- Implement Refresh Tokens
- Associate the Ticket schema with User Model;
- Add Swagger Documentation to our API
- Write Tests for our API

## NB

I have not gitignored the `.env` file because this is Educational.

For MongoDB I am using a docker container
