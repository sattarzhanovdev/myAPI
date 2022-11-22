const fs = require('fs/promises');
const express = require('express')
const cors = require('cors')
const _ = require('lodash')
const { v4: uuid } = require('uuid')

const app = express()

app.get('/products' , (req, res) => {
  const technologies = {1:{name: 'Daniel'}}

  res.send(technologies)
})

app.listen(3000 , () => console.log('API Server is runned'))