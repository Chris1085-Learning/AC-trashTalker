const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// Routers
const index = require('./controllers/index')
app.get('/', index.getIndex)
// app.get('/search', index.getSearch)
// app.get('/restaurants/:id', index.getShowpage)

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
