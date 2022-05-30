const express = require('express');
const app = express();
const authAcces = (req, res, next) => {
    let dateTime = new Date();
    const day = dateTime.getDay();
    //console.log(day)
    const hour = dateTime.getHours();
    if(day>=1 && day <=5 && hour>=9 && hour <= 15){
        next();
    } else {
        app.get('/err', (req, res) => {
            res.status(200).render('pages/err.ejs');
          
          });
       
    }
}

module.exports = authAcces