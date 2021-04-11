const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121

let db,
    dbConnectionStr = 'mongodb+srv://ParejaOnPurpose:ParejaOnPurpose@cluster0.8osuw.mongodb.net/
    todo?retryWrites=true&w=majority',
    dbName = 'todo'

MongoClient.connect(dbConnectionsStr, {useUnifiedTopology: true})
  .then(client => {
    console.log(`Hey, connected to ${dbName} database`)
    db = client.db(dbName)
  })
.catch (err)=> {
  console.log(err)
})
  app.listen(Port, ()=>{
      console.log('Server is running, you better catch it.')
  })
