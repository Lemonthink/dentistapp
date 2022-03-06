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

<<<<<<< HEAD
app.get('/download', function (req, res) {
	res.sendFile('DOWNLOAD APP');
})

=======
app.get('/patientform', function(req, res) {
	res.send('PATIENT FORM !!!!!')
});
>>>>>>> 3e5b7ba58e856f44c9b1d5643fd0dbb6c91034e2

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

app.get('/toothfairy', function (req, res) {
    res.send('I will give you money for your tooth')
})

app.listen(PORT)
