const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const translation = require('./translation.json')
// const translate = [translation]


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.listen(3003, () => {
    console.log('app is listning on port:', 3003)

})

app.get('/',(req,res)=> {
    res.render(
        'home',translation["fr"]
    )
  
})
app.get('/en',(req,res)=> {
    res.render('home',translation["en"]
    )
  
})
app.get('/es',(req,res)=> {
    res.render('home',translation["es"])
})
