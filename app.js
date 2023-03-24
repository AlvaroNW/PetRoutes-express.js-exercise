const express = require('express')
const app = express()
const port = 5000
const { Router } = require('express');

const petList = require('./petList')

const petRoutes = require('./routes/petRoutes');


//middleware
app.use('/animals', petRoutes);

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1>
  <p>Browse through the links below to find your new furry friend</p>
  <ul>
  <li><a href='/animals/dogs'>Dogs</a></li>
  <li><a href='/animals/cats'>Cats</a></li>
  <li><a href='/animals/rabbits'>Rabbits</a></li>
  </ul>`
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})