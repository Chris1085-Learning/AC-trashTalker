const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// Setting bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
// Routers
const index = require('./controllers/index')
app.get('/', index.getIndex)
app.post('/', index.postTalk)

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
