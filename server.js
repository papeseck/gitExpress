const express = require('express');
const app = express();
const authAcces = require('./middlewares/authAcces')
const port = 8000;

//module
app.set('view engine', 'ejs')

//mideleware
//app.use(authAcces);
const dateTime = new Date();
const  day = dateTime.getDay();
//console.log(day)
const hour = dateTime.getHours();
app.use((req, res, next) => {

    if(day>=1 && day <=5 && hour>=9 && hour <= 17){
        next();

    } else {
        
            res.status(200).render('pages/err.ejs');
          
  
       
    }
})

// route /
app.get('/', (req, res) => {
  res.status(200).render('pages/index.ejs');

});
//route service
app.get('/service', (req, res) => {
  res.status(200).render('pages/service.ejs');

});
//route contact
app.get('/contact', (req, res) => {
  res.status(200).render('pages/contact.ejs');

});


app.listen(port, () => {
  console.log(`Listenin on port : ${port}`)
});