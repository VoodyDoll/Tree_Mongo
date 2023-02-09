const express = require('express')
const app = express()
const port = 3000
const { engine } = require ('express-handlebars')

app.set('view','hbs')

app.engine('hbs', engine({
	extname:'hbs',
	defaultLayout:'index',
	partialsDir:'./views/partials'
}));

app.use(express.static('public'))

app.get('/', (req, res)=> {
  res.render('main',{layout:'planB'})
})

app.listen(port, ()=> {
  console.log('Example app listening on port')
})