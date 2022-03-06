const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000   

app.use(express.static("assets"));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/homepage.html');
})

app.get('/app', function (req, res) {
	res.sendFile('app/index.html');
})

app.get('/miro', function (req, res) {
	res.redirect('https://miro.com/app/board/o9J_llS_z48=/');
})

app.get('/dentist', function (req, res) {
    res.send('I will find a treatment you')
})

app.get('/data', function (req, res) {
	res.redirect('drug_info_datasets/UCIdrug_train.csv');
})

app.get('/readme', function (req, res) {
  res.sendFile(__dirname+'/README.md')
})

app.get('/search', function (req, res) {
    res.send('Patient Seaerch')
})

app.get('/toothfairy', function (req, res) {
    res.send('I will give you money for your tooth')
})

app.listen(PORT)
