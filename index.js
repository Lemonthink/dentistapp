const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
 
app.get('/', function (req, res) {
  res.send('<h1> welcome to LemonThink. We are very cool people.</h1>')
})

app.get('/dentist', function (req, res) {
    res.send('I will find a treatment you')
})
 
app.get('/toothfairy', function (req, res) {
    res.send('I will give you money for your tooth')
})
 
app.listen(PORT)