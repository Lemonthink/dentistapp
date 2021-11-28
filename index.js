const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dentist', function (req, res) {
    res.send('I will find a treatment you')
})
 
app.get('/toothfairy', function (req, res) {
    res.send('I will give you money for your tooth')
})
 
app.listen(3000)