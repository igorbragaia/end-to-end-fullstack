const bodyParser = require('body-parser')
const express = require('express')
const endpoints = require('./endpoints')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors');

express()
  .use(cors())
  .use(bodyParser.json())
  .use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  .post('/test', endpoints.test)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))