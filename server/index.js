let express =require('express')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql');
const schema =require('./schema/schema')
const connectDB =require('./config/db')
let colors =require('colors')
let port=process.env.PORT


//connect to database
connectDB()

let app =express()


app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'devolopment',
  })
);


app.listen(port,console.log(`Server is running on ${port}`))