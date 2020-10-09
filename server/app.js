const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const app = express()

mongoose.connect(
  'mongodb+srv://shoya_kosuge:0082650@cluster0.a6eh3.mongodb.net/posts?retryWrites=true&w=majority'
)
mongoose.connection.once('open', () => {
  console.log('db connected')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('listening port 4000')
})
