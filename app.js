let express = require('express')
let app = express()
let { engine } = require ('express-handlebars')
// let bootstrap=require('bootstrap')
let port = 3000
let indexRouter = require('./routes/index');
// let usersRouter = require('./routes/users');

 
  

// app.use("/js",express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")))
  
  

app.set('view engine','hbs')

app.engine('hbs', engine({
	extname:'hbs',
	defaultLayout:'index',
	partialsDir:'./views/partials'
}));

app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use("/js",express.static(__dirname + "/node_modules/bootstrap/dist/js"))
// Подключение роутеров
app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.listen(port, ()=> {
  console.log('Example app listening on port')
})