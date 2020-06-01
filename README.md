# GraphQL Playground

- Exercise / Self learning
- Various experiments

## Specs

- graphql
- graphql-yoga (graphql project setup)
- Babel (for modern javascript)

## Run GraphQL Server

1. Start GraphQL Server

   ```bash
   $ npm start
   ```

2. Browse to http://localhost:4000/

   This will show you a GraphQL Playground which is provided by graphql-yoga.
   On the left pane if you write GraphQL query like this:

   ```graphql
   query {
     name
   }

   or just,

   {
     name
   }
   ```

   You will get:

   ```json
   {
     "data": {
       "name": "seokje"
     }
   }
   ```

   If you define an attribute in resolver that does not exist in schema, you'll get something like this and app will crash.

   `Query.name2 defined in resolvers, but not in schema`

   If resolver returns diffrent type of value defined in schema then you'll get error in the Graphql playground.

   `Int cannot represent non-integer value: \"seokje\"`

## GraphQL Syntax

Get all users

  ```graphql
  query {
    users {
      id
      name
      age
      gender
    }
  }
  ```

Get a user by id

  ```graphql
  query {
    user(id: 1) {
      name
    }
  }
  ```



## Reference sites/docs

- [Get started - js](https://graphql-kr.github.io/code/#javascript)
- [Babel](https://velog.io/@ground4ekd/nodejs-babel)
- [GraphQL로 API 서버 만들기](https://anpigon.github.io/blog/kr/@anpigon/graphql-1-graphql-api--1541861904811/)
