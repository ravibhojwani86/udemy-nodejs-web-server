const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next)=>{
  console.log(`Got a request with request param ${req.url}`);
  next();
})

app.get('/', (req, res)=>{
  res.render('home.hbs', {
    currentYear: new Date().getFullYear(),
    pageTitle: 'Yo Bro',
    user: 'Bhoju!!!'
  })
});

app.listen(3000);
