const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
 
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/homepage.html');
})

app.get('/miro', function (req, res) {
  res.redirect('https://miro.com/app/board/o9J_llS_z48=/');
})

app.get('/dentist', function (req, res) {
    res.send('I will find a treatment you')
})
 
app.get('/toothfairy', function (req, res) {
    res.send('I will give you money for your tooth')
})
 
app.listen(PORT)