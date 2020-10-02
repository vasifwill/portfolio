const express = require('express')
const mostShows = require('./mostShows')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  return res.render('index', { mostShows })
})

app.get('/show/:name', (req, res) => {
  const findShow = mostShows.find((nums) => {
    return nums.name === req.params.name
  })

  return res.render('show', { tvShow: findShow })
})

app.listen(1337)
